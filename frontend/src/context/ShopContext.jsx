import React, {useState, createContext, useEffect } from "react";
//import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '₹';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

    const [search , setSearch] = useState('');
    const [showSearch , setShowSearch] = useState(false);
    const [cartItems , setCartItems] = useState({});
    const [products , setProducts] = useState([]);
    const [token , setToken] = useState('');
    const navigate = useNavigate();


    const authHeaders = () => {
      return token ? { Authorization: `Bearer ${token}` } : {};
    }

    const addToCart = async (itemId) => {
      if (!token) {
        toast.error('Please login to add items to cart');
        navigate('/login');
        return;
      }

      try {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = (cartData[itemId] || 0) + 1;
        setCartItems(cartData);

        const res = await axios.post(
          `${backendUrl}/api/cart/add`,
          { itemId },
          { headers: authHeaders() }
        );

        if (res.data?.success) {
          toast.success('Item added to cart');
          if (res.data?.cartData) {
            setCartItems(res.data.cartData);
          }
        } else {
          toast.error(res.data?.message || 'Failed to add to cart');
          // Revert cart update if backend fails
          let revertCart = structuredClone(cartItems);
          revertCart[itemId] = (revertCart[itemId] || 1) - 1;
          if (revertCart[itemId] === 0) delete revertCart[itemId];
          setCartItems(revertCart);
        }
      } catch (error) {
        console.error("addToCart error:", error);
        toast.error(error.response?.data?.message || 'Failed to add item to cart');
        // Revert cart update if network error
        let revertCart = structuredClone(cartItems);
        revertCart[itemId] = (revertCart[itemId] || 1) - 1;
        if (revertCart[itemId] === 0) delete revertCart[itemId];
        setCartItems(revertCart);
      }
    };

    const getCartCount = () => {
      let totalCount = 0;
      for(const item in cartItems){
        if(cartItems[item] > 0) totalCount += cartItems[item];
      }
      return totalCount;
    }

    const getCartAmount = () => {
      let totalAmount = 0;
      for(const item in cartItems){
        if(cartItems[item] > 0) {
          let itemInfo = products.find((product) => product._id === item || product.id === item || product.id === Number(item));
          if(itemInfo) {
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
      }
      return totalAmount;
    }

    // total delivery based on product.deliveryCharge (fallback to global delivery_fee)
    const getDeliveryTotal = () => {
      let totalDelivery = 0;
      for (const item in cartItems) {
        const qty = cartItems[item];
        if (qty > 0) {
          const itemInfo = products.find((product) => product._id === item || product.id === item || product.id === Number(item));
          if (itemInfo) {
            const perItemDelivery = typeof itemInfo.deliveryCharge === 'number' ? itemInfo.deliveryCharge : delivery_fee;
            totalDelivery += perItemDelivery * qty;
          }
        }
      }
      return totalDelivery;
    }

    // grand total = subtotal + delivery total
    const getCartTotal = () => {
      return getCartAmount() + getDeliveryTotal();
    }
    
    const getProductsData = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/product/list`);
        if (response.data.success) {
          setProducts(response.data.products);
        } else {
          toast.error(response.data.message);
          console.log("Error:", response.data.message);
        }
      } catch (error) {
        console.log("Error fetching products:", error);
        toast.error(error.message);
      }
    };

    const updateQuantity = async (itemId ,quantity ) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);

        if(token){
            try{
                const res = await axios.post(
                  `${backendUrl}/api/cart/update`,
                  { itemId, quantity },
                  { headers: authHeaders() }
                );
                if (res.data?.success && res.data?.cartData) {
                  setCartItems(res.data.cartData);
                } else if (!res.data?.success) {
                  toast.error(res.data.message || 'Failed to update cart');
                }
            }catch (error) {
                console.error("updateQuantity error:", error);
                toast.error(error.response?.data?.message || error.message || 'Network error');
            }
        }
    }

    const getUserCart = async () =>{
        if(!token) return;
        try{
            const res = await axios.post(`${backendUrl}/api/cart/get`, {}, { headers: authHeaders() });
            if(res.data.success && res.data.cartData){
                setCartItems(res.data.cartData)
            }
        }catch(error){
            console.log(error)
            toast.error(error.response?.data?.message || error.message)
        }
    }

    useEffect(()=>{
        getProductsData()
    },[]);

    useEffect(()=>{
       // initialize token from localStorage and fetch cart
       const sToken = localStorage.getItem("token");
       if(!token && sToken){
         setToken(sToken);
       }
       if(sToken){
         getUserCart();
       }
    },[]);

    useEffect(()=>{
      // when token changes persist and fetch cart
      if(token){
        localStorage.setItem('token', token);
        getUserCart();
      } else {
        localStorage.removeItem('token');
        setCartItems({});
      }
    },[token]);

    const value = {
        products , currency , delivery_fee,
        search , setSearch,
        showSearch , setShowSearch , cartItems , addToCart,
        getCartCount , updateQuantity, getCartAmount, navigate , backendUrl,
        setToken , token ,setCartItems,
        getDeliveryTotal, getCartTotal
    }

    return(
        <ShopContext.Provider value={value}>  
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;