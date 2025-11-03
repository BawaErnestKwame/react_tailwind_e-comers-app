import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
const Headphone = () => {

  const {products} = useContext(ShopContext)

  const headsets = products.headsets
  return (
    <div>
      {
        headsets.map((item)=>(
          <div key={item.id} className="">
            <img src={item.image} alt="" />
          </div>

        ))
      }
    </div>
  )
}

export default Headphone