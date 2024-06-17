import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product, index) => (
            <li key={index} className="border-b py-2">
              <img src={product.image} alt={product.name} className="w-16 h-16 mr-4 inline-block" />
              <div className="inline-block align-middle">
                <h3 className="text-lg">{product.name}</h3>
                <p>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
