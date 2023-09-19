import axios from 'axios';
import './auth.css';
import dayjs from 'dayjs';
import {useState} from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import {useNavigate} from 'react-router';
import {useCookies} from 'react-cookie';
import users from '../../../dummyData/users';
import {Box, TextField, FormControl} from '@mui/material';
import { Modal, ModalDialog } from '@mui/joy';
const API = import.meta.env.VITE_REACT_APP_API_URL;
//axios.defaults.withCredentials = true; ??

export default function Auth({modal, tab, setTab, setModal, handleSignIn}) {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies();
  const [authError, setAuthError] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [dob, setDob] = useState(null);

  console.log(dob)//works but recieved data is annoying 

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

  const handleLoginText = (event) => {
    ///event.preventDefault();
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });

    if (event.target.key === 'Enter') {
      handleLogin();
    }
  };
  //you can turn this into less code
  const handleSignupText = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });

    if (event.target.key === 'Enter') {
      handleSignup();
    }
  };

  function handleSignup(event) {
    event.preventDefault();
    if (newUser.password !== newUser.confirm_password) {
      setAuthError(true)
      setPasswordError('passwords do not match')
      //setSignupError({
      //   password: 'passwords do not match',
      //   confirm_password: 'passwords do not match',
      // });
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
        .catch(error => {
          console.log(error);
          //setSignupError(err);
        });
    }
  }

  function handleLogin(event) {//itinerary
    event.preventDefault();

    const existingUser = users.find((aUser) => aUser.email.toLowerCase() === user.email.toLowerCase());

    if (!existingUser) {
      setAuthError(true);
      setEmailError('Oops, not a registered user yet');
      return;
    } 

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
      .catch(error => {
        console.log(error);
        setAuthError(true);
        setPasswordError('Wrong password.');
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
                  error={authError}
                  helperText={authError ? emailError : ''}
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
                  error={authError}
                  helperText={authError ? passwordError : ''}
                  //apply eyeball
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
                  onChange={handleSignupText}
                />
                <TextField
                  required
                  variant='standard'
                  label='Email'
                  style={{width: '340px'}}
                  name='email'
                  onChange={handleSignupText}
                  //needs to be a valid email address either containing an @ or using a library that checks for validity
                />
                <DatePicker
                size='small'
                style={{width: '340px'}}
                disableFuture={true}
                shrink={true}
                label='DOB'
                format='MM/DD/YYYY'
                formatDensity='spacious'
                value={dob}
                onChange={(newValue) => setDob(newValue)} />
                {/* <TextField
                  variant='standard'
                  label='DOB'
                  style={{width: '340px'}}
                  name='dob'
                  onChange={handleSignupText}
                  //apply way for date to be entered mui has 
                /> */}
                <TextField
                  required
                  variant='standard'
                  label='Username'
                  style={{width: '340px'}}
                  name='username'
                  onChange={handleSignupText}
                  //is uniqueness of name being checked on backend ? 
                />
                <TextField
                  variant='standard'
                  label='City, State'
                  style={{width: '340px'}}
                  name='city_state'
                  onChange={handleSignupText}
                  //format input 
                />
                <TextField
                  required
                  variant='standard'
                  type='password'
                  label='Password'
                  style={{width: '340px'}}
                  name='password'
                  onChange={handleSignupText}
                  error={authError}
                  helperText={authError ? passwordError : ''}
                />
                <TextField
                  required
                  variant='standard'
                  label='Confirm Password'
                  type='password'
                  style={{width: '340px'}}
                  name='confirm_password'
                  onChange={handleSignupText}
                  error={authError}
                  helperText={authError ? passwordError : ''}
                />
                <button type='submit' className='signup-btn'>
                  Sign Up{' '}
                </button>
              </form>
            </div>
          )}
        </div>
        </Box>
        </ModalDialog>
      </Modal>
    </div>
  );
}
