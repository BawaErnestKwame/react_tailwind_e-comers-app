import React from 'react'
import { Link } from 'react-router-dom'

const CartPage = () => {
  return (
    <div>
      <div className="px-4 md:px-8 lg:px-24 bg-gray-300 w-full mt-32 h-screen">
       <div className="">
        <Link to='/'>
         <button>
          GO BACK
        </button>
        </Link>

        <div className="">

        </div>
       </div>

      </div>
      
    </div>
  )
}

export default CartPage