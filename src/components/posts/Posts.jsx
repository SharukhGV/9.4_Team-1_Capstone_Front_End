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
      {posts.map((individualpost, index) => {
        return (
          <PostsCard
            inKEY={individualpost.user_id}
            title={individualpost.title}
            tags={individualpost.tags}
            body={individualpost.body}
            edited={individualpost.edited_at}
            createdTime={individualpost.created_at}
            thumbnail={individualpost.thumbnail}
            index={index}
          />
        );
      })}
    </Carousel>
  );
}

export default Posts;
