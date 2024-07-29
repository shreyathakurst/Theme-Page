import React from 'react'
import { summerFashion } from './Fashion'
import CardDefault from '../Components/Card'

function Competition() {
  return (
    <div className=' w-full px-auto bg-black'>
    <div className='flex justify-center items-center '>
      <div className='grid lg:grid-cols-3 sm:grid-col-2 grid-col-1 lg:gap-28 '>
      
      {
        summerFashion.map((val, index)=>(
          <CardDefault
          key ={index}
          id = {val.id}
          brand = {val.brand}
          item = {val.item}
          price = {val.price}
          material = {val.material}
          image = {val.imgUrl}
          /> 
        ))
      }
    </div>
    </div>
    </div>
  )
}

export default Competition