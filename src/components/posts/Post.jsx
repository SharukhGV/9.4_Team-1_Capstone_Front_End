import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { v4 as uuid } from "uuid";
import axios from 'axios';
import './Post.css';
import back from '../../assets/back.png';
import { maxWidth } from '@mui/system';

const API = import.meta.env.VITE_REACT_APP_API_URL;
export default function Post() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [media, setMedia] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/posts/one/${id}`)
      .then(res => {
        console.log(res.data);
        setPost(res.data.post);
        setMedia(res.data.media);
        console.log(media)
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className='post'>
      <br />
      <div className='back-btn-container'>
        <button onClick={() => navigate(-1)}>
          {' '}
          <img src={back} className='back-img' />{' '}
        </button>
      </div>
      <br />
      {post.title && (
        <div className='post-info'>

          <div className='post-images'>
            {post && (
              <aside className='post-aside'>
                <img
                  loading='lazy'
                  className='post-img'
                  src={post.thumbnail}
                />
                <p className='caption'>Image - 1</p>
              </aside>
            )}
            {media[0] &&
              media.map((file, i) => (
                <aside key={uuid()} className='post-aside'>
                  <img
                    src={file.file_url}
                    alt='post-img'
                    className='post-img'
                  />
                  <p className='caption'>Image - {i + 2}</p>
                </aside>
              ))}
          </div>

          <div className='post-details'>
            <h3> {post.title} </h3>
            <p> {post.category} </p>
            <p>
              {' '}
              By:
              <button
                onClick={() => navigate(`/${post.created_by}/profile`)}
                className='nav-to-profile'
                style={{
                  fontFamily: 'Montserrat, sans serif',
                  color: '#1A237E',
                  fontSize: '17px',
                }}
              >
                {post.created_by}{' '}
              </button>{' '}
            </p>
            <p> {post.body} </p>
          </div>

        </div>
      )}
    </div>
  );
}
