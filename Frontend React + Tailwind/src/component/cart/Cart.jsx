import { Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React, { useState } from 'react'
import CartItem from './CartItem'
import AddressCard from './AddressCard'
import HomeIcon from '@mui/icons-material/Home';
import AddLocationIcon from '@mui/icons-material/AddLocation';

import Box from '@mui/material/Box';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outlie:"none", 
    boxShadow: 24,
    p: 4,
  };

  const initialValues   = { 
    StreetAddress:"",
    State:"",
    City:"",
    Pincode:"",
  }

  const validationSchema = Yup.object().shape({
    StreetAddress: Yup.string().required("Street Address is required"),
    State: Yup.string().required("State is required"),
    City: Yup.string().required("City is required"),
    Pincode: Yup.string().required("Pincode is required").matches(/^[1-9][0-9]{5}$/, "Pincode must be 6 digits"),
  });



const items = [1,5]
const createOrderUsingSelectAddress=() =>{

}

const Cart = () => {
const handleOpenAddresModel=() =>{setOpen(true)};

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const handleSubmit = (values) =>{
        console.log("value", values);
        
    }
  return (
    <>
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
                        {[1,23,3].map((item)=><AddressCard key={item} handleSelectAddress={createOrderUsingSelectAddress} item={item} showButton={true}/>)}
                         
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
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Formik initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>

                <Form>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field as={TextField}
                            name="streetAddress"
                            label="Street Address"
                            fullWidth
                            variant="outlined"
                            // error={!ErrorMessage("StreetAddress ")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            >

                            </Field>

                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField}
                            name="city"
                            label="City"
                            fullWidth
                            variant="outlined"
                            // error={!ErrorMessage("StreetAddress ")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            >

                            </Field>

                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField}
                            name="state"
                            label="State"
                            fullWidth
                            variant="outlined"
                            // error={!ErrorMessage("StreetAddress ")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            >

                            </Field>

                        </Grid>
                        
                        <Grid item xs={12}>
                            <Field as={TextField}
                            name="pincode"
                            label="Pincode"
                            fullWidth
                            variant="outlined"
                            // error={!ErrorMessage("StreetAddress ")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            >

                            </Field>

                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth type="submit" variant="contained" color="primary">
                                Add
                            </Button>
                        </Grid>
    

                    </Grid>
                </Form>
                </Formik>
                
                
            </Box>
            </Modal>
    </>
  )
}

export default Cart