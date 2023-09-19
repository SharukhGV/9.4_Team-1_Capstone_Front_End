import axios from 'axios';
import './auth.css';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import {useCookies} from 'react-cookie';
import {Box, TextField, FormControl} from '@mui/material';
import { Modal, ModalDialog } from '@mui/joy';
import users from '../../../dummyData/users';
//import { style } from '@mui/system';
const API = import.meta.env.VITE_REACT_APP_API_URL;
axios.defaults.withCredentials = true;

export default function Auth({modal, tab, setTab, setModal, handleSignIn}) {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [loginError, setLoginError] = useState();
  const [signupError, setSignupError] = useState();

  const [user, setUser] = useState({
    email: '',
    password: '',
    persist: '',
  });

  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirm_password: '',
    dob: '',
    city_state: '',
  });

  const handleLoginText = e => {
    //e.preventDefault();

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupText = e => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  function handleSignup(event) {
    event.preventDefault();
    if (newUser.password !== newUser.confirm_password) {
      setSignupError({
        password: 'passwords do not match',
        confirm_password: 'passwords do not match',
      });
    } else {
      axios
        .post(`${API}/auth/signup`, newUser)
        .then(res => {
          setCookie('token', res.data.token);
          handleSignIn(res.data.user);
          setModal(false);
          navigate(`/home`);
          // navigate(`/home/:${user.username}`);
          //console.log(res.data.message)
        })
        .catch(err => {
          setSignupError(err);
        });
    }
  }

  function handleLogin(e) {//itinerary
    e.preventDefault();

    if (user.email && user.password) {
      console.log('user & email filled')
    } //works

    axios
      .post(`${API}/auth/login`, user)
      .then(res => {
        setCookie('token', res.data.token);
        handleSignIn(res.data.user);
        setModal(false);
        navigate(`/home`);
        //navigate(`/home/:${user.username}`); 
        //console.log(res.data.message)
      })
      .catch(err => {
        // console.log(err)
        setLoginError(err);
      });
  }

  const authStyle = {
    width: 470,
    height: 'fitcontent',
    bgcolor: '#f8f8f8',
    boxShadow: 17,
    p: 2,
    alignItems: 'center',
  }

  return (
    <div className='auth'>
      <Modal open={modal} onClose={() => setModal(false)}>
        <ModalDialog variant="soft" sx={authStyle} >
          <Box >
          <aside className='modal-nav'>
            <button
              className={!tab ? 'modal-nav-btn' : 'modal-nav-btn selected'}
              onClick={(event) => {event.preventDefault(), setTab(true)}}
            >
              Sign Up
            </button>
            <button
              className={tab ? 'modal-nav-btn' : 'modal-nav-btn selected'}
              onClick={(event) => {event.preventDefault(), setTab(false)}}
            >
              Log-in
            </button>
          </aside>
          {/* <br /> */}
          <button onClick={() => setModal(false)} className='cancel-btn'>
            {' '}
            &times;{' '}
          </button>
          {/* <br /> */}
          <div className='auth-sect' >
          {!tab ? (
            <div className='login-sect'>
              <div className='login-branding'>
                <h3> Welcome Back </h3>
              </div>
              <form className='login-form' onSubmit={handleLogin}>
                <TextField
                  required
                  value={user.email}
                  label='Email'
                  variant='standard'
                  sx={{width: '340px'}}
                  name='email'
                  className='input'
                  onChange={handleLoginText}
                />
                <TextField
                  required
                  value={user.password}
                  label='Password'
                  variant='standard'
                  type='password'
                  name='password'
                  onChange={handleLoginText}
                  sx={{width: '340px'}}
                />
                <button type='submit' className='login-btn'>
                  {' '}
                  Login{' '}
                </button>
              </form>
            </div>
          ) : (
            <div className='signup-sect'>
              <div className='signup-branding'>
                <h3> Join Craftopia </h3>
                <p> & explore your creative potantial without limits! </p>
              </div>
              <form onSubmit={handleSignup} className='signup-form'>
                <TextField
                  required
                  variant='standard'
                  label='Name'
                  style={{width: '340px'}}
                />
                <TextField
                  required
                  variant='standard'
                  label='Email'
                  style={{width: '340px'}}
                  name='email'
                  onChange={handleSignupText}
                />
                <TextField
                  
                  variant='standard'
                  label='DOB'
                  style={{width: '340px'}}
                  name='dob'
                  onChange={handleSignupText}
                />
                <TextField
                  required
                  variant='standard'
                  label='Username'
                  style={{width: '340px'}}
                  name='username'
                  onChange={handleSignupText}
                />
                <TextField
                  
                  variant='standard'
                  label='City, State'
                  style={{width: '340px'}}
                  name='city_state'
                  onChange={handleSignupText}
                />
                <TextField
                  required
                  variant='standard'
                  type='password'
                  label='Password'
                  style={{width: '340px'}}
                  name='password'
                  onChange={handleSignupText}
                />
                <TextField
                  required
                  variant='standard'
                  label='Confirm Password'
                  type='password'
                  style={{width: '340px'}}
                  name='confirm_password'
                  onChange={handleSignupText}
                />
                <button type='submit' className='signup-btn'>
                  {/* onClick={() => setSignedUp(true)} */} Sign Up{' '}
                </button>
              </form>
            </div>
          )}
        {/* </Box> */}
        </div>
        </Box>
        </ModalDialog>
      </Modal>
    </div>
  );
}
