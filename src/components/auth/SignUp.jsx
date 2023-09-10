import { Box, Modal, TextField } from '@mui/material';
import { useState } from 'react';

const API = import.meta.env.VITE_REACT_APP_API_URL

export default function SignUp(props) {

    const [user, setUser] = useState({
        email: '',
        password: '',
      })

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

    const styleJoin = {
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

    return (
        <>
        <Modal open={props.joinOpen} onClose={() => props.setJoinOpen(false)}>
            <Box sx={styleJoin}>
            <button className='cancel-login' onClick={() => props.setJoinOpen(false)}> &times; </button>
            <br />
            <form className='login-form' onSubmit={handleSubmit}>
              <input type='email' name='email' id='email' onChange={handleTextChange}/>
              <input type='password' name='password' id='password' onChange={handleTextChange}/>
              {/* <TextField variant='standard' label='Name' style={{ width: '300px' }} name='name'  />
              <TextField variant='standard' label='Email' style={{ width: '300px' }} name='email' onChange={handleTextChange}  />
              <TextField variant='standard' label='DOB' style={{ width: '300px' }} name='DOB'  />
              <TextField variant='standard' label='Username' style={{ width: '300px' }} name='username'  />
              <TextField variant='standard' label='City, State' style={{ width: '300px' }} name='cityState'  />
              <TextField variant='standard' type='password' label='Password' style={{ width: '300px' }} name='password' onChange={handleTextChange}  />
              <TextField variant='standard' label='Confirm Password' style={{ width: '300px' }} name='confirmPassword' /> */}
              <button type='submit' className='signup-btn' > Sign Up </button>
            </form> 
            </Box>
        </Modal>
        </>
    )
}