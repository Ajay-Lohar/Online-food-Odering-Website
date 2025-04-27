import { Box, Modal } from '@mui/material'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { style } from '../cart/Cart';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleOnClose=()=>{
        navigate("/")
        
    }
  return (
    <>
    <Modal onClose={handleOnClose} open={
        location.pathname === "/account/login" ||
        location.pathname === "/account/register"

    }>
        <Box sx={style}>
            {location.pathname === "/account/register" ? <RegisterForm/> : <LoginForm/>

            }

        </Box>

    </Modal>
        
    </>
  )
}

export default Auth

//1