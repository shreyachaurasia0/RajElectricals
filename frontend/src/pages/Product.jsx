import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/frontend_assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");

  useEffect(() => {
    if (!products || products.length === 0) return;

    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image?.[0] || "");
    }
  }, [productId, products]);

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-30 pb-5 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* PRODUCT TOP SECTION */}
      <div className="flex gap-8 sm:gap-12 flex-col sm:flex-row mb-12">

        {/* IMAGES */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">

          <div className="flex flex-row sm:flex-col gap-3 overflow-x-auto sm:overflow-y-scroll w-full sm:w-[18%]">
            {productData.image?.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setImage(img)}
                className="w-20 h-20 object-cover cursor-pointer rounded border hover:border-gray-500 transition"
              />
            ))}
          </div>

          <div className="w-full sm:w-[100%] bg-white-100 rounded-lg overflow-hidden">
            <img src={image} className="w-full h-auto object-cover" alt={productData.name} />
          </div>
        </div>

        {/* PRODUCT INFO */}
        <div className="flex-1">
          <h1 className="font-bold text-3xl">{productData.name}</h1>

          <div className="flex gap-1 mt-3">
            {[1, 2, 3, 4].map((_, i) => (
              <img key={i} src={assets.star_icon} className="w-4" />
            ))}
            <img src={assets.star_dull_icon} className="w-4" />
          </div>

          <p className="mt-6 text-4xl font-bold">
            {currency}{productData.price}
          </p>

          {/* Delivery Charge */}
          {productData.deliveryCharge !== undefined && (
            <p className="mt-2 text-gray-700 text-md">
              <b>Delivery Charge:</b> {currency}{productData.deliveryCharge}
            </p>
          )}

          <div className="mt-6 text-gray-700">
            <div className="space-y-2">
              {productData.description
                .replace(/•/g, "\n")
                .split(/\n+|(?<=[.!?])\s+(?=[A-Z])/)
                .filter(line => line.trim() !== "")
                .map((line, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <svg className="w-2 h-2 text-gray-900 mt-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <circle cx="10" cy="10" r="7" />
                    </svg>
                    <p className="text-sm text-gray-700">{line.trim()}{!line.trim().endsWith('.') ? '.' : ''}</p>
                  </div>
                ))
              }
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id)}
            className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white py-4 mt-8 text-lg font-bold rounded-lg shadow hover:scale-105 transition"
          >
            ADD TO CART
          </button>

          <hr className="my-6" />

          <div className="text-sm text-gray-600 space-y-2">
            <p><b className="text-gray-900">100% Original</b> - Direct from manufacturers</p>
            <p><b className="text-gray-900">Cash on Delivery available</b> - Pay on arrival</p>
            <p><b className="text-gray-900">Easy Returns</b> - 7-10 day return policy</p>
          </div>
        </div>
      </div>

      {/* DESCRIPTION SECTION */}
      <div className="bg-gray-50 p-6 sm:p-8 rounded-lg mt-10">

        <div className="flex border-b pb-3 mb-6">
          <button className="border-b-2 border-gray-900 px-4 py-2 font-medium">Description</button>
        </div>

        {/* ABOUT THIS ITEM */}
        {productData.description && (
          <div className="mb-10">
            <h3 className="font-semibold text-xl mb-3">About this item</h3>
            <div className="space-y-3">
              {productData.description
                .replace(/•/g, "\n")
                .split(/\n+|(?<=[.!?])\s+(?=[A-Z])/)
                .filter(line => line.trim() !== "")
                .map((line, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <svg className="w-2 h-2 text-gray-900 mt-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <circle cx="10" cy="10" r="7" />
                    </svg>
                    <p className="text-sm text-gray-700">{line.trim()}{!line.trim().endsWith('.') ? '.' : ''}</p>
                  </div>
                ))
              }
            </div>
          </div>
        )}

        {/* SPECIFICATIONS */}
        {productData.specifications && (
          <div className="mb-10">
            <h3 className="font-semibold text-xl mb-3">Specifications</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {productData.specifications
                .replace(/•/g, "\n")
                .split(/\n+/)
                .filter(s => s.trim() !== "")
                .map((s, i) => (
                  <div key={i} className="flex gap-3">
                    <svg className="w-5 h-5 text-gray-900 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M16.7 5.3a1 1 0 00-1.4-1.4L8 11.2 4.7 7.9A1 1 0 103.3 9.3l4 4a1 1 0 001.4 0l8-8z" />
                    </svg>
                    <p className="text-sm text-gray-700">{s.trim()}</p>
                  </div>
                ))
              }
            </div>
          </div>
        )}

        {/* KEY FEATURES */}
        {productData.features && (
          <div className="mb-10">
            <h3 className="font-semibold text-xl mb-3">Key Features</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {productData.features
                .replace(/•/g, "\n")
                .split(/\n+/)
                .filter(f => f.trim() !== "")
                .map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <svg className="w-5 h-5 text-gray-900 mt-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M16.7 5.3a1 1 0 00-1.4-1.4L8 11.2 4.7 7.9A1 1 0 103.3 9.3l4 4a1 1 0 001.4 0l8-8z" />
                    </svg>
                    <p className="text-sm text-gray-700">{f.trim()}</p>
                  </div>
                ))
              }
            </div>
          </div>
        )}

        {/* BRAND / WARRANTY / DELIVERY */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productData.brand && (
            <div className="border p-3 rounded bg-white">
              <p className="text-sm text-gray-600">Brand</p>
              <p className="font-medium text-gray-800 mt-1">{productData.brand}</p>
            </div>
          )}

          {productData.warranty && (
            <div className="border p-3 rounded bg-white">
              <p className="text-sm text-gray-600">Warranty</p>
              <p className="font-medium text-gray-800 mt-1">{productData.warranty}</p>
            </div>
          )}

          {productData.deliveryCharge !== undefined && (
            <div className="border p-3 rounded bg-white">
              <p className="text-sm text-gray-600">Delivery Charge</p>
              <p className="font-medium text-gray-800 mt-1">
                {currency}{productData.deliveryCharge}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-16">
        <RelatedProducts 
          category={productData.category} 
          subCategory={productData.subCategory} 
        />
      </div>

    </div>
  );
};

export default Product;
