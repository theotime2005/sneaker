import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Productitem from '../components/Productitem';
import Title from '../components/Title';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relavent');

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = [...products];

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let sortedProducts = [...filterProducts];

    switch (sortType) {
      case 'LOW-HIGH':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;

      case 'HIGH-LOW':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;

      default:
        applyFilter();
        return;
    }

    setFilterProducts(sortedProducts);
  };

  useEffect(() => {
    applyFilter();
    sortProduct();
  }, [category, products, sortType, search, showSearch]);

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-10 bg-transparent text-gray-200 ">
     
      <div className="min-w-60 bg-transparent ">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl sm:text-2xl flex items-center cursor-pointer gap-2 text-pink-900 hover:text-pink-900 transition-all duration-300 "
        >
          <span className="text-pink-800">FILTERS</span>
        </p>

        <div
          className={`border-b-2 border-pink-800 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block bg-transparent`}
        >
          <p className="mb-3 text-sm text-pink-800 font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-200">
            {['EYE', 'BRAIN', 'ARMS', 'LEGS'].map((cat, idx) => (
              <p key={idx} className="flex gap-2 hover:text-pink-800 cursor-pointer">
                <input
                  className="w-4 h-4 text-pink-800 accent-pink-800"
                  type="checkbox"
                  value={cat}
                  onChange={toggleCategory}
                />
                {cat}
              </p>
            ))}
          </div>
        </div>
      </div>

      
      <div className="flex-1 bg-transparent">
        <div className="flex justify-between items-center text-base sm:text-2xl mb-6">
          <Title text="ALL" text2="COLLECTION" />

          <select
            onChange={(e) => setSortType(e.target.value.toUpperCase())}
            className="bg-transparent text-pink-800 text-sm px-4 py-2 border-2 border-pink-800 hover:bg-pink-800 hover:text-gray-200 transition-all duration-300"
          >
            <option value="LOW-HIGH">Sort by: LOW-HIGH</option>
            <option value="HIGH-LOW">Sort by: HIGH-LOW</option>
          </select>
        </div>

       
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.map((item, index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300 bg-transparent"
            >
              <Productitem
                name={item.name}
                id={item.id}
                price={item.price}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
