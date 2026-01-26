import userModel from '../models/userModel.js';

// Add to cart
const addToCart = async (req, res) => {
    try {
        const userId = req.user.id || req.user._id;
        const { itemId } = req.body;

        if (!itemId) {
            return res.status(400).json({ success: false, message: "Item ID is required" });
        }

        const userData = await userModel.findById(userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};
        cartData[itemId] = (cartData[itemId] || 0) + 1;

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added to cart", cartData });
    } catch (error) {
        console.error("addToCart error:", error);
        res.status(500).json({ success: false, message: error.message || "Error adding to cart" });
    }
};

// Update cart quantity
const updateCart = async (req, res) => {
    try {
        const userId = req.user.id || req.user._id;
        const { itemId, quantity } = req.body;

        if (!itemId || quantity === undefined) {
            return res.status(400).json({ success: false, message: "Item ID and quantity are required" });
        }

        const userData = await userModel.findById(userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {};

        if (quantity <= 0) {
            delete cartData[itemId];
        } else {
            cartData[itemId] = quantity;
        }

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Cart updated", cartData });
    } catch (error) {
        console.error("updateCart error:", error);
        res.status(500).json({ success: false, message: error.message || "Error updating cart" });
    }
};

// Get cart
const getCart = async (req, res) => {
    try {
        const userId = req.user.id || req.user._id;

        const userData = await userModel.findById(userId);
        
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const cartData = userData.cartData || {};

        res.json({ success: true, cartData });
    } catch (error) {
        console.error("getCart error:", error);
        res.status(500).json({ success: false, message: error.message || "Error fetching cart" });
    }
};

export { addToCart, updateCart, getCart };
