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
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/todayDeals' element={<TodayDeals/>}/>
    </Routes>
    </>
  )
}

export default App