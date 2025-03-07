import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { Category, CheckBox } from '@mui/icons-material';

const demo = [
    {
        Category: 'Nuts & Seed',
        ingredient: ['Cashew'],
    },
    {
        Category: 'Protien',
        ingredient: ['Bacon Stripes'],
    },
    {
        Category: 'Bread',
        ingredient:[ 'Humburger Buns','Tamotos slices '],
    }
]
const MenuCard = () => {
    const handleCheckBoxChange=() => {
        console.log('checkbox changed');

    }
  return (
    <div>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <div className='lg:flex items-center justify-between '>
                <div className='lg:flex items-center lg:gap-5' >
                <img className='w-[7rem]  h-[7rem] object-cover' src="https://cdn.pixabay.com/photo/2023/03/05/11/02/burger-7831128_640.jpg" alt="" />
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl '>
                    <p className='font-semibold text-xl '>Burger</p>
                    <p>₹ 499</p>
                    <p className=' text-gray-400'>A hamburger or simply burger is a food consisting of fillings—usually a patty of ground
                    typically inside a sliced bun or bread roll</p>

                </div>


                </div>

            </div>
        </AccordionSummary>
        <AccordionDetails>
         <form >
            <div className='flex gap-5 flex-wrap '>
                {demo.map((item)=>(
                    <div>
                        <p>{item.Category}</p>
                        <FormGroup >
                            {item.ingredient.map((item)=>(
                            <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange() }/>} label={item} />))}
                        </FormGroup>
                    </div>
                )
                
               )}

            </div>
            <div className='p-5 flex justify-end'>
            <Button variant="contained" disabled={false} type='submit'>{true?"Add To Cart":"Out Of Stock"}</Button>
            </div>
         </form>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MenuCard