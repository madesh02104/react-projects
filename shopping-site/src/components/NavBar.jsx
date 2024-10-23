import React, { useState, useContext } from 'react';
import { NavLink } from "react-router-dom";
import { FaCartShopping } from 'react-icons/fa6';
import { ShopContext } from '../layouts/MainLayout';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { inventory } = useContext(ShopContext);

  const cartItemCount = inventory.reduce((total, item) => total + (item.quantityOrdered > 0 ? 1 : 0), 0);

  const CartIcon = () => (
    <div className="relative inline-block">
      <FaCartShopping className='h-6 w-6'/>
      {cartItemCount > 0 && (
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cartItemCount > 99 ? '99+' : cartItemCount}
        </div>
      )}
    </div>
  );

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/cart", label: <CartIcon />, className: "cart-icon" }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <div className='relative m-2 py-2 px-4 flex justify-between items-center'>
        
        <NavLink to="/" className="z-20">
          <span className='text-orange-500 text-2xl sm:text-3xl font-extrabold'>
            KADAI
          </span>
        </NavLink>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-20 p-2 hover:bg-gray-100 rounded"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-1 rounded bg-gray-600 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-1 rounded bg-gray-600 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-1 rounded bg-gray-600 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        <div className='hidden md:flex justify-between gap-12 text-lg'>
          {navLinks.map(({ to, label, className }) => (
            <NavLink
              key={to}
              to={to}
              className={`flex items-center hover:text-orange-600 active:scale-105 ${className === 'cart-icon' ? 'hover:scale-125 transition-transform duration-200' : ''}`}
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className={`
          md:hidden
          fixed top-0 right-0 
          w-full h-screen
          bg-white
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="pt-20 px-6 flex flex-col gap-6 text-lg">
            {navLinks.map(({ to, label, className }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center hover:text-orange-600 active:scale-105 ${className === 'cart-icon' ? 'text-2xl' : ''}`}
              >
                {typeof label === 'string' ? label : (
                  <span className="flex gap-2 items-center">
                    {label} Cart {cartItemCount > 0 && `(${cartItemCount})`}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;