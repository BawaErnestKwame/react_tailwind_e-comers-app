import React from 'react';
import './index.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import TodayDeals from './Pages/TodayDeals';
import SignUp from './LoginSignUp/SignUp';
import Login from './LoginSignUp/Login';
import Category from './Category/Category';
import HeadSets from './Category/HeadSets';
import Laptops from './Category/Laptops';
import Phones from './Category/Phones';
import Sneakers from './Category/Sneakers';
import Footer from './Components/Footer'
import CartPage from './Pages/CartPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Laptops />} />
            <Route path='headsets' element={<HeadSets />} />
            <Route path='phones' element={<Phones />} />
            <Route path='sneakers' element={<Sneakers />} />
        </Route>

        {/* Other pages */}
        <Route path='/products' element={<Products />} />
        <Route path='/todayDeals' element={<TodayDeals />} />
        <Route path='/cartPage' element={<CartPage/>} />

        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <Footer/>
    </>

    
  );
};

export default App;
