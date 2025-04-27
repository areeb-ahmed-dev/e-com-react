import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
    
  const data = products;

  return (
    <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
      {data.map((item) => (
        <ProductCard
          key={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  );
}

export default Home;
