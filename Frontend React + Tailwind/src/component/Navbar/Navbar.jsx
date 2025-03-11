import React from 'react'
import "./navbar.css"
import { Avatar, Badge, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '/src/assets/restaurantlogo.png'
import { Person } from '@mui/icons-material';

const Navbar = () => {
  
  return (
    <Box className='px-5 sticky top-0 z-50 py-[0.8rem] bg-[#e43746] lg:px-20  flex justify-between'>
        
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <img className='h-[3rem]' src={logo} alt="" />
                <li className='logo font-semibold text-amber-50 text-2xl '>𝙸𝚗𝚍𝚒𝚊𝚗 𝙾𝚟𝚎𝚗</li>

        </div>
        <div className='flex items-center  space-x-2 lg:space-x-10'>

            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
            <div className=''>
                {true?<Avatar sx={{bgcolor:"white", color:"red"}}>A</Avatar>:
                <IconButton>
                  <Person/> 
                  </IconButton>}
            </div>
            <div className=''>
                <IconButton>
                  <Badge color="warning"  badgeContent={9}>
                       <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>  
                  </Badge>
                </IconButton>
            </div>

        </div>
    </Box>
  )
}

export default Navbar