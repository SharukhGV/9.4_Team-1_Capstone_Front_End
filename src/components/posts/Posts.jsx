import PostsCard from './PostCard';

import {useState, useEffect } from 'react';
import axios from 'axios';
import './posts.css';
import {Card, CardCover, CardContent, CardOverflow, Divider, AspectRatio, Typography} from '@mui/joy';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Posts() {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [posts, setposts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPosts = () => {
    axios.get(`${API}/posts`)
    .then((response) => {
        setposts(response.data);
    })
    .catch(error => console.error('catch', error))
    .finally(() => {
      const theVisiblePosts = [
        posts[(currentPost - 1 + posts.length) % posts.length],
        posts[currentPost],
        posts[(currentPost + 1) % posts.length],
        posts[(currentPost + 2) % posts.length],
        posts[(currentPost + 3) % posts.length],
      ];
      setVisiblePosts(theVisiblePosts);
      // updateVisiblePosts();
      // setLoading(false);
    })
  }
  getPosts();
}, []);

// useEffect(() => {
//   console.log(`loggin posts ${posts}`);
// }, [posts])

// useEffect(() => {
//   console.log(`logging visibleposts ${visiblePosts}`)
// }, [visiblePosts])

  // function updateVisiblePosts() {
  //     theVisiblePosts = [
  //     posts[(currentPost - 1 + posts.length) % posts.length],
  //     posts[currentPost],
  //     posts[(currentPost + 1) % posts.length],
  //     posts[(currentPost + 2) % posts.length],
  //     posts[(currentPost + 3) % posts.length],
  //   ];
  //   //setVisiblePosts(theVisiblePosts);
  // }

  // function prevSlide() {
  //   setCurrentPost(prevPost =>
  //     prevPost === 0 ? posts.length - 1 : prevPost - 1
  //   );
  //   updateVisiblePosts();
  // } 

  // function prevSlide() {
  //   setCurrentPost(prevPost =>
  //     prevPost === 0 ? posts.length - 1 : prevPost - 1
  //   );
  //   updateVisiblePosts();
  // } 

  // function nextSlide() {
  //   setCurrentPost(prevPost =>
  //     prevPost === posts.length - 1 ? 0 : prevPost + 1
  //   );
  //   updateVisiblePosts();
  // } 

  //console.log(posts)
  //theres also post.category
  //or we can just make the whole thing show dique 'most popular'

  return (
    <>
    <h4> Top User Posts </h4>
    <div className='slider-container'>
      <button className='arrow' >{' '} <ArrowBackIosIcon />{' '} </button>
      { 
        visiblePosts.map((post, i) => (
          <Card component='li' variant='solid' key={`post-${i}`} sx={{ height: 119 }}  >
            <CardOverflow>
              <AspectRatio ratio='2'>
              <img loading='lazy' />
              </AspectRatio>
            <CardContent>
              {/* <Typography> {post.title} </Typography> */}
              <Typography> This is post description </Typography>
              {/* <p> {post?.title || 'Loading...'} </p> */}
              {/* <p> post description? try typography comp </p> */}
            </CardContent>
            </CardOverflow>
          </Card>
        ))
      }
       <button className='arrow' >
        {' '}
        <ArrowForwardIosIcon />{' '}
      </button>
    </div>
    </>
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
