import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Card, CardContent, Button, CardActionArea, CardActions} from '@mui/material';
import PostCard from '../../components/posts/PostCard';
import ToolsCard from '../../components/tools/ToolsCard';
import profile_pic from '../../assets/blank_profile.jpeg';
import CancelIcon from '@mui/icons-material/Cancel';
import './profile.css';
import ToolsUsers from '../../components/tools/ToolsUsers';
import {v4 as uuidv4} from 'uuid';

const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function Profile({user}) {
  const {username} = useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [tools, setTools] = useState([]);
  useEffect(() => {
    getPosts();
    getTools();
  }, []);

  const getPosts = () => {
    axios.get(`${API}/posts/${user.user_id}`).then(res => {
      setPosts(res.data);
    });
  };

  const getTools = () => {
    axios.get(`${API}/tools/all/${user.user_id}`).then(res => {
      setTools(res.data);
    });
  };
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
              src={user.profile_pic ? user.profile_pic : profile_pic}
              // src={`https://craftopia-media-bucket.s3.us-east-2.amazonaws.com/felizj171-profile-pic`}
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
          <CardContent sx={{marginBottom: '10%'}}>
            <h2 className='profile-subtitle'>Posts</h2>

            {posts.length < 1 ? (
              <div>
                <p>No Post yet </p>
              </div>
            ) : (
              <div className='profile-posts-list'>
                <div className='scroll'>
                  {posts.map(post => (
                    <aside key={uuidv4()} className='aside-spacing'>
                      <PostCard post={post} />
                    </aside>
                  ))}
                </div>
              </div>
            )}

            <CardActions
              sx={{
                width: '10%',
                position: 'absolute',
                bottom: '5%',
                right: '5%',
              }}
            >
              <Button
                className='button'
                role='button'
                onClick={() => navigate(`/${username}/post/new`)}
                variant='contained'
                color='primary'
              >
                New
              </Button>
            </CardActions>
          </CardContent>
        </Card>
        <Card className='profile-tools'>
          <CardContent sx={{marginBottom: '10%'}}>
            <h2 className='profile-subtitle'>Listings</h2>
            {tools.length < 1 ? (
              <div>
                <p>No Tools yet </p>
              </div>
            ) : (
              <div className='profile-tools-list'>
                <div className='scroll'>
                  {tools.map(tool => (
                    <aside key={uuidv4()} className='aside-spacing'>
                      <ToolsCard
                        tool={tool}
                        reloadTools={getTools}
                        userId={user.user_id}
                        user={user}
                        toolId={tool.tool_id}
                      />
                    </aside>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          <CardActions
            sx={{width: '10%', position: 'absolute', bottom: '5%', right: '5%'}}
          >
            <Button
              className='button'
              role='button'
              onClick={() => navigate(`/${username}/tools/new`)}
              variant='contained'
              color='primary'
            >
              New
            </Button>

            {/* <div
            className="button"
            role="button"
            onClick={() => navigate(`/${username}/tools`)}
            variant="contained"
            color="primary"
          >
            All Tools
          </div> */}
          </CardActions>
        </Card>{' '}
      </div>
    </div>
  );
}
