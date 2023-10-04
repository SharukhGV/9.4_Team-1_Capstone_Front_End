import {useEffect, useState} from 'react';
import { useParams, useNavigate} from 'react-router';
import axios from 'axios';
import './Post.css';
import back from '../../assets/back.png';
import { maxWidth } from '@mui/system';

const API = import.meta.env.VITE_REACT_APP_API_URL;
export default function Post() {
  const navigate = useNavigate();
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
        console.log(media)
      })
      .catch(err => console.log(err));
  }, [id]);

  //console.log(post)

  return (
    <div className='post'>
      <br />
      <div className='back-btn-container'>
      <button onClick={() => navigate(-1)}> <img src={back} className='back-img' /> </button>
      </div>
      <br />
      {post.title && (
        <div><div className="fade-in-image">
          <h3> {post.title} </h3>
          <p> {post.category} </p>
          <p> By:<button onClick={() => navigate(`/${post.created_by}/profile`)} className='nav-to-profile' style={{ fontFamily: 'Montserrat, sans serif', color: '#1A237E', fontSize: '17px' }} >{post.created_by} </button> </p>
          <p style={{fontSize:"23px", fontFamily:"Helvetica"}}> {post.body} </p>
          <div>
            {
              post &&
              <img style={{maxWidth:"1px", height:"auto"}} loading='lazy' src={post.thumbnail} />
            }
            { media.map(med =>{return <img style={{maxWidth:"300px", height:"auto", margin:"auto"}}src={med.file_url} alt='post-img' />})}
          </div></div>
        </div>
      )}
    </div>
  );
}
