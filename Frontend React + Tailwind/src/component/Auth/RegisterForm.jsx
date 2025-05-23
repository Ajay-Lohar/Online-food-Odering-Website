import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import VisibilityIcon from '@mui/icons-material/Visibility';  

const initialValues={
  fullName:"",
  email : "",
  password:""
}
const RegisterForm = () => {
  const navigate =useNavigate()

  const handelSubmit=(values)=>{
    console.log("form values " ,values)

  }
  return (
    <div>
      <Typography variant='h5' className='text-center'>
      Register
      </Typography>
      <Formik onSubmit={handelSubmit} initialValues={initialValues}>
        <Form>
            <Field as={TextField}
                  name="fullName"
                  label="Full Name"
                  fullWidth
                  variant="outlined"
                  margin= "normal"
                  >
          
            </Field>
            <Field as={TextField}
                  name="email"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  margin= "normal"
                  >
          
            </Field>
            <Field as={TextField}
                  name="password"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  margin= "normal"
                  type="password"
                  >
          
            </Field>

            <FormControl fullWidth margin= "normal">
                  <InputLabel id="role-simple-select-label">Role</InputLabel>
                  <Field
                  as ={Select}
                  labelId="role-simple-select-label"
                  id="role-simple-select"
                  name="role"
                  // value={age}
                  label="Role"
                  // onChange={handleChange}
                  >
                  <MenuItem value={"ROLE-CUSTOMER"}>Customer</MenuItem>
                  <MenuItem value={"ROLE-RESTAURANT_OWNER"}>Restaurant_Owner</MenuItem>
                  </Field>
            </FormControl>
            <Button sx={{mt:2 ,padding:"1rem"}} fullWidth type='submit' variant='contained'>Register </Button>
        </Form>

      </Formik>
      <Typography variant='body2' align='center' sx={{mt:3}}>
        if  have an account already?
        <Button  size='small' onClick={()=>navigate("/account/login")}>
          Login 
        </Button>
      </Typography>

    </div>
  )
}

export default RegisterForm