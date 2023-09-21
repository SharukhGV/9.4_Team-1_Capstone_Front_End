import './landing.css';
import {useState} from 'react';
import CatCarousel from '../../components/carousels/CatCarousel';
// import ToolsCard from '../../components/tools/ToolsCard';
import { Card } from '@mui/joy';

import ArtistsGraphic from '../../assets/artistsgraphic.jpg';
import Tools from '../../components/tools/Tools';
import Posts from '../../components/posts/Posts';

export default function Landing({setModal}) {
  return (
    <div>
      <header>
        <div className='header-branding'>
          {/* <Card sx={{ width: '87%' }} > */}
          <div className='landing-action'>
            <Card>
              <div className='branding-text'>
                <h2 className='header-h2'> Ignite Your Creativity </h2>
                <h4 className='header-h4'>
                  {' '}
                  Explore Gear & Community to Cultivate Inspired Artistry{' '}
                </h4>
                <button className='join-btn' onClick={() => setModal(true)}>
                  {' '}
                  Join Craftopia{' '}
                </button>
              </div>
            </Card>
            <div>
              <img src={ArtistsGraphic} className='artists-graphic' />
            </div>
          </div>
          <br />
          {/* <br />
          <div className='div'> </div>
          <br /> */}
        </div>
        <br />
        <CatCarousel />
        <br />
      </header>
      <br />
      <Posts />
      <Tools />
    </div>
  );
}
