import { useCart } from "../../context/CartContext";

const OrderSummary = () => {
  const { cart } = useCart();

  const totalCost = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="bg-[#F6F8FB] rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto text-[#0C0C0C]">
      <div className="flex items-center justify-between w-full">
        <h6 className="font-semibold text-lg leading-9">Total</h6>
        <h6 className="font-bold text-lg leading-9 text-phoneColor">${totalCost.toFixed(2)}</h6>
      </div>
    </div>
  );
};

export default OrderSummary;
