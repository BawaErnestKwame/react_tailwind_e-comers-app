import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import PercentageOff from '../Components/PercentageOff';

const Category = () => {
  return (
    <>
    <div className="px-4 md:px-14 lg:px-24 py-6 w-full flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-xl font-bold">CATEGORY</h1>
        <h2 className="text-gray-600">OUR TOP CATEGORIES</h2>
      </div>

      <div className="flex gap-10 mt-6 text-gray-600 font-medium cursor-pointer">
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid #F97316" : "none",
            color: isActive ? "#F97316" : "inherit",
            paddingBottom: "4px",
          })}
        >
          LAPTOPS
        </NavLink>

        <NavLink
          to="/headsets"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid #F97316" : "none",
            color: isActive ? "#F97316" : "inherit",
            paddingBottom: "2px",
          })}
        >
          HEADSETS
        </NavLink>

        <NavLink
          to="/phones"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid #F97316" : "none",
            color: isActive ? "#F97316" : "inherit",
            paddingBottom: "4px",
          })}
        >
          PHONES
        </NavLink>

        <NavLink
          to="/sneakers"
          style={({ isActive }) => ({
            borderBottom: isActive ? "2px solid #F97316" : "none",
            color: isActive ? "#F97316" : "inherit",
            paddingBottom: "4px",
          })}
        >
          SNEAKERS
        </NavLink>
      </div>

      <Outlet />
    </div>
    <PercentageOff/>
    </>
  );
};

export default Category;
