import React from 'react'
import RestaurantCard from '../restaurant/RestaurantCard'

const Favorites = () => {
  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center '>My Favorites</h1>

      <div className='flex flex-wrap gap-5   justify-center'>
        {
          [1,2,3].map((item)=><RestaurantCard/>)
        }

      </div>
    </div>
  )
}

export default Favorites