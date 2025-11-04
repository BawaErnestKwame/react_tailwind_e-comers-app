import React from 'react'
import hero from '../assets/headerimage2.png'

const PercentageOff = () => {
  return (
    <div className='flex px-4 md:px-8 lg:px-24 items-center bg-slate-200 py-16 gap-48'>
        <div className=" w-1/2 flex flex-col">
            <h1 className='text-6xl font-bold '>30% - OFF</h1>
            <p className='text-sm py-1'>From every Product bought</p>
            <div className="">
                <button className='bg-orange-500 hover:bg-orange-600 transition-all px-6 py-2 text-white rounded-lg mt-2'>Shop Now</button>
            </div>
        </div>

        <img src={hero} alt=""  className='w-[300px] hidden md:block' />
    </div>
  )
}

export default PercentageOff