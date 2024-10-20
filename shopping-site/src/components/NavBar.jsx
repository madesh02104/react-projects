import React from 'react'
import { NavLink } from "react-router-dom";
import { FaCartShopping } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className='m-2 py-2 px-4 flex justify-between items-center'>
        <NavLink to="/"><span className='hidden min-[360px]:block text-orange-500 text-2xl sm:text-3xl font-extrabold'>KADAI</span></NavLink>
        <div className='inline-flex justify-between gap-6 sm:gap-12 text-sm sm:text-lg'>
          <NavLink to="/" className="flex items-center hover:text-orange-600 active:scale-105">Home</NavLink>
          <NavLink to="/shop" className="flex items-center hover:text-orange-600 active:scale-105">Shop</NavLink>
          <NavLink to="/cart" className="flex items-center hover:text-orange-600 active:scale-125"><FaCartShopping /></NavLink>
        </div>
      </div>
    </nav>
  );
};


export default NavBar