import CartIcon from "/assets/header_assets/cart/cart.svg";
import { useCart } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  
  const {cartCount} = useCart();
  const navigate = useNavigate();

  const handleCartClick = () => {
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div className="relative cursor-pointer" onClick={handleCartClick}>
      <img src={CartIcon} alt="Cart" className="w-5 h-5" />
      <span className="absolute -top-2 -right-2 lg:-right-3 text-[10px] bg-bgForCartPop w-[18px] h-[18px] flex flex-col items-center  rounded-full text-white ">
        <p className="leading-[14px] my-auto mx-auto">{cartCount}</p>
      </span>
    </div>
  );
};

export default Cart;
