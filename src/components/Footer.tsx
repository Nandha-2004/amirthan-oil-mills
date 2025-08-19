import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import logo from "../amirthan-logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
                <img
          src={logo}
          alt="Amirthan Oil Mills Logo"
          className="h-24 w-auto bg-white rounded"
        />
              
              <span className="text-xl font-bold">Amirthan Oil Mills</span>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Premium quality oils for your home and kitchen. We source the finest oils from trusted suppliers worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'Products', path: '/products' },
                { name: 'Contact', path: '/contact' },
                { name: 'Wishlist', path: '/wishlist' },
              ].map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-emerald-100 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-emerald-100 text-sm">
              <li>Cooking Oils</li>
              <li>Essential Oils</li>
              <li>Specialty Oils</li>
              <li>Organic Collection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-amber-400" />
                <span className="text-emerald-100 text-sm">+91 80150 79866</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-amber-400" />
                <span className="text-emerald-100 text-sm">amirthan_oils@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-amber-400" />
                <span className="text-emerald-100 text-sm">1, Mela Anuppanadi ,Tamil Nadu Housing Board Colony, Near By Fire Station,Madurai, Tamil Nadu 625009, India</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-emerald-100 hover:text-amber-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-emerald-100 hover:text-amber-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-emerald-100 hover:text-amber-400 transition-colors">
                <Twitter size={20} />
              </a>
             
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-emerald-100 text-sm">
            © 2024 Amirthan Oil Store. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link to="#" className="text-emerald-100 hover:text-amber-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-emerald-100 hover:text-amber-400 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;