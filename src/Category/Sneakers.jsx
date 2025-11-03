import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Gaming = () => {
  const { products } = useContext(ShopContext);

  // safely access sneakers array
  const sneakers = products?.sneakers || [];

  return (
    <div className="px-4 md:px-8 py-8 w-full">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Get Quality Sneakers 👟</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sneakers.map((item) => (
          <div
            key={item.id}
            className="bg-white border p-4 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h2 className="text-lg font-semibold mt-3 text-gray-800">
              {item.name}
            </h2>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            <div className="mt-2 text-sm text-yellow-500 flex gap-1">
               <p className="text-gray-950">Rating:</p>
               <p>{item.rating} / 5</p>
            </div>

            <div className="flex justify-between items-center mt-3">
              <p className="text-gray-700 font-semibold">${item.price}</p>
              <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1.5 rounded text-white font-medium text-sm transition">
                Add to Cart +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gaming;
