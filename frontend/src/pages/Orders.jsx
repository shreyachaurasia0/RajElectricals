import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'
import { toast } from 'react-toastify'

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext)
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUserOrders = async () => {
    if (!token) return

    try {
      setLoading(true)
      const response = await axios.get(
        backendUrl + '/api/order/userorders',
        { headers: { Authorization: `Bearer ${token}` } }
      )

      if (response.data.success) {
        setOrders(response.data.orders.reverse())
      } else {
        toast.error(response.data.message || 'Failed to fetch orders')
      }
    } catch (error) {
      console.log(error)
      toast.error(error.response?.data?.message || 'Error fetching orders')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUserOrders()
  }, [token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl mb-8 mt-20'>
        <Title text1={'MY'} text2={'ORDERS'} />
      </div>

      <div>
        {loading ? (
          <p className='py-4 text-center'>Loading orders...</p>
        ) : orders.length === 0 ? (
          <p className='py-4 text-center text-gray-500'>No orders yet</p>
        ) : (
          orders.map((order, index) => (
            <div key={index} className='py-4 px-4 border border-gray-300 rounded mb-4 bg-white'>
              <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-start'>
                {/* Product Image */}
                <div className='flex items-center justify-center bg-white'>
                  {order.items[0]?.image ? (
                    <img 
                      src={order.items[0].image} 
                      alt={order.items[0].name}
                      className='w-20 h-20 object-cover rounded'
                    />
                  ) : (
                    <div className='w-20 h-20 bg-gray-200 rounded flex items-center justify-center'>
                      <span className='text-gray-400 text-xs'>No Image</span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className='md:col-span-2 '>
                  <div className='mb-2'>
                    {order.items.map((item, idx) => (
                      <p key={idx} className='text-sm text-gray-700'>
                        <span className='font-medium'>{item.name}</span> x {item.quantity}
                        {order.items.length > 1 && idx < order.items.length - 1 && ', '}
                      </p>
                    ))}
                  </div>
                  <p className='text-xs text-gray-500 mb-2'>
                    Date: {new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: '2-digit' })}
                  </p>
                  <p className='text-xs text-gray-500'>
                    Payment: <span className='font-medium'>{order.paymentMethod}</span>
                  </p>
                </div>

                {/* Amount & Status */}
                <div className='text-center md:text-left'>
                  <p className='text-lg font-semibold text-gray-800'>
                    {currency}{order.amount}
                  </p>
                  <p className='text-xs text-gray-500 mt-1 flex items-center justify-center md:justify-start'>
                    <span className='w-2 h-2 rounded-full bg-green-500 mr-2'></span>
                    {order.status || 'Order Placed'}
                  </p>
                </div>

                {/* Track Order Button */}
                <div className='text-center'>
                  <button 
                    onClick={() => toast.info(`Order Status: ${order.status || 'Order Placed'}`)}
                    className='px-4 py-2 border border-gray-400 text-gray-700 text-sm rounded hover:bg-gray-100 transition'
                  >
                    Track Order
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default Orders