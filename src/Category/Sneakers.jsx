import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'

const Gaming = () => {
  const {products} = useContext(ShopContext)

  const sneakers = products.sneakers
  return (
    <div>
      <h1>Get Quality sneakers </h1>
      {
        sneakers.map((item)=>(
          <div key={item.id} className="">

            <img src={item.images} alt="" />
          </div>
        ))

      }

    </div>
  )
}

export default Gaming