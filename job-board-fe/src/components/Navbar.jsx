import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-lg">Amazon Clone</Link>
      <div className="flex gap-4">
        <Link to="/cart">Cart</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
