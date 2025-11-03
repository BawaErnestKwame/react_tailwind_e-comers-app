import React, { useContext } from 'react'
import { ShopContext} from '../context/shopContext'


const Phones = () => {
  const {products}=useContext(ShopContext)

  const phones = products.phones
  return (
    <div>
      {
        phones.map((item)=>{
          <div key={item.id} className="">
            <img src={item.image} alt="" />
          </div>
        })
      }

    </div>
  )
}

export default Phones