import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
const Products = () => {
  const { products } = useContext(ShopContext);

  // Access laptops for example
  const laptops = products.laptops;

  return (
   <div className=" px-4 md:px-14 lg:px-24 py-6 w-full">
     <div className="flex justify-between items-center mb-6">
       <div className=" flex text-center flex-col w-full justify-center items-center">
         <h1 className="text-orange-500 font-bold text-sm">PRODUTS</h1>
       <h2 className="text-gray-900 text-3xl font-semibold mt-2 underline">OUR TIP PRODUCTS</h2>
       </div>

      </div>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     
      {laptops.map((item) => (
        <div key={item.id} className="border p-4 rounded-xl shadow">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg" />
          <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
          <p className="mt-2">{item.rating}</p>
           <div className=" flex justify-between items-center mt-2">
            <p className="text-gray-500">${item.price}</p>
            <button className="bg-orange-500 px-4 py-1 rounded text-white font-normal">Add to Cart +</button>
          </div>
        </div>
      ))}
    </div>
   </div>
  );
};

export default Products;
