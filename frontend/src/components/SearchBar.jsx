import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Search, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  
  const location = useLocation();


  useEffect(() => {
   if (location.pathname.includes('collection')&& showSearch) {

   }
  }, [location]);

  if (!showSearch) return null;

  return (
    <div className="flex items-center justify-center py-4">
      <div className="flex items-center border-b border-gray-400 px-4 py-2 w-full sm:w-1/2 bg-transparent">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-transparent text-sm text-white placeholder-gray-400"
          type="text"
          placeholder="Search"
          autoFocus
        />
        <Search className="ml-2 text-gray-600" />
      </div>
      <X
        className="ml-4 text-gray-600 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  );
};

export default SearchBar;
