import React, { createContext, useState } from "react";
import { productsData } from "../data/productsData";

export const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
  const [products] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);

  // 🔍 Search term for filtering
  const [searchTerm, setSearchTerm] = useState("");

  // ➕ Add to cart
  const addToCart = (product) => {
    setCartItems((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // ➖ Remove item
  const removeFromCart = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 🔺 Increase qty
  const increaseCount = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // 🔻 Decrease qty
  const decreaseCount = (id) => {
    setCartItems((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // 🧮 Cart count
  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // 💰 Total price
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cartItems,
        addToCart,
        removeFromCart,
        increaseCount,
        decreaseCount,
        getCartCount,
        getCartTotal,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};
