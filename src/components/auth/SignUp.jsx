import { Box, Modal, TextField } from '@mui/material';

export default function SignUp(props) {

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
            <img src={props.craftopiaLogo} className='logo-login'/>
            <br />
            <form className='login-form'>
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
        </>
    )
}