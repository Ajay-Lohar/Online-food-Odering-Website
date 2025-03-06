import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


import React from 'react'

const RestaurantCard = () => {
  return (
    <div>
        <Card className=' w-[18rem] '>
            <div className={`${ true ?'cursor-pointer' : 'cursor-not-allowed'} relative`}>
                <img
                className='w-full h-[10rem] rounded-t-md object-cover'
                src="https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg" alt="" />
                
                <Chip 
                size='small'
                className='absolute top-2 left-2'
                color={true ? "success" : "error"}
                label={true? "Open Now" : "Closed"}
                />
            </div>
            <div className='p-4 textPart lg:flex w-full  justify-between'>
                <div className='space-y-1'>
                    <p className='font-semibold text-lg '>Indian Fast Food</p>
                    <p className="text-gray-500 text-sm">
                        Lorem ipsum dolor sit amet, rerum?
                    </p>

                </div>
                <div>
                    <IconButton>
                        {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}

                    </IconButton>
                </div>

            </div>

        </Card>
    </div>
  )
}

export default RestaurantCard