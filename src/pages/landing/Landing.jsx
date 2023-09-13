import './landing.css';

import { useState } from 'react';
import CatCarousel from '../../components/categories-carousel/CatCarousel';
import ToolsCard from '../../components/tools/ToolsCard';

//docs for cards: https://mui.com/joy-ui/react-card/ 
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import { Typography } from '@mui/material';
import { Button } from '@mui/joy';


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArtistsGraphic from '../../assets/artistsgraphic.jpg';
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';

export default function Landing() {

   const [joinOpen, setJoinOpen] = useState(false);

  return (
    <>
        {/* <NavBar /> */}
    <header>
      <div className='header-branding'>
        {/* <Card sx={{ width: '87%' }} > */}
        <div className='landing-action'>
          <Card>
          <div className='branding-text'>
          <h2 className='header-h2'> Ignite Your Creativity </h2>
          <h4 className='header-h4'> Explore Gear & Community to Cultivate Inspired Artistry </h4>
          <button className='join-btn' onClick={() => setJoinOpen(true)} > Join The Party </button>
          </div>
          </Card> 
          <div>
          <img src={ArtistsGraphic} className='artists-graphic' />
          </div>
        </div>
      </div>
        <br />
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
          <ToolsCard />
          <button className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          <div >
          <p className='top-category-p'> Painting </p>
          <button className='arrow'> <ArrowBackIosIcon /> </button>
          <button className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          <div>
          <p className='top-category-p'> Digital Art </p>
          <button className='arrow'> <ArrowBackIosIcon /> </button>
          <button className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          </div>
          <br />
        </main>
    </> 
  )
}