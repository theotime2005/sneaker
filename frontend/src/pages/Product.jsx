import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Product = () => {
  const { documentId } = useParams();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token =
    "f8311a6b98080c9d6c80755f24a5e10ab99d78e63d751da27ab6d9d4f449c9122a34800897cd3ba4aca89b520d7c481d9499e2b15f308bf676237c9698491487e17c4a6fa2ee37031328ca66308e9a5484118325bdf9363bb0c2a40cbb51e71362a18cd2721d8427e2f58f7cd85f7aee55e83cc458583893b3000a005b235f7f";

  const fetchProductData = async () => {
    try {
      const response = await fetch(
        `http://localhost:1337/api/products/${documentId}?populate=*`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch product data: ${response.status}`);
      }

      const data = await response.json();
      setProductData(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [documentId]);

  if (loading) {
    return <div className="text-gray-200 text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-10">Error: {error}</div>;
  }

  if (!productData) {
    return <div className="text-gray-500 text-center mt-10">No product data found.</div>;
  }

  const imageUrl =
    productData?.image;

  return (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-8 sm:gap-10 flex-col sm:flex-row">
        {/* Section Image */}
        <div className="flex-1">
          {imageUrl ? (
            <img
              src={productData.image}
              alt={productData.name}
              className="w-full h-auto object-cover"
            />
          ) : (
            <div className="text-gray-400">No image available</div>
          )}
        </div>

        {/* Section Details */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2 text-gray-200">
            {productData.name || "Product Name"}
          </h1>
          <p className="mt-5 text-3xl font-medium text-gray-200">
            ${productData.price || "0.00"}
          </p>
          <p className="mt-5 text-gray-300 md:w-4/5">
            {productData.description || "No description available."}
          </p>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={() => addToCart(productData.id)}
              className="bg-pink-800 text-gray-300 px-8 py-3 text-sm active:bg-pink-400"
            >
              ADD TO CART
            </button>
            <button
              onClick={() => console.log("Add to favorites")}
              className="text-gray-300 hover:text-pink-500"
            >
              <Heart size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
