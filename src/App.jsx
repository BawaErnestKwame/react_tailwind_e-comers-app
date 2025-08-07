import React from 'react'
import './index.css';
import Login from './Login';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import TodayDeals from './Pages/TodayDeals';




const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route to='/' element={<Home/>}/>
      <Route to='/products' element={<Products/>}/>
      <Route to='/todaydeals' element={<TodayDeals/>}/>
    </Routes>
    </>
  )
}

export default App