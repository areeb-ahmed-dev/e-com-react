import { useLocation } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";
  const queryLower = query.toLowerCase();

  const filteredProducts = products.filter(product => {
    const title = product?.title || "";
    const description = product?.description || "";
    return (
      title.toLowerCase().includes(queryLower) ||
      description.toLowerCase().includes(queryLower)
    );
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">
        {filteredProducts.length ? 
          `Search Results for "${query}"` : 
          `No results found for "${query}"`
        }
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard 
            key={product.id} 
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;