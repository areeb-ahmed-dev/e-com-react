import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div className="p-8">
      <img src={product.image} alt={product.name} className="w-64 h-64 object-cover" />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-xl font-semibold">${product.price}</p>
      <button className="mt-4 px-4 py-2 bg-yellow-500 rounded">Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
