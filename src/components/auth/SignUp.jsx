import { Box, Modal, TextField } from '@mui/material';
//import { useState } from 'react';
const API = `http://localhost:8000`;
//import.meta.env.VITE_REACT_APP_API_URL

export default function SignUp(props) {

    // const [newUser, setNewUser] = useState({
    //     name: '',
    //     email: '',
    //     DOB: '',
    //     username: '',
    //     cityState: '',
    //     password: '',
    //     confirmPassword: '',
    // });


    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [DOB, setDOB] = useState(0);
    // const [username, setUsername] = useState('');
    // const [cityState, setCityState] = useState([]);
    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

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

    //console.log(name) works

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const response = await fetch(`${API}/signup`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(newUser),
    //         });

    //         if (response.ok) {
    //             console.log('success')
    //             //show success message and func for what happens when user created
    //         }
    //         else {
    //             console.error('Error:', response.statusText);
    //             //display errors and what not
    //         } 
    //     } catch (error) {
    //         console.error('Error:', error)   
    //     }
    // }

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setNewUser({
    //         ...newUser,
    //         [name]: value,
    //     });
    // };

    

    return (
        <>
        <Modal open={props.joinOpen} onClose={() => props.setJoinOpen(false)}>
            <Box sx={styleJoin}>
            <button className='cancel-login' onClick={() => props.setJoinOpen(false)}> &times; </button>
            <img src={props.craftopiaLogo} className='logo-login'/>
            <br />
            <form className='login-form'>
              <TextField variant='standard' label='Name' style={{ width: '300px' }} name='name'  />
              <TextField variant='standard' label='Email' style={{ width: '300px' }} name='email'  />
              <TextField variant='standard' label='DOB' style={{ width: '300px' }} name='DOB'  />
              <TextField variant='standard' label='Username' style={{ width: '300px' }} name='username'  />
              <TextField variant='standard' label='City, State' style={{ width: '300px' }} name='cityState'  />
              <TextField variant='standard' label='Password' style={{ width: '300px' }} name='password'  />
              <TextField variant='standard' label='Confirm Password' style={{ width: '300px' }} name='confirmPassword' />
              <button type='submit' className='signup-btn' > Sign Up </button>
            </form> 
            </Box>
        </Modal>
        </>
    )
}