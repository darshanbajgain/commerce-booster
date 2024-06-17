import { createContext, useState, useContext } from "react";

export const useCart = () => useContext(CartContext);

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (product)=>{
    setCartCount(prevCount=> prevCount+1);
    setCart( prevCart =>[...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );

};

export default CartProvider;

