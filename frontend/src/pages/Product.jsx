import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const { productId } = useParams();  
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  const fetchProductData = () => {
    const foundProduct = products.find(item => item.id.toString() === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
      
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
  <div className='flex gap-8 sm:gap-10 flex-col sm:flex-row'>
        <div className='flex-1 flex flex-col gap-4'>
        <div className='flex gap-2'>
            {productData.image.map((imgSrc, index) => (
              <img
                key={index}
                onClick={() => setImage(imgSrc)}
                src={imgSrc}
                alt={productData.name}
                className={`w-16 h-16 cursor-pointer ${image === imgSrc ? '' : ''}`}
              />
            ))}
          </div>
          <div className='w-full'>
            <img src={image} alt={productData.name} className="w-full object-cover rounded-lg" />
          </div>
        </div>

        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2 text-gray-200'>{productData.name} </h1>
          <div className='flex-items-center gap-1 mt-2'> 
         
</div>
<p className='mt-5 text-3xl font-medium  text-gray-200'>{currency} {productData.price}</p>
<p className='mt-5 text-gray-300 md:w-4/5'>{productData.description}</p>
<div className='flex flex-col gap-4 my-8'>
  

</div>
<button  onClick={()=> addToCart(productData.id)} className='bg-pink-800 text-gray-300 px-8 py-3 text-sm active:bg-pink-400'>ADD TO CART</button>
<hr className='mt-8 sm:w-4/5' />
<div className='text-sm text-gray-200 mt-5 flex flex-col gap-1'>
  <p>NO RETURN</p>
  <p>CUSTOM MADE</p>
  <p>DO NOT EXCHANGE WITH OTHER INDIVIDUALS</p>

</div>
        </div>
      </div>
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};

export default Product;
