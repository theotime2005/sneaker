import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Productitem from '../components/Productitem';
import Title from '../components/Title';

const Collection = () => {
  const { products, search, showSearch} = useContext(ShopContext);
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


    if (showSearch && search ) {
      productsCopy = productsCopy.filter(item=> item.name.toLowerCase().includes(search.toLowerCase()))

    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
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
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
        </p>

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className="mb-3 text-sm text-white font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            {['EYE', 'BRAIN', 'ARMS', 'LEGS'].map((cat, idx) => (
              <p key={idx} className="flex-gap-2 text-white">
                <input
                  className="w-3"
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

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text="ALL" text2="COLLECTION" />

          <select
            onChange={(e) => setSortType(e.target.value.toUpperCase())}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="LOW-HIGH">Sort by: LOW-HIGH</option>
            <option value="HIGH-LOW">Sort by: HIGH-LOW</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <Productitem
              key={index}
              name={item.name}
              id={item.id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
