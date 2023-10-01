import {useEffect, useState} from 'react';
import { useParams} from 'react-router';
import axios from 'axios';

const API = import.meta.env.VITE_REACT_APP_API_URL;
export default function Post() {
  const {id} = useParams();
  const [post, setPost] = useState({});
  const [media, setMedia] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/posts/one/${id}`)
      .then(res => {
        console.log(res.data)
        setPost(res.data.post);
        setMedia(res.data.media);
      })
      .catch(err => console.log(err));
  }, [id]);


  return (
    <div>
      {post.title && (
        <div>
          <h3> {post.title} </h3>
          <p> {post.category} </p>
          <div>
            <img src={media[0].file_url} alt='post-img' />
            {post.body}
          </div>
        </div>
      )}
    </div>
  );
}
