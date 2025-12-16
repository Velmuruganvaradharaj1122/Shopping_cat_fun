import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  
  // Calculation Logic
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = totalAmount * 0.10; // 10% Discount
  const finalPrice = totalAmount - discountAmount;

  if (cart.length === 0) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty!</h2>
        <Link to="/" className="text-blue-600 underline hover:text-blue-800">
          Go back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Your Shopping Cart</h2>
      
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Cart Items List */}
        <div className="flex-1 flex flex-col gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded-lg shadow-sm bg-white">
              
              {/* Product Info */}
              <div className="flex items-center gap-4 w-full sm:w-1/2">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain p-1 border rounded" />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-500 text-sm">${item.price.toFixed(2)} each</p>
                </div>
              </div>
              
              {/* Controls */}
              <div className="flex items-center justify-between w-full sm:w-1/2 mt-4 sm:mt-0 gap-4">
                
                {/* Quantity Buttons */}
                <div className="flex items-center border border-gray-300 rounded">
                  <button 
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                    disabled={item.quantity <= 1}
                  >-</button>
                  <span className="px-4 py-1 font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
                  >+</button>
                </div>

                {/* Item Total Price */}
                <div className="font-bold text-lg w-24 text-right">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                {/* Remove Button */}
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200 transition text-sm font-semibold"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Summary Sidebar */}
        <div className="w-full lg:w-80 h-fit p-6 bg-white rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold mb-4 border-b pb-2">Order Summary</h3>
          
          <div className="flex justify-between mb-2 text-gray-600">
            <span>Subtotal:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between mb-4 text-green-600">
            <span>Discount (10%):</span>
            <span>-${discountAmount.toFixed(2)}</span>
          </div>
          
          <hr className="my-2 border-gray-200" />
          
          <div className="flex justify-between text-xl font-bold text-gray-900 mt-4">
            <span>Total:</span>
            <span>${finalPrice.toFixed(2)}</span>
          </div>
          
          <button className="w-full bg-blue-600 text-white mt-6 py-3 rounded-lg hover:bg-blue-700 transition font-bold shadow-md">
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;