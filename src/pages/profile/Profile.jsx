import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Card, CardContent, Button} from '@mui/material';
import profile_pic from '../../assets/blank_profile.jpeg';
import CancelIcon from '@mui/icons-material/Cancel';
import './profile.css';
const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function Profile({user}) {
  const {username} = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [tools, setTools] = useState([]);

  const handleDelete = e => {
    axios.delete(`${API}/tools`);
  };
  useEffect(() => {
    console.log(user);
    const getPosts = () => {
      axios.get(`${API}/posts/${user.user_id}`).then(res => console.log(res));
      // setPosts(data)
    };

    const getTools = () => {
      axios.get(`${API}/tools/${user.user_id}`).then(res => {
        console.log(res);
        setTools(res.data);
      });
    };
    getPosts();
    getTools();
  }, []);
  return (
    <div>
      <Card
        variant='outlined'
        sx={{
          width: '90%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
        }}
      >
        <CardContent>
          <div className='profile-card'>
            <img
              className='profile-img'
              src={user.profile_pic}
              // src={`felizj171-profile-pic`}
              style={{borderRadius: '50%', width: '200px', height: '200px'}}
            />
            <aside className='profile-desc'>
              <h1>{user.username}</h1>

              <h3>{user.city_state}</h3>
              <p>{user.aboutme}</p>
            </aside>
          </div>
          {user.username === username && (
            <Button
              onClick={() => navigate(`/${username}/profile/edit`)}
              variant='contained'
              color='warning'
            >
              Edit
            </Button>
          )}
        </CardContent>
      </Card>
      <div className='users-posts-and-tools'>
        <Card className='profile-posts'>
          <CardContent>
            {posts.length < 1 ? (
              <div>
                <p>No Post yet </p>
              </div>
            ) : (
              <div>
                {posts.map(post => (
                  <Card>
                    <CardContent>
                      <img src={post.thumbnail} alt='thumbnail' />
                      <p>{post.title}</p>
                      <p>{post.created_at}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            <Button
              onClick={() => navigate(`/${user.username}/post/new`)}
              variant='contained'
              color='primary'
            >
              New
            </Button>
          </CardContent>
        </Card>
        <Card className='profile-tools'>
          <CardContent>
            {tools.length < 1 ? (
              <div>
                <p>No Tools yet </p>
              </div>
            ) : (
              <div>
                {tools.map(tool => (
                  <Card
                    key={`tool-${tool.tool_id}`}
                    sx={{width: '15vw', height: '20vw'}}
                  >
                    <CardContent>
                      <img src={tool.thumbnail} alt='thumbnail' />
                      <p>{tool.title}</p>
                      <p>{tool.created_at}</p>
                      <Button
                        variant='contained'
                        color='error'
                        onClick={handleDelete}
                      >
                        <CancelIcon />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            <Button
              onClick={() => navigate(`/${user.username}/tools/new`)}
              variant='contained'
              color='primary'
            >
              New
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
