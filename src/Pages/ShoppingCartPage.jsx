import OrderSummary from "../component/ShoppingCartPageComponent/OrderSummary";
import CartItem from "../component/ShoppingCartPageComponent/CartItem";
import Header from "../component/LandingPageComponent/Header/Header";
import Footer from "../component/LandingPageComponent/Footer/Footer";
import { useCart } from "../context/CartContext";
import CheckoutButton from "../component/ShoppingCartPageComponent/CheckoutButton";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const btnText = "Check Out";

  return (
    <section className="font-baiserSquare">
      <Header />
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto py-4">
        <h2 className="title font-baiserCircle font-bold text-2xl leading-4 my-8 text-center text-[#0C0C0C]">
          Shopping Cart
        </h2>
      
        {cart.length === 0 ? (
          <div className="my-4 py-4">
            <p className="text-center text-[24px] flex flex-col items-center">
              Your cart is empty.
              <Link className="text-phoneColor text-[18px] cursor-pointer" to="/">
                Add products to cart first
              </Link>
            </p>
          </div>
        ) : (
          <>
            {cart.map((product) => (
              <CartItem
                key={product.id}
                item={product}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
            <OrderSummary />
            <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
              <CheckoutButton buttonText={btnText} />
            </div>
          </>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default ShoppingCartPage;
