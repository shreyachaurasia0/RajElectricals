import React ,{useState , useEffect} from 'react'
import {backendUrl , currency} from '../App'
import axios from 'axios'
import {toast} from 'react-toastify'
import { Link } from 'react-router-dom'

const List = ({token}) => {

  const [list , setList] = useState([])

  const fetchList = async ()=> {

    try{
      const response = await axios.get(backendUrl + '/api/product/list');

      if (response.data.success) {
        setList(response.data.products);
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(backendUrl + '/api/product/remove', { id }, { headers: { Authorization: `Bearer ${token}` } })

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList();
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <>
      <p className='text-2xl font-semibold mb-2'>Product List</p>
      <div className='flex flex-col gap-2'>
        {/* {List Table Title} */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b className='text-center'>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* {Product List} */}
        {list.map((item, index) => (
  <div key={index}>

    {/* Mobile layout */}
    <div className='md:hidden flex items-center gap-4 border p-2 rounded'>
      <img className='w-16 h-16 object-cover' src={item.image[0]} alt='' />

      <div className='flex-1'>
        <p className='font-semibold text-sm'>{item.name}</p>
        <p className='text-xs text-gray-500'>{item.category}</p>
        <p className='font-bold mt-1'>₹{item.price}</p>

        <div className='flex gap-2 mt-2'>
          <Link to={`/edit/${item._id}`}>
            <button className='px-2 py-1 text-xs bg-gray-700 text-white rounded'>
              Edit
            </button>
          </Link>
          <button onClick={() => removeProduct(item._id)} className='px-2 py-1 text-xs bg-red-700 text-white rounded'>
            Delete
          </button>
        </div>
      </div>
    </div>

    {/* Desktop layout */}
    <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
      <img className='w-12' src={item.image[0]} alt='' />
      <p>{item.name}</p>
      <p>{item.category}</p>
      <p className='text-center'>{item.price}</p>
      <p className='text-center flex gap-2 justify-center'>
        <Link to={`/edit/${item._id}`}>
          <button className='px-3 py-1 text-xs bg-gray-700 text-white rounded'>Edit</button>
        </Link>
        <button onClick={() => removeProduct(item._id)} className='px-3 py-1 text-xs bg-red-700 text-white rounded'>
          Delete
        </button>
      </p>
    </div>

  </div>
))}


      </div>
    </>
  )
}

export default List
