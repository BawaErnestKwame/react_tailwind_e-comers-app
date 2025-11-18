import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Products = () => {
  const { products, addToCart } = useContext(ShopContext);

  const allProducts = [
    ...(products?.laptops || []),
    ...(products?.headsets || []),
    ...(products?.phones || []),
    ...(products?.sneakers || []),
  ];
  
  // Shuffle randomly and select 8 products
  const randomProducts = allProducts.sort(() => 0.5 - Math.random()).slice(0, 8);

  return (
    <div className="px-4 md:px-14 lg:px-24 py-6 w-full mt-20">
      {/* ---------- Section Header ---------- */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex text-center flex-col w-full justify-center items-center">
          <h1 className="text-orange-500 font-bold text-sm">PRODUCTS</h1>
          <h2 className="text-gray-900 text-3xl font-semibold mt-2 underline">
            OUR TOP PICKS
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl text-center">
            Explore a handpicked selection of our most popular tech items — from sleek laptops
            to stylish sneakers. Every product is chosen just for you!
          </p>
        </div>
      </div>

      {/* ---------- Product Grid ---------- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {randomProducts.map((item) => (
          <div key={item.id} className="border p-4 rounded-xl shadow hover:shadow-lg transition">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
            <p className="text-sm text-gray-500">{item.category}</p>
            <p className="mt-2 text-gray-500">${item.price}</p>

            <div className="flex justify-between items-center mt-3">
              <p className="text-yellow-500 text-sm">{item.rating} ⭐</p>
              <button onClick={()=>addToCart(item)} className="bg-orange-500 px-4 py-1 rounded text-white font-normal hover:bg-orange-600 transition">
                Add to Cart +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
