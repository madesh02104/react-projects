import React from 'react'
import { NavLink } from "react-router-dom";
import { FaCartShopping } from 'react-icons/fa6';

const NavBar = () => {
  return (
    <nav>
      <div className='w-full py-2 px-4 flex justify-between items-center'>
        <NavLink to="/"><span className='hidden min-[480px]:block text-orange-500 text-3xl font-extrabold'>KADAI</span></NavLink>
        <div className='inline-flex justify-between gap-12 text-lg'>
          <NavLink className="flex items-center hover:text-orange-600 active:scale-105">Home</NavLink>
          <NavLink className="flex items-center hover:text-orange-600 active:scale-105">Shop</NavLink>
          <NavLink className="flex items-center hover:text-orange-600 active:scale-125"><FaCartShopping /></NavLink>
        </div>
      </div>
    </nav>
  )
}

export default NavBar