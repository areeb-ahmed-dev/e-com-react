import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

function ProductCard({ id, title, price, image }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="h-48 object-contain mx-auto" />
      <h2 className="font-bold text-lg mt-4">{title}</h2>
      <p className="text-gray-700">${price}</p>
      <Link 
        to={`/product/${id}`} 
        className="text-blue-600 hover:underline mt-2 block"
      >
        View Details
      </Link>
      <button
        onClick={() => addToCart({ id, title, price, image })}
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded mt-3 w-full"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;