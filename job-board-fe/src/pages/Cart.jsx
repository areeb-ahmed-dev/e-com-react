import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const total = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-width header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">Your Shopping Cart</h1>
        </div>
      </div>

      {/* Full-width content */}
      <div className="container mx-auto px-4 py-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <p className="text-xl text-gray-600 mb-4">Your cart is empty</p>
            <Link 
              to="/" 
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart items - takes 2/3 width on large screens */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow p-6 flex flex-col sm:flex-row gap-6">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full sm:w-32 h-32 object-contain"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-gray-600 mt-1">${item.price}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center border rounded-lg">
                        <button 
                          onClick={() => updateQuantity(index, (item.quantity || 1) - 1)}
                          className="px-3 py-1 hover:bg-gray-100"
                          disabled={(item.quantity || 1) <= 1}
                        >
                          -
                        </button>
                        <span className="px-3">{(item.quantity || 1)}</span>
                        <button 
                          onClick={() => updateQuantity(index, (item.quantity || 1) + 1)}
                          className="px-3 py-1 hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(index)}
                        className="text-red-500 hover:text-red-700 ml-auto"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order summary - takes 1/3 width on large screens */}
            <div className="bg-white rounded-lg shadow p-6 h-fit sticky top-4">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.title} × {item.quantity || 1}</span>
                    <span>${(item.price * (item.quantity || 1)).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}