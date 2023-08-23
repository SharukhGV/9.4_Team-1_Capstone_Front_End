import React, { useState } from 'react';
import './auth.css';
import { Box, Modal } from '@mui/material';

export default function Auth(props) {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  function handleSubmit(event) {
    event.preventDefault();

    //form logic here
  }

  const styleLogin = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 370,
    height: 290,
    bgcolor: '#f8f8f8',
    border: '1px solid #D1C4E9',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const styleSignup = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 370,
    height: 490,
    bgcolor: '#f8f8f8',
    border: '1px solid #D1C4E9',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  //width and height doesnt apply to signUp form

  return (
    <div className='auth'>
      <div>
        <button onClick={handleLoginOpen} className='login-btn'> Login </button>
        <Modal open={loginOpen} onClose={handleLoginClose}>
          <Box sx={styleLogin} className='login-box'>
          <button onClick={handleLoginClose} className='cancel-login'> &times; </button>
          <img src={props.craftopiaLogo} className='logo-login'/>
          <br />
          <form className='login-form'>
            <input placeholder='Email / Username' style={{ width: '300px' }} />
            <input placeholder='Password' style={{ width: '300px' }} />
            <button type='submit' className='login-btn' > Login </button>
          </form>
          </Box>
        </Modal>
      </div>
      <div>
        <button className='signup-btn' onClick={handleSignupOpen}> Sign Up </button>
        <Modal open={signupOpen} onClose={handleSignupClose}>
          <Box sx={styleSignup}>
            <button onClick={handleSignupClose} className='cancel-login'> &times; </button>
            <img src={props.craftopiaLogo} className='logo-login'/>
            <br />
            <form onSubmit={handleSubmit} className='login-form'>
              <input placeholder='Name' style={{ width: '300px' }} />
              <input placeholder='Email' style={{ width: '300px' }} />
              <input placeholder='DOB' style={{ width: '300px' }} />
              <input placeholder='Username' style={{ width: '300px' }} />
              <input placeholder='City, State' style={{ width: '300px' }} />
              <input placeholder='Password' style={{ width: '300px' }} />
              <input placeholder='Confirm Password' style={{ width: '300px' }} />
              <button type='submit' className='login-btn' > Sign Up </button>
            </form> 
          </Box>
        </Modal>
      </div>
    </div>
  );
}

 