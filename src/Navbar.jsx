import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <nav className='flex flex-wrap items-center fixed top-0 right-0 left-0 z-1000 justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-4 bg-white shadow-md h-20'>
      
      {/* Logo */}

      <Link to='/'>
            <div className="text-3xl font-bold underline">
        Gear<span className='text-orange-600 underline'>Up</span>
      </div>
      </Link>
  

      {/* Navigation Links */}
      <ul className='hidden md:flex items-center gap-6 text-gray-700 font-medium'>
        <NavLink to='/'>
          <li className="hover:text-orange-600 transition-colors">Home</li>
        </NavLink>

        <NavLink to='/products'>
          <li className="hover:text-orange-600 transition-colors">Products</li>
        </NavLink>

        <NavLink to='/todayDeals'>
          <li className="hover:text-orange-600 transition-colors">Today's Deals</li>
        </NavLink>
      </ul>

      {/* Search bar */}
      <div className="flex items-center border rounded-full overflow-hidden shadow-sm max-w-xs w-full">
        <input 
          type="text"
          placeholder='Search for product...'
          className='px-4 py-2 w-full outline-none text-sm'
        />
        <button className='bg-orange-600 text-white px-4 py-2 hover:bg-orange-700'>
          <SearchIcon />
        </button>
      </div>

      {/* User icons and auth buttons */}
      <div className="flex items-center gap-4">
        
        {/* Sign Up / Login */}
        <div className="hidden md:flex gap-2">
          <Link to='/signup'>
          <button className='text-sm font-medium px-3 py-1 rounded hover:bg-gray-100'>SignUp</button>
          </Link>
        <Link to='/login'>
          <button className='text-sm font-medium px-3 py-1 rounded bg-orange-600 text-white hover:bg-orange-700'>Login</button>
        
        </Link>
        </div>

        {/* Profile icon */}
        <div className="cursor-pointer hover:text-orange-600">
          <PersonOutlineIcon />
        </div>

        {/* Cart icon with badge */}
      <Link to='/cartpage'>
          <div className="relative cursor-pointer hover:text-orange-600">
          <ShoppingCartIcon />
          <span className='absolute -top-2 -right-2 h-4 w-4 bg-red-600 text-white rounded-full text-xs flex items-center justify-center'>
            0
          </span>
        </div>
      </Link>
      </div>
    </nav>
  );
};

export default Navbar;
