import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="text-gray-100 hover:text-white cursor-pointer group"
      to={`/product/${id}`}
    >
      <div className="relative overflow-hidden rounded-lg bg-black bg-opacity-80 shadow-neon-glow">
        <img
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          src={image}
          alt={name}
        />
      </div>
      <p className="pt-3 text-sm font-semibold tracking-wider uppercase">
        {name}
      </p>
      <p className="text-sm font-bold text-neon-red">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default Productitem;
