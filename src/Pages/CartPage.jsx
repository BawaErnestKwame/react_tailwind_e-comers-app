import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="px-4 md:px-8 lg:px-24 bg-gray-300 w-full mt-32 min-h-screen py-8">
      <Link to='/'><button className="bg-orange-600 text-white px-4 py-2 rounded">GO BACK</button></Link>

      <h2 className="text-2xl font-bold mt-6 mb-4">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded shadow flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>${item.price} × {item.quantity}</p>
                </div>
              </div>

              <div className=" flex items-center gap-4">
                <button className='bg-gray-400 rounded text-2xl px-4'>-</button>
                <input type="text" className='w-8 py-1 outline-none rounded border-2 border-gray-400' />
                <button className='bg-gray-400 rounded text-2xl px-4'>+</button>
              </div>
              <div className="">
                <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:underline">
                <DeleteForeverIcon />
              </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
