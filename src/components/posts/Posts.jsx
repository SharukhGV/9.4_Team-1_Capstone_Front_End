import {useState, useEffect } from 'react';
import axios from 'axios';
import './Posts.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PostsCarousel from '../carousels/postsCarousel';

function Posts() {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [posts, setposts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
    axios.get(`${API}/posts`)
    .then((response) => {
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

// can make the category a state and keep changing it i guess

  return (
    <>
    <h3> Top Categories </h3>
    <br />
    <h4> Painting </h4>
    <div className='slider-container'>
      <button className='arrow' onClick={prevSlide}>{' '} <ArrowBackIosIcon />{' '} </button>
      { 
        visiblePosts.map((post, i) => { 
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
    </>
  );
}

export default Posts;
