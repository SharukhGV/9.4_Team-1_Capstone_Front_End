import PostsCard from './PostCard';

import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel';

function Posts() {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [posts, setposts] = useState([]);

  useEffect(() => {
    const getPosts = () => {
      axios
        .get(`${API}/posts`)
        .then(response => setposts(response.data))
        .catch(e => console.error('catch', e));
    };
    getPosts();
  }, []);

  return (
    <Carousel>
      {posts.map((post) => {
        return (
          <PostsCard post={post} key={`post-key${post.post_id}`}/>
        );
      })}
    </Carousel>
  );
}

export default Posts;
