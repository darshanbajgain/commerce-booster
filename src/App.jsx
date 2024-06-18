import CartProvider from "./context/CartContext.jsx";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import ShoppingCartPage from "./Pages/ShoppingCartPage";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />       
          <Route path="/cart" element={<ShoppingCartPage />} />       
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
