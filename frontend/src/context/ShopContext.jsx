import { createContext, useEffect, useState } from "react";
import { products } from "../../public/assets/assets.jsx";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCart] = useState({});

  
  const addToCart = (itemId) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCart(updatedCart);
  };

 
  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search, setSearch,
    showSearch, setShowSearch,
    cartItems, addToCart,
    getCartCount
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

