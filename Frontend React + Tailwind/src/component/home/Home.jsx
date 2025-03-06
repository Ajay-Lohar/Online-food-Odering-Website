import React from 'react'
import "./home.css"
import MultiItemCaurasel from './MultiItemCaurasel'
import RestaurantCard from '../restaurant/RestaurantCard'


const restaurant =[1,1,2,3,4,6,4,8]
const Home = () => {
  
  return (
    <div className='pb-10'>
        <section className='banner -z-50 reletive flex flex-col justify-center items-center'>
            <div className='w-[50vw] z-10 text-center'>
                <p className='text-2xl  lg:text-6xl font-bold z-10 pb-5'>Zosh food</p>
                <p className='z-10 text-gray-300 text-xl lg:text-4xl'>Taste the Convenience: Food, Fast and Delivered</p>

            </div>
            <div className='cover absolute top-17 left-0 right-0'>

            </div>
            <div className='fadout'>

            </div>

        </section>

        <section className='p-10 lg:py-10 lg:px-3'>
          <p className='text-2xl font-semibold  text-gray-400 py-3 pb-10 text-center'>Top Meels </p>
          <MultiItemCaurasel/>
        </section>

        <section className='px-5 lg:px:20 pt-10 '>
          <h1 className='text-2xl font-semibold text-gray-400 pb-8 '>Order From Our Handpicked Favorites</h1>
          <div className='flex flex-wrap items-center justify-around gap-5'>
          {restaurant.map((item)=>(
            <RestaurantCard />
          ))}
          </div>
          
        </section>
    </div>
  )
}

export default Home