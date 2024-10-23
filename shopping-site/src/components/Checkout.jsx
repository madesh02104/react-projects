import { useContext } from 'react';
import { ShopContext } from '../layouts/MainLayout';

const Checkout = () => {
  const { inventory } = useContext(ShopContext);
  const cartItems = inventory.filter(item => item.quantityOrdered > 0);
  
  const subtotal = cartItems.reduce((total, item) => 
    total + (item.price * item.quantityOrdered), 0
  );
  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 top-4">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
        Order Summary
      </h2>
      
      <div className="space-y-3 mb-4 max-h-[40vh] overflow-y-auto">
        {cartItems.map(item => (
          <div key={item.id} className="flex justify-between text-sm sm:text-base text-gray-600">
            <span className="line-clamp-1 flex-grow mr-2">
              {item.title}
            </span>
            <span className="flex-shrink-0">
              ₹{(item.price * item.quantityOrdered).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-3">
        <div className="flex justify-between text-sm sm:text-base text-gray-600">
          <span>Subtotal</span>
          <span>₹{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm sm:text-base text-gray-600">
          <span>GST (18%)</span>
          <span>₹{gst.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-base sm:text-lg text-gray-800 pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      <button 
        className="w-full bg-orange-500 hover:bg-orange-400 active:bg-black text-white py-2 sm:py-3 rounded-md mt-6 text-sm sm:text-base font-semibold transition-colors"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Checkout;