import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, Truck, Calendar } from 'lucide-react';

const OrderConfirmation: React.FC = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails;

  if (!orderDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Not Found</h2>
          <Link to="/" className="text-emerald-700 hover:text-emerald-800">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const orderNumber = `#${Date.now().toString().slice(-6)}`;
  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
          <h1 className="text-3xl font-bold text-gray-900">Order Confirmed!</h1>
          <p className="text-gray-600 mt-2">
            Thank you for your purchase. Your order has been successfully placed.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Information</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Number:</span>
                  <span className="font-medium">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Order Date:</span>
                  <span className="font-medium">{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Payment Method:</span>
                  <span className="font-medium capitalize">
                    {orderDetails.customerInfo.paymentMethod.replace('-', ' ')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Amount:</span>
                  <span className="font-bold text-emerald-700">${orderDetails.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Delivery Information</h3>
              <div className="space-y-2">
                <div>
                  <span className="text-gray-600">Delivering to:</span>
                  <p className="font-medium">{orderDetails.customerInfo.name}</p>
                </div>
                <div>
                  <span className="text-gray-600">Address:</span>
                  <p className="font-medium text-sm">{orderDetails.customerInfo.address}</p>
                </div>
                <div>
                  <span className="text-gray-600">Phone:</span>
                  <p className="font-medium">{orderDetails.customerInfo.phone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Timeline */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Timeline</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium">Order Placed</p>
                  <p className="text-sm text-gray-600">Your order has been confirmed</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <Package className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-500">Processing</p>
                  <p className="text-sm text-gray-500">Preparing your order</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <Truck className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-500">Shipped</p>
                  <p className="text-sm text-gray-500">Out for delivery</p>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <Calendar className="text-white" size={20} />
                </div>
                <div>
                  <p className="font-medium text-gray-500">Delivered</p>
                  <p className="text-sm text-gray-500">Est. {estimatedDelivery}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ordered Items */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Ordered Items</h3>
          <div className="space-y-4">
            {orderDetails.items.map((item: any) => (
              <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-100 last:border-b-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{item.name}</h4>
                  <p className="text-sm text-gray-600 capitalize">{item.category.replace('-', ' ')}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-600">
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/products"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-md font-medium text-center transition-colors"
          >
            Continue Shopping
          </Link>
          <Link
            to="/contact"
            className="border border-emerald-700 text-emerald-700 hover:bg-emerald-700 hover:text-white px-8 py-3 rounded-md font-medium text-center transition-colors"
          >
            Contact Support
          </Link>
        </div>

        {/* Additional Information */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-8">
          <h4 className="font-medium text-blue-900 mb-2">What's Next?</h4>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• You will receive a confirmation email shortly</li>
            <li>• We'll notify you when your order is ready for shipment</li>
            <li>• Track your order status by contacting our support team</li>
            <li>• Estimated delivery: {estimatedDelivery}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;