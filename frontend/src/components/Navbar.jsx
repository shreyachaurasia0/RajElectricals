import React, { useState } from 'react';
import AnimatedLogo from './AnimatedLogo';
import { LuSearch } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";
import { Link ,NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="w-full h-27 shadow-md bg-white ">
      {/* Top Row */}
      <div className=" max-w-7xl mx-auto flex items-center justify-end  px-0 py-0 pt-0 my-0 m-0">
        
        {/* <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-8 rounded-full hover:bg-gray-100"
          >
            {menuOpen ? (
              <HiX className="text-2xl  text-gray-900" />
            ) : (
              <HiMenu className="flex justify-end text-2xl p-10 px-6 pl-3 text-gray-900" />
            )}
          </button> */}
        

        {/* Center: Logo*/}
        <div className="  ">
          <AnimatedLogo w={0} h={0} />
        </div>

        {/* Right: Search, User, Cart Icons */}
        <div className="flex items-center h-7 py-8 space-x-1.5">
          {/* Mobile Search Icon */}
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="lg:hidden p-2 rounded-full hover:bg-gray-100"
            
          ><IoSearch onClick={() => setShowSearch(!showSearch)} className="text-2xl text-gray-1000" />
            
          </button>

          
            {/* User Icon with dropdown */}
            <div className="relative">
              <button
                className="cursor-pointer rounded-full hover:bg-gray-100 p-1"
                onClick={() => setUserDropdownOpen((open) => !open)}
                aria-haspopup="true"
                aria-expanded={userDropdownOpen}
              >
                <FaUserLarge className="text-2xl text-gray-900" />
              </button>
              {userDropdownOpen && (
                <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-700 rounded absolute right-0 top-full mt-2 z-50 shadow-lg">
                  <p className='cursor-pointer hover:text-black'>My Profile</p>
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <p className='cursor-pointer hover:text-black'>Logout</p>
                </div>
              )}
            </div>

          {/* Cart Icon */}
          <Link to="/cart" >
              <div className="text-2xl relative cursor-pointer rounded-full hover:bg-gray-100 p-1">
            <FaCartShopping className="text-3xl text-gray-900" />
            <div className='bg-gray-700 text-white w-4.5 h-4.5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-1 text-center'>
              <p className='text-sm'>0</p>
            </div>
          </div>
          </Link>

          {/* <div className="md:hidden"> */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden rounded-full hover:bg-gray-100 "
          >
            {menuOpen ? (
              <HiX className="text-2xl  text-gray-900" />
            ) : (
              <HiMenu className="text-2xl text-gray-900" />
            )}
          </button>
        {/* </div> */}
        </div>
</div>
      {/* Desktop Nav Links */}
      <ul className="hidden md:flex justify-center space-x-15 font-medium  text-gray-800 ">
        <NavLink className="hover:text-blue-600" to="/">
            <p>HOME</p>
            <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink className="hover:text-blue-600" to="/collection">
            <p>COLLECTIONS</p>
            <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink className="hover:text-blue-600" to="/about">
            <p>ABOUT</p>
            <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink className="hover:text-blue-600" to="/contact">
            <p>CONTACT</p>
            <hr className='w-4/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>

      {/* Desktop Search Bar */}
      <div className="hidden lg:flex justify-center py-4 ">
        <div className="flex items-center w-full max-w-md border rounded-full px-2 focus-within:shadow-md ">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border-gray-400 focus:outline-none"
          />
          <div className="text-gray-800 w-8 h-8 flex items-center justify-center">
            <LuSearch />
          </div>
        </div>
      </div>
     

      {/* Mobile Search Bar (slide down) */}
      {showSearch && (
        <div className="lg:hidden px-6 pb-3 animate-slideDown">
          <div className="flex items-center border rounded-full px-2 focus-within:shadow-md">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border-gray-400 focus:outline-none"
            />
            <div className="text-gray-800 w-8 h-8 flex items-center justify-center">
              <IoSearch />
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-50 border-t py-4 px-6 space-y-1 font-medium text-gray-700">
          <NavLink className="hover:font-extrabold" to="/">
            <p>HOME</p>
          </NavLink>
          <NavLink className="hover:font-extrabold" to="/about">
            <p>ABOUT</p>
          </NavLink>
          <NavLink className="hover:font-extrabold" to="/collection">
            <p>COLLECTION</p>
          </NavLink>
          <NavLink className="hover:font-extrabold" to="/contact">
            <p>CONTACT</p>
          </NavLink>
        </nav>
      )}

    </header>
  );
};

export default Navbar;
