import { useCart } from "../contexts/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const getTotal = () => 
    cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center gap-4 w-1/2">
            <img src={item.image} className="h-20 object-contain" />
            <div>
              <h3 className="font-bold">{item.title}</h3>
              <p>${item.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex border rounded">
              <button 
                onClick={() => updateQuantity(index, item.quantity - 1)}
                className="px-3 py-1"
              >-</button>
              <span className="px-3 py-1">{item.quantity}</span>
              <button 
                onClick={() => updateQuantity(index, item.quantity + 1)}
                className="px-3 py-1"
              >+</button>
            </div>
            <button 
              onClick={() => removeFromCart(index)}
              className="text-red-500 hover:text-red-700"
            >Remove</button>
          </div>
        </div>
      ))}
      <div className="mt-8 border-t pt-4">
        <p className="text-xl font-bold">Total: ${getTotal().toFixed(2)}</p>
        <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 px-6 py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;