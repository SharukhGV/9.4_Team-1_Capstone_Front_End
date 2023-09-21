import PostsCard from './PostCard';

import {useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css';
import {Card, CardCover, CardContent, CardOverflow, Divider, AspectRatio, Typography} from '@mui/joy';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Posts() {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [posts, setposts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
    axios.get(`${API}/posts`)
    .then((response) => {
      //console.log(response.data);
      const allPosts = response.data;
      const theVisiblePosts = [
        allPosts[(currentPost - 1 + allPosts.length) % allPosts.length],
        allPosts[currentPost],
        allPosts[(currentPost + 1) % allPosts.length],
        allPosts[(currentPost + 2) % allPosts.length],
        allPosts[(currentPost + 3) % allPosts.length],
      ];
      setVisiblePosts(theVisiblePosts);
      setposts(response.data);
    })
    .catch(error => console.error('catch', error))
  }
  getPosts();
}, [currentPost, API]);

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
    <>
    <h4> Top User Posts </h4>
    <div className='slider-container'>
      <button className='arrow' onClick={prevSlide}>{' '} <ArrowBackIosIcon />{' '} </button>
      { 
        visiblePosts.map((post, i) => (
          <Card component='li' variant='solid' key={`post-${i}`} sx={{ height: 119 }}  >
            <CardOverflow>
              <AspectRatio ratio='2'>
              <img loading='lazy' />
              </AspectRatio>
            <CardContent>
              <Typography> {post?.title} </Typography>
              <Typography> This is post description </Typography>
              {/* <p> {post?.title || 'Loading...'} </p> */}
              {/* <p> post description? try typography comp </p> */}
            </CardContent>
            </CardOverflow>
          </Card>
        ))
      }
       <button className='arrow' onClick={nextSlide} >
        {' '}
        <ArrowForwardIosIcon />{' '}
      </button>
    </div>
    </>
  );
}

export default Posts;
