import './landing.css';
import {useState} from 'react';
import CatCarousel from '../../components/carousels/CatCarousel';
import PostCard from '../../components/posts/PostCard';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Card } from '@mui/joy';

export default function Landing({setModal, ArtistsGraphic, postsCategorized}) {
  const [currentFilmmakingPost, setCurrentFilmmakingPost] = useState(0);
  const [currentPaintPost, setCurrentPaintPost] = useState(0);
  const [currentPhotographyPost, setCurrentPhotographyPost] = useState(0);
  let visibleFilmmakingPosts = []; 
  let visiblePhotographyPosts = [];
  let visiblePaintPosts = [];

  for (let i = 0; i < 5; i++) {
    const filmmakingIndex = (currentFilmmakingPost + i) % postsCategorized.Filmmaking.length;
    const photographyIndex = (currentPhotographyPost + i) % postsCategorized.Photography.length;
    const paintIndex = (currentPaintPost + i) % postsCategorized.Paint.length;
    visibleFilmmakingPosts.push(postsCategorized.Filmmaking[filmmakingIndex]);
    visiblePhotographyPosts.push(postsCategorized.Photography[photographyIndex]);
    visiblePaintPosts.push(postsCategorized.Paint[paintIndex]);  
  }

  return (
    <div className='landing'>
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
      <br />
      <main>
      <h3 className='top-categories-h3'> Top Categories </h3>
      <br />
      <div className='top-category-1'>
      <h4 className='main-h4'> Photography </h4>
      <div className='posts-slider-container'>
      <button className='arrow' onClick={() => setCurrentPhotographyPost(prevPost => prevPost === 0 ? postsCategorized.Photography.length - 1 : prevPost - 1)}>{' '} <ArrowBackIosIcon />{' '} </button>
      {
        visiblePhotographyPosts.map((post) => {
          return (
            <PostCard post={post} />
          )
        })
      }
       <button className='arrow' onClick={() => setCurrentPhotographyPost(prevPost => prevPost === postsCategorized.Photography.length - 1 ? 0 : prevPost + 1)}>
        {' '}
        <ArrowForwardIosIcon />{' '}
      </button>
      </div>
      </div>
      <div className='top-category-2'>
        <h4 className='main-h4'> Painting </h4>
        <div className='posts-slider-container'>
        <button className='arrow' onClick={() => setCurrentPaintPost(prevPost => prevPost === 0 ? postsCategorized.Paint.length - 1 : prevPost - 1)}>{' '} <ArrowBackIosIcon />{' '} </button>
        {
          visiblePaintPosts.map((post) => {
            return (
              <PostCard post={post} />
            )
          })
        }
        <button className='arrow' onClick={() => setCurrentPaintPost(prevPost => prevPost === postsCategorized.Paint.length - 1 ? 0 : prevPost + 1)}>
        {' '}
        <ArrowForwardIosIcon />{' '}
        </button>
        </div>
      </div>
      <div className='top-category-3'>
        <h4 className='main-h4'> Filmmaking </h4>
        <div className='posts-slider-container'>
        <button className='arrow' onClick={() => setCurrentFilmmakingPost(prevPost => prevPost === 0 ? postsCategorized.Filmmaking.length - 1 : prevPost - 1)}>{' '} <ArrowBackIosIcon />{' '} </button>
        {
          visibleFilmmakingPosts.map((post) => {
            return (
              <PostCard post={post} />
            )
          })
        }
        <button className='arrow' onClick={() => setCurrentFilmmakingPost(prevPost => prevPost === postsCategorized.Filmmaking.length - 1 ? 0 : prevPost + 1)}>
        {' '}
        <ArrowForwardIosIcon />{' '}
        </button>
        </div>
      </div>
      </main>
    </div>
  );
}
