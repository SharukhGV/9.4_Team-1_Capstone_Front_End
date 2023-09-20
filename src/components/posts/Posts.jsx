import PostsCard from './PostCard';

import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import './Posts.css';
import Carousel from 'react-material-ui-carousel';
import {Card, CardCover, CardContent, CardOverflow, Divider, AspectRatio, Typography} from '@mui/joy';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Posts() {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [posts, setposts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState([]);

  useEffect(() => {
    axios.get(`${API}/posts`)
    .then((response) => {
        setposts(response.data)
    })
    .catch(error => console.error('catch', error))
    .finally(() => {
      updateVisiblePosts();
    })
}, []);

  // function prevSlide() {
  //   setCurrentPost(prevPost =>
  //     prevPost === 0 ? posts.length - 1 : prevPost - 1
  //   );
  // } 

  // function nextSlide() {
  //   setCurrentPost(prevImg =>
  //     prevImg === posts.length - 1 ? 0 : prevPost + 1
  //   );
  // } 

  // function showCase() {
  //   const visiblePosts = [
  //     posts[(currentPost - 1 + posts.length) % posts.length],
  //     posts[currentPost],
  //     posts[(currentPost + 1) % posts.length],
  //     posts[(currentPost + 2) % posts.length],
  //     posts[(currentPost + 3) % posts.length],
  //   ];
  // }

  function updateVisiblePosts() {
    const theVisiblePosts = [
      posts[(currentPost - 1 + posts.length) % posts.length],
      posts[currentPost],
      posts[(currentPost + 1) % posts.length],
      posts[(currentPost + 2) % posts.length],
      posts[(currentPost + 3) % posts.length],
    ];
    setVisiblePosts(theVisiblePosts);
  }

  function prevSlide() {
    setCurrentPost(prevPost =>
      prevPost === 0 ? posts.length - 1 : prevPost - 1
    );
    updateVisiblePosts();
  } 

  function nextSlide() {
    setCurrentPost(prevPost =>
      prevPost === posts.length - 1 ? 0 : prevPost + 1
    );
    updateVisiblePosts();
  } 



  //console.log(posts)
  //theres also post.category
  //or we can just make the whole thing show dique 'most popular'

  return (
    <div className='slider-container'>
      <button className='arrow' onClick={prevSlide}>{' '} <ArrowBackIosIcon />{' '} </button>
      {
        visiblePosts.map((post, i) => (
          <Card component='li' variant='solid' key={`post-${i}`}  >
            <CardOverflow>
              <AspectRatio>
              <img loading='lazy' />
              </AspectRatio>
            <CardContent>
              {/* <Typography> {post.title} </Typography> */}
              <p> {post?.title || 'Loading...'} </p>
              <p> post description? try typography comp </p>
            </CardContent>
            <CardOverflow variant='soft' sx={{ bgcolor: 'background.level1' }}>
              <Divider inset='context' />
              <CardContent orientation='horizontal'>
                time posted
              </CardContent>
            </CardOverflow>
            </CardOverflow>
          </Card>
        ))
      }
       <button className='arrow' onClick={nextSlide}>
        {' '}
        <ArrowForwardIosIcon />{' '}
      </button>
    </div>
    // <Carousel>
    //   {posts.map((individualpost, index) => {
    //     return (
    //       <PostsCard
    //         inKEY={individualpost.user_id}
    //         title={individualpost.title}
    //         tags={individualpost.tags}
    //         body={individualpost.body}
    //         edited={individualpost.edited_at}
    //         createdTime={individualpost.created_at}
    //         thumbnail={individualpost.thumbnail}
    //         index={index}
    //       />
    //     );
    //   })}
    // </Carousel>
  );
}

export default Posts;
