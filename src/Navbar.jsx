import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { ShopContext } from './context/shopContext';

const Navbar = () => {
  const { getCartCount } = useContext(ShopContext);

  return (
    <nav className='flex flex-wrap items-center fixed top-0 right-0 left-0 z-1000 justify-between px-4 sm:px-6 md:px-12 lg:px-24 py-4 bg-white shadow-md h-20'>
      <Link to='/' className="text-3xl font-bold underline">
        Gear<span className='text-orange-600 underline'>Up</span>
      </Link>

      <ul className='hidden md:flex items-center gap-6 text-gray-700 font-medium'>
        <NavLink to='/'><li className="hover:text-orange-600">Home</li></NavLink>
        <NavLink to='/products'><li className="hover:text-orange-600">Products</li></NavLink>
        <NavLink to='/todayDeals'><li className="hover:text-orange-600">Today's Deals</li></NavLink>
      </ul>

      <div className="flex items-center border rounded-full overflow-hidden shadow-sm max-w-xs w-full">
        <input type="text" placeholder='Search for product...' className='px-4 py-2 w-full outline-none text-sm' />
        <button className='bg-orange-600 text-white px-4 py-2 hover:bg-orange-700'>
          <SearchIcon />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <Link to='/signup'><button className='text-sm px-3 py-1 rounded hover:bg-gray-100'>SignUp</button></Link>
        <Link to='/login'><button className='text-sm px-3 py-1 rounded bg-orange-600 text-white hover:bg-orange-700'>Login</button></Link>

        <div className="relative group flex items-center gap-2 cursor-pointer">
          <PersonOutlineIcon className="text-gray-600 group-hover:text-orange-600 transition-colors" />
          <p className="absolute top-6 opacity-0 group-hover:opacity-100 text-orange-600 transition-opacity duration-300">
            +233599316218
          </p>
        </div>

        <Link to='/cartpage'>
          <div className="relative cursor-pointer hover:text-orange-600">
            <ShoppingCartIcon />
            <span className='absolute -top-2 -right-2 h-4 w-4 bg-red-600 text-white rounded-full text-xs flex items-center justify-center'>
              {getCartCount()}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
