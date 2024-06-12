import CartProvider from "./context/CartContext.jsx";
import LandingPage from "./Pages/LandingPage";

export default function App() {
  return (
    <CartProvider>
        <LandingPage />
    </CartProvider>
  );
}
