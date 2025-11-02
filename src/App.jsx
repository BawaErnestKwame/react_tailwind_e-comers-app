import React from 'react'
import './index.css';
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import TodayDeals from './Pages/TodayDeals';
import SignUp from './LoginSignUp/SignUp';
import Login from './LoginSignUp/Login';




const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/todayDeals' element={<TodayDeals/>}/>
      <Route path='/signup' element={<SignUp/> }/>
      <Route path='/login' element={<Login/> }/>

    </Routes>
    </>
  )
}

export default App