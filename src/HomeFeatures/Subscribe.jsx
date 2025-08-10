import React from 'react'
import subscribeimg from '../assets/subscribeimg.svg'
import keyboard from '../assets/headerimage6.png'

const Subscribe = () => {
  return (
    <div className='relative overflow-hidden rounded-xl shadow-lg my-10'>
      
      {/* Background Image Layer with Opacity */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${keyboard})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.05, // 👈 Controls the image opacity
        }}
      ></div>

      {/* Content Layer */}
      <div className='flex flex-col-reverse md:flex-row items-center relative z-10 px-6 py-10 md:px-16 md:py-14'>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-4 text-slate-800">
          <p className="text-sm md:text-base">
            DISCOVER GEAR
            <span className='text-orange-600 underline'>UP</span>
          </p>
          <h1 className="text-2xl md:text-4xl font-bold">
            SUBSCRIBE TO THE NEW
          </h1>
          <p className="text-sm md:text-base">
            Be aware of all promos, discounts, and bargains! Don’t miss your benefits.
          </p>
          <button className="mt-4 px-5 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition">
            Subscribe
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img src={subscribeimg} alt="Subscribe" className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
