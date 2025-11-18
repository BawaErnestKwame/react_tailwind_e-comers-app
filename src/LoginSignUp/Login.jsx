import React from 'react'
import image from '../assets/headerimage4.png'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col md:flex-row px-4 md:px-16 lg:px-24 gap-8 items-center justify-center w-full h-full mt-32'>
      
      {/* Left Image */}
      <div className="w-full md:w-1/2">
        <img src={image} alt="Sign Up" className='w-full object-contain h-[70vh]'/>
      </div>

      {/* Right Form */}
      <div className="w-full md:w-1/2 shadow-lg rounded-lg p-8 bg-white">
        
        <div className="mb-6">
          <h1 className='text-3xl font-bold'>
            GEAR
            <span className='text-orange-600 underline'>UP</span>
          </h1>
          <p className='text-gray-600 text-sm'>Log In now to get started</p>
        </div>

        <form className='space-y-4'>
          {/* Email */}
          <div>
            <label htmlFor="email" className='block text-sm font-medium'>Email</label>
            <input 
              type="email"  
              id="email"
              placeholder='Enter your email'
              className='w-full border border-gray-300 rounded-md outline-none text-sm text-gray-600 py-2 px-3 focus:border-orange-500'
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className='block text-sm font-medium'>Password</label>
            <input 
              type="password"  
              id="password"
              placeholder='Enter your password'
              className='w-full border border-gray-300 rounded-md outline-none text-sm text-gray-600 py-2 px-3 focus:border-orange-500'
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className='block text-sm font-medium'>Confirm Password</label>
            <input 
              type="password"  
              id="confirmPassword"
              placeholder='Confirm your password'
              className='w-full border border-gray-300 rounded-md outline-none text-sm text-gray-600 py-2 px-3 focus:border-orange-500'
            />
          </div>

        

          {/* Submit Button */}
          <button 
            type="submit" 
            className='w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-md font-medium transition'
          >
           Log In
          </button>

          <div className=" flex justify-between items-center">
              {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input type="checkbox" id="rememberMe" className='accent-orange-500'/>
            <label htmlFor="rememberMe" className='text-sm'>Remember me</label>
          </div>

          <p className='text-sm text-gray-600'>Forgot Password? <Link><span className='text-orange-600'>Click here👉</span></Link> </p>
          </div>

          <p className='text-gray-600 text-sm'>Don't have an Account? <Link to='/signup'><span className='text-orange-600 hover:underline transition-all'>Sign Up...</span></Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login