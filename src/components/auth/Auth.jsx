import './auth.css';
import { Box, Modal } from '@mui/material';
//import form ?
import { useState } from 'react';

export default function Auth(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    function handleSubmit(event) {
        event.preventDefault();

        handleClose();
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 300,
        // height: 240,
        bgcolor: '#f8f8f8',
        border: '1px solid #D1C4E9',
        boxShadow: 24,
        p: 4,
      };

    return (
           <div className='auth'>
            <button onClick={handleOpen} className='login-btn'> Login </button>
            <Modal open={open} onClose={handleClose}>
                <Box sx={style} className='login-box'>
                    {/* <button onClick={handleClose}> Cancel &times; </button> */}
                    <img src={props.craftopiaLogo} className='logo-login'/>
                    <form onSubmit={handleSubmit} className='login-form'>
                        <input placeholder='Email / Username' />
                        <input placeholder='password' />
                        <button type='submit'> Login </button>
                    </form>
                </Box>
            </Modal>
            {/* <button onClick={handleOpen} className='signup-btn'> Sign Up </button>
            <Modal>
                <Box>
                    <button onClick={handleClose}> Cancel &times; </button>
                    <img src={props.craftopiaLogo} className='logo-login'/>
                    <form>
                        <input />
                        <button type='submit'> Join </button>
                    </form>
                </Box>
            </Modal> */}
       
          {/* <Popup trigger={<button className='login'> Login </button>} modal >
            {
              close => (
                <div className='login-popup'>
                  <button onClick={close}> Close </button>
                  <img className='login-logo' src={props.craftopiaLogo} alt='craftopia logo' />
                  <form>
                    <input placeholder='Email / Username' />
                    <input placeholder='Password' />
                    <button type='submit'> Login </button>
                  </form>
                </div>
              )
            }
          </Popup>
          <Popup trigger={<button className='sign-up'> Sign Up </button>} modal >
            {
              close => (
                <div className='signup-popup'>
                  <button onClick={close}> Close </button>
                  <h2> Sign Up Form Here </h2>
                </div>
              )
            }
          </Popup> */}
        </div>
    )
}