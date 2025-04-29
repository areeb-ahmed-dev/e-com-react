import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import products from "../data/products";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="container mx-auto px-4 py-8">Product not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-6">
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-auto max-h-96 object-contain"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-2xl text-gray-800 font-semibold mb-4">${product.price}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <button
              onClick={() => addToCart(product)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}