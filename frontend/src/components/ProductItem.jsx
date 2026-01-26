import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id , image , name , price}) => {
    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>  
      <div className='overflow-hidden bg-gray-100 rounded-lg aspect-square mb-4'>
        <img 
          className='w-full h-full object-cover hover:scale-110 transition ease-in-out duration-300' 
          src={image[0]} 
          alt={name}
        />
      </div>
      <div>
        <p className='text-sm font-medium text-gray-800 line-clamp-2 mb-1'>{name}</p>
        <p className='text-lg font-semibold text-gray-900'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
