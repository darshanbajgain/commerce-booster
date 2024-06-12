import { createContext, useState, useContext } from "react";

export const useCart = () => useContext(CartContext);

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartCount, setCartCount] = useState(0);

  const addToCart = ()=>{
    setCartCount(prevCount=> prevCount+1);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );

};

export default CartProvider;

