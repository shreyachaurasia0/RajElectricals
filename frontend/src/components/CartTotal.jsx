import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {
  const { getCartAmount, getDeliveryTotal, getCartTotal, currency } = useContext(ShopContext)

  const subtotal = getCartAmount()
  const delivery = getDeliveryTotal()
  const total = getCartTotal()

  return (
    <div className='w-full border p-4 rounded bg-white shadow-sm'>
      <h3 className='text-lg font-semibold mb-3'>Order Summary</h3>
      <div className='flex justify-between text-sm text-gray-600 mb-1'>
        <span>Subtotal</span>
        <span>{currency}{subtotal.toFixed(2)}</span>
      </div>
      <div className='flex justify-between text-sm text-gray-600 mb-1'>
        <span>Delivery</span>
        <span>{currency}{delivery.toFixed(2)}</span>
      </div>
      <div className='border-t mt-2 pt-2 flex justify-between items-center'>
        <span className='text-base font-semibold'>Total</span>
        <span className='text-lg font-bold'>{currency}{total.toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CartTotal
