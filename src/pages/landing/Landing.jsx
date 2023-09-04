import './landing.css';
import Auth from '../../components/auth/Auth';
import { useState } from 'react';
import NavBar from '../../components/navbar/NavBar';
import { Box, Modal, TextField } from '@mui/material';


//docs for cards: https://mui.com/joy-ui/react-card/ 
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { Typography } from '@mui/material';
import { Button } from '@mui/joy';

import CatCarousel from '../../components/categories-carousel/CatCarousel';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArtistsGraphic from '../../assets/artistsgraphic.jpg';
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';

export default function Landing() {

  const [joinOpen, setJoinOpen] = useState(false);

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
        {/* <NavBar /> */}
        <header>
        <div className='header-branding'>
        <Card sx={{ width: '87%' }} >
        {/* border: 1, borderColor: '#D1C4E9',
        <img className='landing-logo' src={craftopiaLogo} alt='craftopia logo' /> */}
        <div className='landing-action'>  
          <div className='branding-text'>
          <h2 className='header-h2'> Ignite Your Creativity </h2>
          <h4 className='header-h4'> Explore Gear & Community to Cultivate Inspired Artistry </h4>
          <button className='join-btn' onClick={() => setJoinOpen(true)} > Join The Party </button>
          <Modal open={joinOpen} onClose={() => setJoinOpen(false)}>
            <Box sx={styleJoin}>
            <button className='cancel-login' onClick={() => setJoinOpen(false)}> &times; </button>
            <img src={craftopiaLogo} className='logo-login'/>
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
          </div>
          <div>
          <img src={ArtistsGraphic} className='artists-graphic' />
          </div>
        </div>
        </Card >
        </div>
        <br />
        {/* <div className='div' /> */}
        <br />
        </header>
        <br />
        <main>
          <CatCarousel />
          <br />
          <div>
          <h3 className='top-categories-h3'> Top Categories </h3>
          <br />
          <div >
          <p className='top-category-p'> Photography </p>
          <button className='arrow'> <ArrowBackIosIcon /> </button>
          <button className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          {/* <div className='div' /> */}
          <div >
          <p className='top-category-p'> Painting </p>
          <button className='arrow'> <ArrowBackIosIcon /> </button>
          <button className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          {/* <div className='div' /> */}
          <div>
          <p className='top-category-p'> Digital Art </p>
          <button className='arrow'> <ArrowBackIosIcon /> </button>
          <button className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          {/* <div className='div' /> */}
          </div>
          <br />
        </main>
        </> 
    )
}