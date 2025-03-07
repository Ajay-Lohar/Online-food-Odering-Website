import { Divider, FormControl, Grid, RadioGroup, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import FormControlLabel from '@mui/material/FormControlLabel';
import MenuCard from './MenuCard';




const categories =[
    "Pizza",
    "Burger",
    "French Fries",
    "Pasta",
    "Salad",
    "Dessert",
]
const foodTypes = [
    {label: "All", value: "All"},
    {label: "Vegetiran ", value: "Vegetiran"},
    {label: "Non-Vegetarian", value: "Non-Vegetarian"},
    {label: "Seasonal", value: "Seasonal"},
    {label: "Dairy-Free", value: "Dairy-Free"},
    
]

const menu =[2,4,2,1]

const RestaurantDetails = () => {
    const [foodType,setFoodType] = useState("all")
    const handleFilter =(e)=> {
        console.log(e.taget.value,e.taget.name)
    }
  return (
    <div className='px-5 lg:px-20 '>
        <section> 
            <h3 className='text-gray-500 py-2  mt-10  '>Home / India / Indian Fast Food /3 </h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img 
                        className="w-full h-[40vh] object-cover "
                        src="https://assets.architecturaldigest.in/photos/6385cc5511f0276636badfae/master/w_1600%2Cc_limit/DSC_8305-Edit.jpg"
                         alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img 
                        className="w-full h-[40vh] object-cover "
                        src="https://assets.architecturaldigest.in/photos/6385cd6f6313e32601f1419f/master/w_1600%2Cc_limit/DSC_8372-Edit.jpg" alt="" />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img 
                        className="w-full h-[40vh] object-cover "
                        src="https://assets.architecturaldigest.in/photos/6385cf3311f0276636badfb6/16:9/w_2560%2Cc_limit/DSC_8367-Edit-W.png" alt="" />
                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 m-1'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel elit vel turpis vulputate suscipit. Donec faucibus velit a orci consectetur, in elementum velit malesuada.
                </p>
                <div>
                <p className='text-gray-500 flex items-center  gap-3 '>
                    <LocationOnIcon/>

                    <span>
                    Rajwada Road ,Satara 
                    </span>
                </p>
                <p className='text-gray-500 flex items-center  gap-3 '>
                    <CalendarMonthIcon/> 

                    <span>
                    Mon-Sun: 9:00 AM - 9:00 PM (Today)
                    </span>
                </p>
                </div>
                
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative '>

            <div className='space-y-10 lg:w-[20%]  filter p-5  '>

                <div className='box space-y-5  lg:sticky top-28 shadow-md'>
                    <div>   
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>

                        <FormControl className='py-10  space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {foodTypes.map((item) =>(
                                    <FormControlLabel 
                                    key={item.value} 
                                    value={item.value} 
                                    control={<Radio/>} 
                                    label={item.label } 
                                    />))}
                                 
                            
                            </RadioGroup>

                        </FormControl>
                        
                    </div>
                      <Divider/>
                    <div className='mt-5'>   
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className='py-10  space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {categories.map((item) =>(
                                    <FormControlLabel 
                                    key={item} 
                                    value={item} 
                                    control={<Radio/>} 
                                    label={item } 
                                    />))}
                                 
                            
                            </RadioGroup>

                        </FormControl>
                        
                    </div>
                     
                </div>                

            </div>
            <div className='space-y-5 lg:w-[80%]  lg:pl-10'>
                {menu.map((item)=><MenuCard />)}
 
            </div>

        </section>

    </div>
  )
}

export default RestaurantDetails