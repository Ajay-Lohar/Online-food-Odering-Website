import { Height } from '@mui/icons-material'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'

import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const EventCard = () => {
  return (
    <div>
        <Card sx={{width:300}}>
            <CardMedia 
            sx={{height:345}}
            image='https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'/>
            
            <CardContent >
                <Typography variant='h5'>
                    Indian Fast Food
                </Typography>
                <Typography variant='body2'>
                    50% off on your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"Mumbai"}</p>
                    <p className='text-sm text-blue-500'>February 14, 2024 12:00 AM</p>
                    <p className='text-sm text-red-500'>February 16, 2024 12:00 AM</p>
                    
                </div>
            </CardContent>
           {true &&  <CardActions>
                <IconButton>
                    <DeleteIcon />

                </IconButton>
            </CardActions>}
        </Card>
        
    </div>
  )
}

export default EventCard