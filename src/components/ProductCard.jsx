import React from 'react';
import { Plus, Check } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group overflow-hidden border border-gray-100">
      <div className="h-48 p-6 flex justify-center items-center relative overflow-hidden bg-white">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs text-blue-600 font-semibold uppercase tracking-wider mb-2">
          {product.category}
        </p>
        <h3 className="font-bold text-gray-800 text-lg mb-2 line-clamp-2 leading-tight" title={product.title}>
          {product.title}
        </h3>
        
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
          
          <button
            onClick={() => onAddToCart(product)}
            disabled={isInCart}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              isInCart
                ? 'bg-green-100 text-green-700 cursor-default'
                : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95 shadow-md hover:shadow-lg'
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;