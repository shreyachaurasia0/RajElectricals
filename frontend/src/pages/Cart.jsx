import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import CartTotal from "../components/CartTotal";

const Cart = () => {

  const {products , currency , cartItems , updateQuantity , navigate} = useContext(ShopContext);

  const [cartData , setCartData] = useState([]);

  useEffect(() =>{

    if(products.length > 0){
      const tempData = [];
    for(const items in cartItems){
        if(cartItems[items] > 0){
          tempData.push({
            _id : items,
            quantity:cartItems[items]
          })
        
      }
    }

    setCartData(tempData)
    } 
  },[cartItems,products])

  // Handler to update quantity in cartData
  const handleQuantityChange = (index, value) => {
    const newCartData = [...cartData];
    const qty = Math.max(1, parseInt(value) || 1);
    newCartData[index].quantity = qty;
    setCartData(newCartData);
  };

  return (
    <div className='border-t pt-30'>
      <div className='text-2xl mb-3'>
          <Title text1={'Your'} text2={'Cart'}/>
      </div>
      <div className='flex flex-col gap-6'>
        {cartData.map((item , index) => {
          const productData = products.find((prod) => prod._id === item._id);
          return (
            <div key={index} className='py-4 border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-6'>
                <img src={productData?.image[0]} alt={productData?.name} className='w-16 sm:w-20'/>
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productData.price}</p>
                    <p className='text-sm'>Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
              <input
                className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1'
                type="number"
                min={1}
                value={item.quantity}
                onChange={e => handleQuantityChange(index, e.target.value)}
                onChangeCapture={e => updateQuantity(item._id, Math.max(1, parseInt(e.target.value) || 1))}
              />
              <img onClick={() => updateQuantity(item._id , 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
            </div>
          )
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick={()=>navigate('/place-order')} className='cursor-pointer lg:[w-10%] bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white my-8 px-8 py-3 text-sm font-semibold rounded-lg shadow-md transition-transform duration-200 hover:scale-105 hover:from-yellow-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-black active:scale-95'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
