// orderController.js

import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from 'stripe';
import Razorpay from 'razorpay';

// global variables
const currency = 'inr';

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const razorpayInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// helper to compute delivery total from items array
const computeDeliveryTotal = (items = []) => {
  return items.reduce((sum, it) => {
    const per = Number(it.deliveryCharge || 0);
    const qty = Number(it.quantity || 1);
    return sum + per * qty;
  }, 0);
};

// Placing orders using COD Method
const placeOrder = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const { items = [], amount = 0, address } = req.body;

    const deliveryTotal = computeDeliveryTotal(items);
    const finalAmount = Number(amount || 0) + deliveryTotal;

    const orderData = {
      userId,
      items,
      amount: finalAmount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed Successfully", orderId: newOrder._id });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
};

// Placing orders using Stripe Method
const placeOrderStripe = async (req, res) => {
  try {
    const { items = [], amount = 0, address } = req.body;
    const { origin } = req.headers;
    const deliveryTotal = computeDeliveryTotal(items);
    const finalAmount = Number(amount || 0) + deliveryTotal;

    const orderData = {
      // userId will be filled by authUser middleware if needed; frontend stores cart on server separately
      userId: req.user?.id || req.user?._id,
      items,
      amount: finalAmount,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = (items || []).map((item) => ({
      price_data: {
        currency: currency,
        product_data: { name: item.name },
        unit_amount: Math.round(Number(item.price || 0) * 100),
      },
      quantity: Number(item.quantity || 1),
    }));

    if (deliveryTotal > 0) {
      line_items.push({
        price_data: {
          currency: currency,
          product_data: { name: 'Delivery Charges' },
          unit_amount: Math.round(deliveryTotal * 100),
        },
        quantity: 1,
      });
    }

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: 'payment',
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.error("Stripe placeOrder error:", error);
    res.status(500).json({ success: false, message: error.message || "Stripe session creation failed" });
  }
};

// Verify Stripe
const verifyStripe = async (req, res) => {
  try {
    const { orderId, success } = req.body;
    const userId = req.user?.id || req.user?._id;

    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      if (userId) await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true, message: "Payment successful via Stripe" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment cancelled" });
    }
  } catch (error) {
    console.error("verifyStripe error:", error);
    res.status(500).json({ success: false, message: error.message || "Verification failed" });
  }
};

// Placing orders using Razorpay Method
const placeOrderRazorpay = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const { items = [], amount = 0, address } = req.body;

    const deliveryTotal = computeDeliveryTotal(items);
    const finalAmount = Number(amount || 0) + deliveryTotal;

    const orderData = {
      userId,
      items,
      amount: finalAmount,
      address,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const options = {
      amount: Math.round(finalAmount * 100), // smallest currency unit
      currency: currency.toUpperCase(),
      receipt: newOrder._id.toString(),
    };

    razorpayInstance.orders.create(options, (error, order) => {
      if (error) {
        console.error("Razorpay Order Creation Error:", error);
        return res.json({ success: false, message: "Razorpay order creation failed" });
      }
      res.json({ success: true, order });
    });
  } catch (error) {
    console.error("Razorpay placeOrder error:", error);
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
};

const verifyRazorpay = async (req, res) => {
  try {
    const { userId, razorpay_order_id } = req.body;
    const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id);
    if (orderInfo.status === 'paid') {
      await orderModel.findByIdAndUpdate(orderInfo.receipt, { payment: true });
      if (userId) await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true, message: "Payment Successful" });
    } else {
      res.json({ success: false, message: 'Payment Failed' });
    }
  } catch (error) {
    console.error("verifyRazorpay error:", error);
    res.status(500).json({ success: false, message: error.message || "Verification failed" });
  }
};

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching all orders:", error);
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
};

// Get Order Data for Frontend User
const userOrders = async (req, res) => {
  try {
    const userId = req.user?.id || req.user?._id;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
};

// update order status from Admin Panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: 'Status Updated' });
  } catch (error) {
    console.error("Error updating status:", error);
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
};

export { verifyRazorpay, verifyStripe, placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus };