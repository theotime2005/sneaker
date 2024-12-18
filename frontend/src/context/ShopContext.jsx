import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCart] = useState({});
  const [favorites, setFavorites] = useState([]); 

  
  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:1337/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      
      setProducts(data.data); 
      console.log(data); // Log des données pour voir leur structure
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  
  useEffect(() => {
    fetchProducts();
  }, []);

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
    loading, 
    error, 
    currency,
    delivery_fee,
    search, setSearch,
    showSearch, setShowSearch,
    cartItems, addToCart,
    getCartCount,
    favorites, addFavorite, removeFavorite, isFavorite 
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
