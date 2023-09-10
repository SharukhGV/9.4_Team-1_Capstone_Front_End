import {useState} from 'react'
import './auth.css'
import {Box, Modal, TextField} from '@mui/material'
import {Link} from 'react-router-dom'
import BasicPopover from '../../assets/mui/popover/popover'
import axios from 'axios'
import './auth.css'
const API = import.meta.env.VITE_REACT_APP_API_URL
axios.defaults.withCredentials = true

export default function Auth(props) {
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [loginError, setLoginError] = useState()
  const [signupError, setSignupError] = useState()
  const [user, setUser] = useState({
    email: '',
    password: '',
    persist: false,
  })
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirm_password: '',
    dob: '',
    city_state: '',
  })

  const handleLoginText = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }
  const handleSignupText = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    })
  }

  function handleSignup(event) {
    event.preventDefault()
    if (newUser.password !== newUser.confirm_password) {
      setSignupError({
        password: 'passwords do not match',
        confirm_password: 'passwords do not match',
      })
    } else {
      axios
        .post(`${API}/auth/signup`, newUser)
        .then(res => {
          props.handleSignIn(res.data.user)
          console.log(res.data.message)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
  function handleLogin(e) {
    e.preventDefault()
    console.log(user)
    axios
      .post(`${API}/auth/login`, user)
      .then(res => {
        props.handleSignIn(res.data.user)
        console.log(res.data.message)
      })
      .catch(err => {
        console.log(err)
      })
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
  }

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
  }
  //width and height doesnt apply to signUp form
console.log(user)
  return (
    <div className='auth'>
      <div>
        {!props.authUser && (
          <button onClick={() => setLoginOpen(true)} className='login-btn'>
            {' '}
            Login{' '}
          </button>
        )}
        <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
          <Box sx={styleLogin} className='login-box'>
            <button
              onClick={() => setLoginOpen(false)}
              className='cancel-login'
            >
              {' '}
              &times;{' '}
            </button>
            <img src={props.craftopiaLogo} className='logo-login' />
            <br />
            <form className='login-form' onSubmit={handleLogin}>
              <TextField
                label='Email'
                variant='standard'
                sx={{width: '300px'}}
                name='email'
                className='input'
                onChange={handleLoginText}
              />
              <TextField
                label='Password'
                variant='standard'
                name='password'
                onChange={handleLoginText}
                sx={{width: '300px'}}
              />
              <button type='submit' className='login-btn'>
                {' '}
                Login{' '}
              </button>
            </form>
          </Box>
        </Modal>
      </div>
      <div>
        {!props.authUser && (
          <button className='signup-btn' onClick={() => setSignupOpen(true)}>
            {' '}
            Sign Up{' '}
          </button>
        )}
        <Modal open={signupOpen} onClose={() => setSignupOpen(false)}>
          <Box sx={styleSignup}>
            <button
              onClick={() => setSignupOpen(false)}
              className='cancel-login'
            >
              {' '}
              &times;{' '}
            </button>
            <img src={props.craftopiaLogo} className='logo-login' />
            <br />
            <form onSubmit={handleSignup} className='login-form'>
              <TextField
                variant='standard'
                label='Name'
                style={{width: '300px'}}
              />
              <TextField
                variant='standard'
                label='Email'
                style={{width: '300px'}}
                name='email'
                onChange={handleSignupText}
              />
              <TextField
                variant='standard'
                label='DOB'
                style={{width: '300px'}}
                name='dob'
                onChange={handleSignupText}
              />
              <TextField
                variant='standard'
                label='Username'
                style={{width: '300px'}}
                name='username'
                onChange={handleSignupText}
              />
              <TextField
                variant='standard'
                label='City, State'
                style={{width: '300px'}}
                name='city_state'
                onChange={handleSignupText}
              />
              <TextField
                variant='standard'
                type='password'
                label='Password'
                style={{width: '300px'}}
                name='password'
                onChange={handleSignupText}
              />
              <TextField
                variant='standard'
                label='Confirm Password'
                style={{width: '300px'}}
                name='confirm_password'
                onChange={handleSignupText}
              />
              <button type='submit' className='login-btn'>
                {' '}
                Sign Up{' '}
              </button>
            </form>
          </Box>
        </Modal>
      </div>
      <div>
        {props.authUser && (
          <>
            <Link to='/profile'>
              <BasicPopover
                className='login-btn'
                buttonText='Profile'
                popoverContent='Profile options will go here'
              />
            </Link>
            <button onClick={props.handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  )
}
