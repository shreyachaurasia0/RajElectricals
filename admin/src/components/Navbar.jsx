import React from 'react'
import {assets} from "../assets/admin_assets/assets";

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-46 left-0 ' src={assets.Raj} alt="" />
      <button onClick={()=>setToken('')} className='bg-gray-600 text-white cusror-pointer px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm'>Logout</button>
    </div>
  )
}

export default Navbar
