import React, { useContext, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import ListIcon from "@mui/icons-material/List";
import { ShopContext } from "./context/shopContext";

const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md h-20 flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Logo */}
      <Link to="/" className="text-3xl font-bold underline">
        Gear<span className="text-orange-600 underline">Up</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <NavLink to="/">
          <li className="hover:text-orange-600">Home</li>
        </NavLink>
        <NavLink to="/products">
          <li className="hover:text-orange-600">Products</li>
        </NavLink>
        <NavLink to="/todayDeals">
          <li className="hover:text-orange-600">Today's Deals</li>
        </NavLink>
      </ul>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden flex flex-col p-5 gap-4 text-gray-700 font-medium">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <li className="hover:text-orange-600">Home</li>
          </NavLink>
          <NavLink to="/products" onClick={() => setIsOpen(false)}>
            <li className="hover:text-orange-600">Products</li>
          </NavLink>
          <NavLink to="/todayDeals" onClick={() => setIsOpen(false)}>
            <li className="hover:text-orange-600">Today's Deals</li>
          </NavLink>

            <Link to="/signup" onClick={()=>setIsOpen(false)}>
          <button className="text-sm px-3 py-1 rounded hover:bg-gray-100">
            SignUp
          </button>
        </Link>
        </ul>

        
      )}

      {/* Right Side Buttons */}
      <div className="flex items-center gap-6 md:gap-4">
        <Link to="/signup">
          <button className=" hidden md:flex text-sm px-3 py-1 rounded hover:bg-gray-100">
            SignUp
          </button>
        </Link>

        <Link to="/login">
          <button className="text-sm px-3 py-1 rounded bg-orange-600 text-white hover:bg-orange-700">
            Login
          </button>
        </Link>

        {/* Hover Phone Number */}
        <div className="hidden md:flex relative items-center group cursor-pointer">
          <PersonOutlineIcon className="text-gray-600 group-hover:text-orange-600 transition" />
          <p className="absolute top-6 opacity-0 group-hover:opacity-100 text-orange-600 transition">
            +233599316218
          </p>
        </div>

        {/* Cart */}
        <Link to="/cartpage">
          <div className="relative cursor-pointer hover:text-orange-600">
            <ShoppingCartIcon />
            <span className="absolute -top-2 -right-2 h-4 w-4 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">
              {getCartCount()}
            </span>
          </div>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <CloseIcon /> : <ListIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
