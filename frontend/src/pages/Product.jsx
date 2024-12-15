import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 
const Product = () => {
  const { documentId } = useParams(); 
  const [productData, setProductData] = useState(null); 
  const [image, setImage] = useState(''); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
 
  const token = "f8311a6b98080c9d6c80755f24a5e10ab99d78e63d751da27ab6d9d4f449c9122a34800897cd3ba4aca89b520d7c481d9499e2b15f308bf676237c9698491487e17c4a6fa2ee37031328ca66308e9a5484118325bdf9363bb0c2a40cbb51e71362a18cd2721d8427e2f58f7cd85f7aee55e83cc458583893b3000a005b235f7f"; 
  
 
  const fetchProductData = async () => {
    try {
      const response = await fetch(
        `http://localhost:1337/api/products/${documentId}?populate=image`, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error('Failed to fetch product data');
      }
      const data = await response.json();
      setProductData(data.data); 
      setImage(data.data.attributes.image[0]?.url || ''); 
      setLoading(false);
    } catch (err) {
      setError(err.message);
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
 
  return productData ? (
<div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
<div className="flex gap-8 sm:gap-10 flex-col sm:flex-row">
<div className="flex-1 flex flex-col gap-4">
<div className="flex gap-2">
            {productData.attributes.image.map((img, index) => (
<img
                key={index}
                onClick={() => setImage(img.url)}
                src={`http://localhost:1337${img.formats.thumbnail.url}`}
                alt={productData.attributes.name}
                className={`w-16 h-16 cursor-pointer ${image === img.url ? 'border-2 border-pink-500' : ''}`}
              />
            ))}
</div>
<div className="w-full">
<img src={`http://localhost:1337${image}`} alt={productData.attributes.name} className="w-full object-cover rounded-lg" />
</div>
</div>
 
        <div className="flex-1">
<h1 className="font-medium text-2xl mt-2 text-gray-200">{productData.attributes.name}</h1>
<p className="mt-5 text-3xl font-medium text-gray-200">${productData.attributes.price}</p>
<p className="mt-5 text-gray-300 md:w-4/5">{productData.attributes.description}</p>
<button
            onClick={() => console.log(`Add product ${productData.id} to cart`)}
            className="bg-pink-800 text-gray-300 px-8 py-3 text-sm active:bg-pink-400"
>
            ADD TO CART
</button>
<hr className="mt-8 sm:w-4/5" />
<div className="text-sm text-gray-200 mt-5 flex flex-col gap-1">
<p>NO RETURN</p>
<p>CUSTOM MADE</p>
<p>DO NOT EXCHANGE WITH OTHER INDIVIDUALS</p>
</div>
</div>
</div>
</div>
  ) : (
<div className="opacity-0"></div>
  );
};
 
export default Product;