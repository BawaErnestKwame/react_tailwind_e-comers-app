import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
const Laptops = () => {
   const { products } = useContext(ShopContext);

  const laptops = products.laptops
  return (
  <div className=" px-4 py-6 w-full">
     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
     
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
  )
}

export default Laptops