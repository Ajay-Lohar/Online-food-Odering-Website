import React from 'react'
import "./navbar.css"
import { Avatar, Badge, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '/src/assets/restaurantlogo.png'

const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#e43746] lg:px-20  flex justify-between'>
        
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <img className='h-[3rem]' src={logo} alt="" />
                <li className='logo font-semibold text-amber-50 text-2xl '>Fire Food</li>

        </div>
        <div className='flex items-center  space-x-2 lg:space-x-10'>

            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
            <div className=''>
                <Avatar sx={{bgcolor:"white", color:"red"}}>A</Avatar>
            </div>
            <div className=''>
                <IconButton>
                  <Badge color="warning"  badgeContent={9}>
                       <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>  
                  </Badge>
                </IconButton>
            </div>

        </div>
    </div>
  )
}

export default Navbar