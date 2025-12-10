import React from 'react';
import './index.css';
import Navbar from './Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import TodayDeals from './Pages/TodayDeals';
import SignUp from './LoginSignUp/SignUp';
import Login from './LoginSignUp/Login';
import HeadSets from './Category/HeadSets';
import Laptops from './Category/Laptops';
import Phones from './Category/Phones';
import Sneakers from './Category/Sneakers';
import Footer from './Components/Footer';
import CartPage from './Pages/CartPage';
import ScrollToTop from './Components/ScrollToTop';

import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
        <ScrollToTop />

      {/* Page Transition Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Routes location={location}>
           
            <Route path='/' element={<Home />}>
              <Route index element={<Laptops />} />
              <Route path='headsets' element={<HeadSets />} />
              <Route path='phones' element={<Phones />} />
              <Route path='sneakers' element={<Sneakers />} />
            </Route>

            <Route path='/products' element={<Products />} />
            <Route path='/todayDeals' element={<TodayDeals />} />
            <Route path='/cartPage' element={<CartPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default App;
