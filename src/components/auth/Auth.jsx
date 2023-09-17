import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { Box, Modal, TextField } from '@mui/material'
import './auth.css'
const API = import.meta.env.VITE_REACT_APP_API_URL
axios.defaults.withCredentials = true

export default function Auth({modal,tab,setModal,setTab,handleSignIn,signedUp,setSignedUp}) {
  const [cookies,setCookie] = useCookies();  
  const navigate = useNavigate();
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
          setCookie('token', res.data.token)
          handleSignIn(res.data.user);
          setModal(false);
          navigate('/home');
          //console.log(res.data.message)
        })
        .catch(err => {
          setSignupError(err)
        })
    }
  }
  function handleLogin(e) {
    e.preventDefault()
    axios
      .post(`${API}/auth/login`, user)
      .then(res => {
        setCookie('token', res.data.token)
        handleSignIn(res.data.user);
        setModal(false);
        navigate('/home');
        //console.log(res.data.message)
      })
      .catch(err => {
        // console.log(err)
        setLoginError(err)
      })
  }

  const styleAuth = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    overflow: 'scroll',
    transform: 'translate(-50%, -50%)',
    width: 370,
    height: 'fitContent',
    bgcolor: '#f8f8f8',
    border: '1px solid #f8f8f8',
    boxShadow: 14,
    p: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
 console.log(user)

  return (
    <>
    <div className='auth'>
        <Modal open={modal} onClose={() => setModal(false)}>
          <Box sx={styleAuth} className='login-box'>
            <aside className='modal-nav'>
              <button className={!tab ? 'modal-nav-btn' : 'modal-nav-btn selected'} onClick={() => setTab(true)}>Sign Up</button>
              <button className={tab ? 'modal-nav-btn' : 'modal-nav-btn selected'} onClick={() => setTab(false)}>Log-in</button>
            </aside>
            <button onClick={() => setModal(false)} className='cancel-btn'>
              {' '}
              &times;{' '}
            </button>
            {!tab ? (
              <div>
                <br />
                <form className='login-form' onSubmit={handleLogin}>
                  <TextField
                    label='Email'
                    variant='standard'
                    sx={{ width: '300px' }}
                    name='email'
                    className='input'
                    onChange={handleLoginText}
                  />
                  <TextField
                    label='Password'
                    variant='standard'
                    type='password'
                    name='password'
                    onChange={handleLoginText}
                    sx={{ width: '300px' }}
                  />
                  <button type='submit' className='login-btn'>
                    {' '}
                    Login{' '}
                  </button>
                </form>
              </div>
            ) : (
              <div>
                <br />
                <div className='signup-branding' >
                  <h3> Sign Up </h3>
                  <p> & explore your creative potantial without limits! </p>
                </div>
                <form onSubmit={handleSignup} className='signup-form'>
                  <TextField
                    variant='standard'
                    label='Name'
                    style={{ width: '300px' }}
                  />
                  <TextField
                    variant='standard'
                    label='Email'
                    style={{ width: '300px' }}
                    name='email'
                    onChange={handleSignupText}
                  />
                  <TextField
                    variant='standard'
                    label='DOB'
                    style={{ width: '300px' }}
                    name='dob'
                    onChange={handleSignupText}
                  />
                  <TextField
                    variant='standard'
                    label='Username'
                    style={{ width: '300px' }}
                    name='username'
                    onChange={handleSignupText}
                  />
                  <TextField
                    variant='standard'
                    label='City, State'
                    style={{ width: '300px' }}
                    name='city_state'
                    onChange={handleSignupText}
                  />
                  <TextField
                    variant='standard'
                    type='password'
                    label='Password'
                    style={{ width: '300px' }}
                    name='password'
                    onChange={handleSignupText}
                  />
                  <TextField
                    variant='standard'
                    label='Confirm Password'
                    type='password'
                    style={{ width: '300px' }}
                    name='confirm_password'
                    onChange={handleSignupText}
                  />
                  <button type='submit' className='signup-btn' >
                    {/* onClick={() => setSignedUp(true)} */}
                    {' '}
                    Sign Up{' '}
                  </button>
                </form>
              </div>
            )}
          </Box>
        </Modal>
        {/* {
          signedUp && modal (
            <Assesment assesmentModalOpen={modal} setAssesmentModalOpen={setModal} />
          )
        } */}
    </div>
    {/* <div>
      {
        signedUp && (
          <Assesment assesmentModalOpen={modal} setAssesmentModalOpen={setModal} />
        )
      }
    </div> */}
    {/* <div>
      {
        signedUp && modal && (
          setModal(false), perhaps it was this that affected it ?
          <Assesment assesmentModalOpen={modal} setAssesmentModalOpen={setModal} />
        )
      }
    </div> */}
    </>
  )
}
