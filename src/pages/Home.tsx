import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Star, Users, Truck, Shield, Award } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, testimonials } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.filter(product => product.featured);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < Math.floor(rating)
            ? 'text-amber-400 fill-current'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Pure Quality Oils for Every{' '}
                <span className="text-emerald-700">Home & Kitchen</span>
              </h1>
              <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                Discover our premium collection of cooking oils, essential oils, and specialty blends. 
                Sourced from the finest ingredients worldwide for your health and wellness.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                >
                  <ShoppingBag size={20} />
                  <span>Shop Now</span>
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white px-8 py-4 rounded-lg font-medium transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800"
                alt="Premium Oils"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex text-amber-400">
                    {renderStars(5)}
                  </div>
                  <span className="font-medium text-gray-900">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600">Over 500+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose PureOil?</h2>
            <p className="text-gray-600 mt-4">Experience the difference with our premium quality oils</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="text-emerald-700" size={32} />,
                title: 'Premium Quality',
                description: 'Sourced from the finest producers worldwide with rigorous quality standards'
              },
              {
                icon: <Truck className="text-emerald-700" size={32} />,
                title: 'Fast Delivery',
                description: 'Quick and secure shipping to your doorstep with careful packaging'
              },
              {
                icon: <Award className="text-emerald-700" size={32} />,
                title: 'Certified Organic',
                description: 'Many of our products are certified organic and free from harmful chemicals'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
            <p className="text-gray-600 mt-4">Discover our most popular and highest-rated oils</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-emerald-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">What Our Customers Say</h2>
            <p className="text-emerald-100 mt-4">Don't just take our word for it</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-amber-400">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of satisfied customers who trust PureOil for their cooking and wellness needs.
          </p>
          <Link
            to="/products"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center space-x-2 transition-colors"
          >
            <ShoppingBag size={20} />
            <span>Start Shopping</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;