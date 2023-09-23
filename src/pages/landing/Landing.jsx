import './landing.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import CatCarousel from '../../components/carousels/CatCarousel';
import PostsCarousel from '../../components/carousels/postsCarousel';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Card } from '@mui/joy';

export default function Landing({setModal, setCurrentPost, posts, visiblePosts, ArtistsGraphic}) {

  function prevSlide() {
    setCurrentPost(prevPost =>
      prevPost === 0 ? posts.length - 1 : prevPost - 1
    );
  } 

  function nextSlide() {
    setCurrentPost(prevPost =>
      prevPost === posts.length - 1 ? 0 : prevPost + 1
    );
  } 

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
      <main>
      <h3> Top Categories </h3>
      <br />
      <div className='top-category-1'>
      <h4 className='main-h4'> Painting </h4>
      <div className='posts-slider-container'>
      <button className='arrow' onClick={prevSlide}>{' '} <ArrowBackIosIcon />{' '} </button>
      { 
        visiblePosts.map((post, i) => { 
          //console.log(post)
          if (post.category === 'Paint') {
          return (
            <>
            <PostsCarousel post={post} i={i} />
            </>
          )
          }
        })
      }
       <button className='arrow' onClick={nextSlide} >
        {' '}
        <ArrowForwardIosIcon />{' '}
      </button>
      </div>
      </div>
      <div className='top-category-2'>
        <h4 className='main-h4'> Sculpting </h4>
        <div className='posts-slider-container'>
        <button className='arrow' onClick={prevSlide}>{' '} <ArrowBackIosIcon />{' '} </button>
        { 
        visiblePosts.map((post, i) => { 
          //console.log(post)
          if (post.category === 'Sculpt') {
          return (
            <>
            <PostsCarousel post={post} i={i} />
            </>
          )
          }
        })
        }
        <button className='arrow' onClick={nextSlide} >
        {' '}
        <ArrowForwardIosIcon />{' '}
        </button>
        </div>
      </div>
      <div className='top-category-3'>
        <h4 className='main-h4'> Knitting </h4>
        <div className='posts-slider-container'>
        <button className='arrow' onClick={prevSlide}>{' '} <ArrowBackIosIcon />{' '} </button>
        { 
        visiblePosts.map((post, i) => { 
          //console.log(post)
          if (post.category === 'Knitting') {
            
          return (
            <>
            <PostsCarousel post={post} i={i} />
            </>
          )
          }
        })
        }
        <button className='arrow' onClick={nextSlide} >
        {' '}
        <ArrowForwardIosIcon />{' '}
        </button>
        </div>
      </div>
      </main>
      {/* <Tools /> */}
    </div>
  );
}
