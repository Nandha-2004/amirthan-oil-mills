import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu, X, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useAuth } from '../context/AuthContext';
import logo from "../amirthan-logo.png";
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const { items: wishlistItems } = useWishlist();
  const { user, logout } = useAuth();
  const location = useLocation();

  const cartItemCount = getItemCount();
  const wishlistItemCount = wishlistItems.length;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
         
          <Link to="/" className="flex items-center space-x-2">
             <img
          src={logo}
          alt="Amirthan Oil Mills Logo"
          className="h-24 w-auto rounded"
        />
            <span className="text-xl font-bold text-emerald-700">Amirthan Oil Mills</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-emerald-700 ${
                  isActive(link.path) ? 'text-emerald-700 border-b-2 border-emerald-700' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/products" className="p-2 text-gray-600 hover:text-emerald-700 transition-colors">
              <Search size={20} />
            </Link>
            
            <Link to="/wishlist" className="p-2 text-gray-600 hover:text-emerald-700 transition-colors relative">
              <Heart size={20} />
              {wishlistItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              )}
            </Link>

            <Link to="/cart" className="p-2 text-gray-600 hover:text-emerald-700 transition-colors relative">
              <ShoppingCart size={20} />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

{/*            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Hi, {user.name}</span>
                {user.isAdmin && (
                  <Link to="/admin/login" className="p-2 text-gray-600 hover:text-emerald-700 transition-colors">
                    <User size={20} />
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-sm text-gray-600 hover:text-emerald-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/admin/login" className="p-2 text-gray-600 hover:text-emerald-700 transition-colors">
                <User size={20} />
              </Link>
            )}*/}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-emerald-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium transition-colors duration-200 hover:text-emerald-700 ${
                    isActive(link.path) ? 'text-emerald-700' : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <Link to="/wishlist" className="relative" onClick={() => setIsMenuOpen(false)}>
                    <Heart size={20} className="text-gray-600" />
                    {wishlistItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {wishlistItemCount}
                      </span>
                    )}
                  </Link>
                  
                  <Link to="/cart" className="relative" onClick={() => setIsMenuOpen(false)}>
                    <ShoppingCart size={20} className="text-gray-600" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                        {cartItemCount}
                      </span>
                    )}
                  </Link>
                </div>

                {user ? (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Hi, {user.name}</span>
                    <button
                      onClick={() => {
                        logout();
                        setIsMenuOpen(false);
                      }}
                      className="text-sm text-gray-600 hover:text-emerald-700"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <Link to="/admin/login" onClick={() => setIsMenuOpen(false)}>
                    <User size={20} className="text-gray-600" />
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;