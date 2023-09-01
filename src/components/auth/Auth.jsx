
import { useState } from 'react';
import './auth.css';
import { Box, Modal, TextField } from '@mui/material';

import axios from 'axios'
import './auth.css'
const API = import.meta.env.VITE_REACT_APP_API_URL

export default function Auth(props) {
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const handleLoginOpen = () => setLoginOpen(true)
  const handleLoginClose = () => setLoginOpen(false)

  const handleSignupOpen = () => setSignupOpen(true)
  const handleSignupClose = () => setSignupOpen(false)
  const handleTextChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  const addUser = newUser => {
    console.log(newUser)
    axios.post(`${API}/auth/signup`, newUser)
    .then(res=>{
      console.log(res.data.message)
    })
    .catch(err=>{
      console.log(err)
    })

  }
  function handleSubmit(event) {
    event.preventDefault()
    
    addUser(user)
    //form logic here
  }

  const styleLogin = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 370,
    height: 340,
    bgcolor: '#f8f8f8',
    border: '1px solid #D1C4E9',
    boxShadow: 14,
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
    width: 390,
    height: 690,
    bgcolor: '#f8f8f8',
    border: '1px solid #D1C4E9',
    boxShadow: 14,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  //width and height doesnt apply to signUp form

  return (
    <div className='auth'>
      <div>
        <button onClick={handleLoginOpen} className='login-btn'>
          {' '}
          Login{' '}
        </button>
        <Modal open={loginOpen} onClose={handleLoginClose}>
          <Box sx={styleLogin} className='login-box'>
          <button onClick={handleLoginClose} className='cancel-login'> &times; </button>
          <img src={props.craftopiaLogo} className='logo-login'/>
          <br />
          <form className='login-form'>
            <TextField label='Email' variant='standard' sx={{ width: '300px' }} className='input' />
            <TextField label='Password' variant='standard'  sx={{ width: '300px'}} />
            <button type='submit' className='login-btn' > Login </button>
          </form>
          </Box>
        </Modal>
      </div>
      <div>
        <button className='signup-btn' onClick={handleSignupOpen}>
          {' '}
          Sign Up{' '}
        </button>
        <Modal open={signupOpen} onClose={handleSignupClose}>
          <Box sx={styleSignup} >
            <button onClick={handleSignupClose} className='cancel-login'> &times; </button>
            <img src={props.craftopiaLogo} className='logo-login'/>
            <br />
            <form onSubmit={handleSubmit} className='login-form'>
              <TextField variant='standard' label='Name' style={{ width: '300px' }} />
              <TextField variant='standard' label='Email' style={{ width: '300px' }} />
              <TextField variant='standard' label='DOB' style={{ width: '300px' }} />
              <TextField variant='standard' label='Username' style={{ width: '300px' }} />
              <TextField variant='standard' label='City, State' style={{ width: '300px' }} />
              <TextField variant='standard' label='Password' style={{ width: '300px' }} />
              <TextField variant='standard' label='Confirm Password' style={{ width: '300px' }} />
              <button type='submit' className='login-btn' > Sign Up </button>
            </form> 
          </Box>
        </Modal>
      </div>
    </div>
  )
}
