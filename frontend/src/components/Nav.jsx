import React , {useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import {assets} from '../assets/frontend_assets/assets'
import { NavLink , Link} from 'react-router-dom';
import { LuSearch } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";

const Nav = () => {

  const [visible , setVisible] = useState(false);

  const { setShowSearch , getCartCount , navigate , token , setToken , setCartItems} = useContext(ShopContext);

  const logout = () =>{
    navigate('/login');
    localStorage.removeItem("token");
    setToken('');
    setCartItems({});
  }

  return (
    <>
  <div className='w-full flex pb-3 items-center justify-between py-5 px-4 font-medium bg-white shadow-md fixed  left-0 right-0 z-50'>
        <img src={assets.Raj} className='w-46 '/>
  <ul className='hidden sm:flex gap-10 text-lg md:text-md text-gray-900 font-stretch-extra-condensed'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' onClick={() => window.scrollTo(0, 0)} className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' onClick={() => window.scrollTo(0, 0)} className='flex flex-col items-center gap-1'>
                <p>ABOUT</p>
                <hr className='w-4/4 border-none  h-[1.5px] bg-gray-900 hidden'/>
            </NavLink>
            <NavLink to='/contact' onClick={() => window.scrollTo(0, 0)} className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
  <div className='flex items-center gap-3 min-w-0 text-2xl lg:px-[2.5vw] lg:gap-5'>
           <Link to={'/collection'}> <LuSearch onClick={()=>{setShowSearch(true);window.scrollTo(0, 0); }} className='w-5 cursor-pointer'/></Link>
            <div className='group relative'>
               <FaUserLarge onClick ={()=>token ? null: navigate('/login')} className='w-5 cursor-pointer'/>
                {/* Dropdown menu */}
                {token && 
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                   <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-200 text-gray-700 rounded'>
                      {/* <Link to={'/profile'}> <p className='cursor-pointer hover:text-black'>My Profile</p></Link> */}
                      <Link to={'/orders'}><p className='cursor-pointer hover:text-black'>Orders</p></Link>
                      <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                   </div>
                </div>}
            </div>
            <Link to='/cart' className ='relative'>
                <FaCartShopping className='w-5  min-w-5'/>
                <p className='bg-gray-700 text-white text-xs w-1.5 h-2.5 rounded-full p-2.5 flex items-center justify-center absolute -top-3 -right-4 text-center'>{getCartCount()}</p>
            </Link>
            <HiMenu onClick={() => setVisible(true)} className='w-5 cursor-pointer sm:hidden'/>
        </div>
        {/* Sidebar menu for small screen */}
  <div className={`fixed top-0 left-0 right-0 h-screen z-50 bg-white transition-all duration-300 ease-in-out ${visible ? 'w-full' : 'w-0'} overflow-x-hidden`} style={{visibility: visible ? 'visible' : 'hidden'}}>
     <div className={`flex flex-col text-gray-600 ${visible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}>
              <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                <IoIosArrowForward className='h-4 rotate-180'/>
                <p>Back</p>
              </div>            
              <NavLink to='/' onClick={() => {
    setVisible(false);
    window.scrollTo(0, 0);
  }} className='flex flex-col items-center gap-1 p-3 border-b border-gray-300'>
                <p>HOME</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
              </NavLink>
              <NavLink to='/collection' onClick={() => {
    setVisible(false);
    window.scrollTo(0, 0);
  }} className='flex flex-col items-center gap-1 p-3 border-b border-gray-300'>
                <p>COLLECTION</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
              </NavLink>
              <NavLink to='/about' onClick={() => {
    setVisible(false);
    window.scrollTo(0, 0);
  }} className='flex flex-col items-center gap-1 p-3 border-b border-gray-300'>
                <p>ABOUT</p>
                <hr className='w-4/4 border-none  h-[1.5px] bg-gray-900 hidden'/>
              </NavLink>
              <NavLink to='/contact' onClick={() => {
    setVisible(false);
    window.scrollTo(0, 0);
  }} className='flex flex-col items-center gap-1 p-3 border-b border-gray-300'>
                <p>CONTACT</p>
                <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
              </NavLink>
           </div>
        </div>
    </div>
   </>
  )
}

export default Nav
