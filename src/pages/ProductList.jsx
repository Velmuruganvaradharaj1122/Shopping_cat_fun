import React, { useEffect, useState } from 'react';

const ProductList = ({ cart, addToCart, removeFromCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Fake Store API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);

  // Helper to check if an item is already in the cart
  const isInCart = (productId) => {
    return cart.some((item) => item.id === productId);
  };

  if (loading) {
    return <div className="text-center mt-20 text-xl font-semibold">Loading Products...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col justify-between bg-white hover:shadow-xl transition-shadow duration-300">
            
            {/* Image Section */}
            <div className="h-48 flex justify-center items-center mb-4 bg-white p-2">
              <img src={product.image} alt={product.title} className="h-full object-contain" />
            </div>

            {/* Content Section */}
            <div>
              <h3 className="font-semibold text-lg mb-2 truncate" title={product.title}>
                {product.title}
              </h3>
              <p className="text-gray-500 text-sm mb-3 line-clamp-2 h-10">
                {product.description}
              </p>
              <p className="text-xl font-bold text-green-600 mb-4">
                ${product.price.toFixed(2)}
              </p>
              
              {/* Conditional Button Rendering */}
              {isInCart(product.id) ? (
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition font-medium"
                >
                  Remove from Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-medium"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;