import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, X } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';

const Wishlist: React.FC = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addItem } = useCart();

  const handleMoveToCart = (product: any) => {
    addItem(product);
    removeFromWishlist(product.id);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="mx-auto text-gray-400 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Save your favorite products to buy them later</p>
          <Link
            to="/products"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
          <p className="text-gray-600">{items.length} item{items.length !== 1 ? 's' : ''}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="relative">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </Link>
                
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-sm transition-colors"
                >
                  <X size={16} className="text-gray-600" />
                </button>
              </div>

              <div className="p-4">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium text-gray-900 hover:text-emerald-700 transition-colors mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-sm text-gray-600 capitalize mb-3">
                  {product.category.replace('-', ' ')}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-700">
                    ${product.price.toFixed(2)}
                  </span>
                  
                  {product.inStock ? (
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="flex items-center space-x-1 bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-1.5 rounded-md text-sm font-medium transition-colors"
                    >
                      <ShoppingCart size={14} />
                      <span>Add to Cart</span>
                    </button>
                  ) : (
                    <span className="text-sm text-red-600 font-medium">Out of Stock</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;