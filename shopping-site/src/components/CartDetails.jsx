import React, { useContext } from 'react';
import { ShopContext } from '../layouts/MainLayout';
import { Link } from 'react-router-dom';

const CartDetails = () => {
  const { inventory, handleOperation } = useContext(ShopContext);
  const cartItems = inventory.filter(item => item.quantityOrdered > 0);

  if (cartItems.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
        <p className="text-gray-800 text-center text-3xl font-medium">Uh-Oh! Looks like your cart is empty.</p>
        <p className="text-gray-600 text-center">Get back to the <span className='underline text-lg font-bold text-orange-700'><Link to="/shop">Shop Page</Link></span> and buy some products.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">

            <div className="w-full sm:w-24 h-40 sm:h-24 flex-shrink-0">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex-grow space-y-2">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                ₹{item.price.toFixed(2)}
              </p>
              
              <div className="flex items-center gap-4 mt-2">
                <button
                  onClick={() => handleOperation(item.id, "decrement")}
                  className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md hover:bg-orange-200 transition-colors"
                >
                  -
                </button>
                <span className="text-gray-700 min-w-[20px] text-center">
                  {item.quantityOrdered}
                </span>
                <button
                  onClick={() => handleOperation(item.id, "increment")}
                  className="bg-orange-100 text-orange-600 px-3 py-1 rounded-md hover:bg-orange-200 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            <div className="w-full sm:w-auto text-right mt-2 sm:mt-0">
              <p className="font-semibold text-gray-800 text-base sm:text-lg">
                ₹{(item.price * item.quantityOrdered).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartDetails;