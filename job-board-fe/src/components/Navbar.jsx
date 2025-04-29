import { Link } from 'react-router-dom';
import { useAuth, useCart } from '../contexts/AuthContext';
import SearchBar from './SearchBar';

export default function Navbar() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="bg-gray-800 text-white w-full shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            ShopCart
          </Link>
          
          <div className="flex-1 max-w-xl mx-4">
            <SearchBar />
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/cart" className="relative p-2 hover:bg-gray-700 rounded">
                  Cart
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </Link>
                <button 
                  onClick={logout}
                  className="p-2 hover:bg-gray-700 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="p-2 hover:bg-gray-700 rounded">
                  Login
                </Link>
                <Link to="/signup" className="p-2 hover:bg-gray-700 rounded">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}