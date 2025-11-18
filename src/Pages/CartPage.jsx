import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import { Link } from "react-router-dom";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const CartPage = () => {
  const {
    cartItems,
    removeFromCart,
    increaseCount,
    decreaseCount,
    getCartTotal,
  } = useContext(ShopContext);

  return (
    <div className="mt-28 px-4 md:px-10 lg:px-24 py-10 bg-gray-100 min-h-screen">

      {/* Back Button */}
      <Link to="/">
        <button className="mb-6 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700">
          ← Continue Shopping
        </button>
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT — CART ITEMS */}
        <div className="lg:col-span-2">
          {cartItems.length === 0 ? (
            <p className="text-gray-600 text-lg">
              Your cart is empty. Start adding products to see them here.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
                >
                  {/* Product Image + Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-xl border"
                    />

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => decreaseCount(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded text-xl"
                    >
                      -
                    </button>

                    <span className="text-lg font-semibold w-8 text-center">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() => increaseCount(item.id)}
                      className="bg-gray-300 hover:bg-gray-400 px-3 py-1 rounded text-xl"
                    >
                      +
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <DeleteForeverIcon fontSize="large" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT — ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-xl shadow h-fit">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Order Summary
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span className="font-semibold">
                ${getCartTotal().toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-gray-700">
              <span>Shipping Fee:</span>
              <span className="font-semibold">$0.00</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total:</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>

            <button className="mt-5 w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700">
              Proceed to Checkout
            </button>
          </div>
        </div>

      </div>

      <div className="bg-slate-800 w-full py-12 px-4 md:px-12 mt-10">
  <div className="max-w-5xl mx-auto md:flex items-center justify-between gap-8">

    {/* Heading */}
    <h1 className="text-white text-2xl md:text-3xl font-bold leading-snug">
      STAY CONNECTED ABOUT OUR LATEST PRODUCTS AND OFFERS
    </h1>

    {/* Input + Button */}
    <div className="flex mt-6 md:mt-0 bg-white rounded-lg overflow-hidden w-full max-w-md">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 outline-none text-gray-700"
      />
      <button className="bg-orange-600 text-white px-6 py-3 font-semibold hover:bg-orange-700 transition">
        Subscribe Now
      </button>
    </div>

  </div>
</div>

    </div>
  );
};

export default CartPage;
