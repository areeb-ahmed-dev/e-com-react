import { Link } from "react-router-dom";
import { useAuth, useCart } from "../contexts/AuthContext";
import SearchBar from "./SearchBar";

function Navbar() {
  const { user, logout } = useAuth();
  const { cartItems } = useCart();

  return (
    <nav className="bg-gray-800 text-white w-full p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row gap-4 items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold whitespace-nowrap hover:text-gray-300">
          ShopCart
        </Link>

        {/* Search Bar */}
        <div className="w-full max-w-xl mx-4">
          <SearchBar />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              <Link to="/cart" className="relative p-2 hover:bg-gray-700 rounded whitespace-nowrap hover:text-gray-300">
                Cart
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </Link>
              <button 
                onClick={logout}
                className="p-2 hover:bg-gray-700 rounded whitespace-nowrap hover:text-gray-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="p-2 hover:bg-gray-700 rounded whitespace-nowrap hover:text-gray-300">
                Login
              </Link>
              <Link to="/signup" className="p-2 hover:bg-gray-700 rounded whitespace-nowrap hover:text-gray-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;