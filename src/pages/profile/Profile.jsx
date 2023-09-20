import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {Card, CardContent, Button, CardActionArea} from '@mui/material';
import PostCard from '../../components/posts/PostCard';
import ToolsCard from '../../components/tools/ToolsCard';
import profile_pic from '../../assets/blank_profile.jpeg';
import CancelIcon from '@mui/icons-material/Cancel';
import './profile.css';
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
    axios.get(`${API}/tools/${user.user_id}`).then(res => {
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
              src={user.profile_pic}
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
                    <aside className='aside-spacing' key={`profile-post-${post.post_id}`}>
                      <PostCard
                        post={post}
                      />
                    </aside>
                  ))}
                </div>
              </div>
            )}

            <CardActionArea
              sx={{
                width: '10%',
                position: 'absolute',
                bottom: '5%',
                right: '5%',
              }}
            >
              <Button
                onClick={() => navigate(`/${user.username}/post/new`)}
                variant='contained'
                color='primary'
              >
                New
              </Button>
            </CardActionArea>
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
                    <aside className='aside-spacing'>
                      <ToolsCard
                        key={`profile-tool-key${tool.tool_id}`}
                        tool={tool}
                        reloadTools={getTools}
                      />
                    </aside>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
          <CardActionArea
            sx={{width: '10%', position: 'absolute', bottom: '5%', right: '5%'}}
          >
            <Button
              onClick={() => navigate(`/${user.username}/tools/new`)}
              variant='contained'
              color='primary'
            >
              New
            </Button>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
