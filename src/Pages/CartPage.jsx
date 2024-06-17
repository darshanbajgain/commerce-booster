import { useCart } from "../context/CartContext";
import CartTable from "../component/CartPageComponent/CartTable";
import OrderSummary from "../component/CartPageComponent/OrderSummary";
import Header from "../component/LandingPageComponent/Header/Header";
import Footer from "../component/LandingPageComponent/Footer/Footer";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="font-baiserSquare font-normal text-bodycolor">
      <Header />

      <h2 className="text-2xl  md:text-3xl  text-center font-bold m-6 p-4">Added Item Lists</h2>
      <div className="min-h-56">
        {cart.length === 0 ? (
          <p className="text-center flex flex-col items-center">
            Your cart is empty.
            <Link className="text-phoneColor text-sm cursor-pointer" to="/">
              Get products first
            </Link>
          </p>
        ) : (
          <div className="flex flex-col lg:justify-center lg:mx-[88px] lg:gap-x-16 my-6 p-6 items-center lg:flex-row lg:space-x-4">
            <div className="w-full">
              <CartTable />
            </div>
            <div className=" w-full lg:w-1/3 mt-4 lg:mt-0">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
