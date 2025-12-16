import React from 'react';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <div className="h-64 overflow-hidden bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 h-14 text-gray-800">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-blue-600">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            isInCart
              ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
              : 'bg-blue-600 text-white hover:bg-blue-700 active:scale-95'
          }`}
          disabled={isInCart}
        >
          {isInCart ? 'Already in Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;