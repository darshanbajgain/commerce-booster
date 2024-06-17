import { useCart } from "../../context/CartContext";
import MobileCartItems from "./MobileCartItems";
import delBtn from "/assets/cart_page_assets/delete-button-svgrepo-com.svg";

const CartTable = () => {
  const { cart } = useCart();

  return (
    <div className=" w-full">
      <table className="hidden min-w-full bg-white border md:table">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Item</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Total</th>
            <th className="px-4 py-2 text-left">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product, index) => (
            <tr key={index} className="border-b">
              <td className="px-4 py-2 flex items-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 mr-4"
                />
                <div>
                  <p className="font-bold line-clamp-2">{product.name}</p>
                </div>
              </td>
              <td className="px-4 py-2">${product.price}</td>
              <td className="px-4 py-2">
                <div className="flex items-center">
                  <button className="bg-gray-200 text-gray-600 rounded px-4 py-1 hover:bg-gray-300">-</button>
                  <span className="px-4">{product.quantity}</span>
                  <button className="bg-gray-200 text-gray-600 rounded px-4 py-1 hover:bg-gray-300">+</button>
                </div>
              </td>
              <td className="px-4 py-2">${product.price * product.quantity}</td>
              <td className="px-4 py-2">
                <button className="w-4 h-4 flex items-center">
                  <img src={delBtn} alt="Remove" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="md:hidden">
        {
          cart.map((product, index)=>(
            <MobileCartItems key={index} product={product} /> 
          ))
        }
      </div>
    </div>
  );
};

export default CartTable;
