import React, { createContext, useState } from "react";
import { productsData } from "../data/productsData"; // adjust your path

// 1 Create the context
export const ShopContext = createContext();

// 2Create the provider
export const ShopProvider = ({ children }) => {
  // store all products in state (optional)
  const [products] = useState(productsData);

  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};
