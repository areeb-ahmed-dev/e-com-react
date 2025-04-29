import { useParams } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <div className="p-8">Product not found</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full md:w-1/2 h-96 object-contain" 
        />
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold my-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button 
            onClick={() => addToCart(product)}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-bold"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;