import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../component/home/Home'
import RestaurantDetails from '../component/restaurant/RestaurantDetails'
import Cart from '../component/cart/Cart'
import Profile from '../component/profile/Profile'
import Auth from '../component/Auth/Auth'

const CustomerRoute = () => {
  return (
    <div>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/account:register' element={<Home/>}/>
                <Route path='/restautant/city/title/id' element={<RestaurantDetails/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/my-profile/*' element={<Profile/>}/>
            </Routes>
      <Auth/>

        

    </div>
  )
}

export default CustomerRoute