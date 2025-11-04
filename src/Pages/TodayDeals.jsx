import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const TodayDeals = () => {
  const { products } = useContext(ShopContext);

  // Combine all product categories into one array
  const allProducts = [
    ...products.laptops,
    ...products.phones,
    ...products.headsets,
    ...products.sneakers,
  ];

  // Randomly pick 6 products to show as today's deals
  const todaysDeals = allProducts
    .sort(() => Math.random() - 0.5)
    .slice(0, 6);

  return (
    <div className="px-4 md:px-14 lg:px-24 py-6 w-full">
      <div className="text-center mb-8">
        <h1 className="text-orange-500 font-bold text-sm">DEALS</h1>
        <h2 className="text-gray-900 text-3xl font-semibold mt-2 underline">
          TODAY'S HOT DEALS 🔥
        </h2>
        <p className="text-gray-500 mt-2">
          Limited-time offers on top products — don’t miss out!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {todaysDeals.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
            <p className="text-gray-500">${item.price}</p>
            <button className="bg-orange-500 hover:bg-orange-600 mt-3 px-4 py-1 rounded text-white font-normal">
              Add to Cart +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayDeals;
