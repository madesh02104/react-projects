import React from 'react';
import CartDetails from '../components/CartDetails';
import Checkout from '../components/Checkout';

const Cart = () => {
  return (
    <div className="mt-20 container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        Shopping Cart
      </h1>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8">
        <div className="w-full lg:w-2/3">
          <CartDetails />
        </div>
        <div className="w-full lg:w-1/3 mt-4 lg:mt-0">
          <Checkout />
        </div>
      </div>
    </div>
  );
};

export default Cart;
