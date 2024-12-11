import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import Productitem from './Productitem';

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products?.length) {
      setLatestProducts(products.slice(0, 10));
    }
  }, [products]);

  return (
    <div className="p-8 rounded-lg shadow-neon-glow">
      <div className="text-center py-8 text-4xl">
        <Title text1="LATEST" text2="COLLECTION" />
        <p className="w-3/4 mx-auto text-sm sm:text-base text-gray-400 mt-4">
          Discover the most futuristic designs from our latest collection. 
          Upgrade your style with cutting-edge fashion.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {latestProducts.length ? (
          latestProducts.map((item) => (
            <Productitem key={item.id} id={item.id} image={item.image} name={item.name} price={item.price} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default LatestCollection;

