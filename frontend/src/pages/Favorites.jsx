import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useContext(ShopContext);

  if (favorites.length === 0) {
    return <div className="text-center text-purple-300">No favorited products yet!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold neon-text">Your Favorites</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {favorites.map((product) => (
          <div key={product.id} className="bg-gray-800 p-4 rounded-lg">
            <Link to={`/product/${product.id}`}>
              <img
                src={`http://localhost:1337${product.image.url}`}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="mt-4 text-lg font-bold text-gray-200">{product.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
