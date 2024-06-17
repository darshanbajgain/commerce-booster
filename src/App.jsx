import CartProvider from "./context/CartContext.jsx";
import CartPage from "./Pages/CartPage.jsx";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />       
          <Route path="/cart" element={<CartPage />} />       
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
