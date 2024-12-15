import { createContext, useEffect, useState } from "react";
import { products } from "../../public/assets/assets.jsx";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCart] = useState({});
  const [favorites, setFavorites] = useState([]); // State to manage favorite products

  // Add item to cart
  const addToCart = (itemId) => {
    const updatedCart = { ...cartItems };
    updatedCart[itemId] = (updatedCart[itemId] || 0) + 1;
    setCart(updatedCart);
  };

  // Get the total count of items in the cart
  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, count) => total + count, 0);
  };

  // Add a product to favorites
  const addFavorite = (product) => {
    if (!favorites.some((fav) => fav.id === product.id)) {
      setFavorites((prev) => [...prev, product]);
    }
  };

  // Remove a product from favorites
  const removeFavorite = (productId) => {
    setFavorites((prev) => prev.filter((item) => item.id !== productId));
  };

  // Check if a product is favorited
  const isFavorite = (productId) => {
    return favorites.some((fav) => fav.id === productId);
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search, setSearch,
    showSearch, setShowSearch,
    cartItems, addToCart,
    getCartCount,
    favorites, addFavorite, removeFavorite, isFavorite // Expose favorites functionality
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;


