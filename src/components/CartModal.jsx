import React from 'react';
import { ShoppingCart, X, Trash2 } from 'lucide-react';

const CartModal = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  if (!isOpen) return null;

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Your Cart ({cartItems.length})</h2>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-white hover:bg-opacity-20 p-2 rounded-full transition-all duration-300"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[60vh] p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-20 h-20 mx-auto text-gray-300 mb-4" />
              <p className="text-xl text-gray-500 font-semibold">Your cart is empty</p>
              <p className="text-gray-400 mt-2">Add some products to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain bg-white rounded-lg p-2"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-800 truncate">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                    <p className="text-lg font-bold text-blue-600 mt-2">
                      ${item.price}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600 transition-all duration-300 active:scale-95 flex items-center space-x-2"
                  >
                    <Trash2 className="w-5 h-5" />
                    <span className="hidden sm:inline">Remove</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-700">Total:</span>
              <span className="text-3xl font-bold text-blue-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 active:scale-95">
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;