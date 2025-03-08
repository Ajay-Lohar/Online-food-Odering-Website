import { Button, Card, Divider } from '@mui/material'
import React from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import HomeIcon from '@mui/icons-material/Home';
import AddLocationIcon from '@mui/icons-material/AddLocation';

const items = [1,5]
const createOrderUsingSelectAddress=() =>{

}
const handleOpenAddresModel=() =>{
}
const Cart = () => {
  return (
    <div>
        <main className='lg:flex justify-between '>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen  pt-10  ' >
                    {items.map((item)=><CartItem key={item}/>)}
                        <Divider/>
            <div className='billDetails px-5 text-sm'>
                <p className="font-extralight py-5">Bill Details </p>  
                <div className='space-y-3'>
                    <div className='flex justify-between text-gray-400'>
                        <p> Item Total :</p>
                        <p>₹499</p>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p> Deliver Fees :</p>
                        <p>₹21</p>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p> Platform Fees :</p>
                        <p>₹5</p>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>GST and Reataurant Charges :</p>
                        <p>₹34</p>
                    </div>
                    <Divider/>
                </div>    
                <div className='pt-3 flex justify-between text-gray-400'>
                        <p>Total Pay :  </p>
                        <p>₹754</p>
                    </div>        
            </div>
            </section>
            <Divider orientation='vertical' flexItem />
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                <div>
                    <h1 className='text-center font-semibold text-2xl py-10 '>Choose Delivery Address </h1>
                    <div className='flex gap-5 flex-wrap justify-center  '>
                        {[1,23,7,3].map((item)=><AddressCard key={item} handleSelectAddress={createOrderUsingSelectAddress} item={item} showButton={true}/>)}
                         
                    </div>
                    <div className='flex gap-5 flex-wrap justify-center pt-6'>
                    <Card className="flex gap-5 w-64 p-5 ">
                              <AddLocationIcon  />
                              <div className='space-y-3 text-gray-400 '>
                                  <h1 className='font-semibold text-lg text-white'>Add New Address</h1>
                                  
                                  <Button variant='outlined' fullWidth onClick={handleOpenAddresModel}>
                                      Add  
                                  </Button> 
                              </div>

                          </Card >
                    </div>  
                </div>

            </section>
            

        </main>
    </div>
  )
}

export default Cart