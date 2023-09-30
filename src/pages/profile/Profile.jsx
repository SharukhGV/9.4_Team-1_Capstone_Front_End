import {lazy, useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
import {CardContent, Button, CardActions, Divider} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import {Card} from '@mui/joy';
import PostCard from '../../components/posts/PostCard';
import ToolsCard from '../../components/tools/ToolsCard';
import profile_pic from '../../assets/blank_profile.jpeg';
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
              loading='lazy'
              src={profile_pic}
              style={{borderRadius: '50%', width: '200px', height: '200px'}}
            />
            <aside className='profile-desc'>
              <h1>{user.username}</h1>
              <h3>{user.city_state}</h3>
              <p>{user.aboutme}</p>
            </aside>
          </div>
          {user.username === username && (
            <button
              className='edit-btn'
              onClick={() => navigate(`/${username}/profile/edit`)}
            >
              <SettingsIcon />
            </button>
          )}
        </CardContent>
      </Card>
      <div className='users-posts-and-tools'>
        <Card className='profile-posts' variant='outlined'>
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
                    <aside key={uuidv4()} className='aside-spacing' onClick={() => navigate(`/post/${post.post_id}`
                    // , {
                    //   state: {
                    //     title: post.title,
                    //     category: post.category,
                    //     body: post.body,
                    //     created_at: post.created_at,
                    //     created_by: post.created_by,
                    //     //file: files,
                    //   }
                    // }
                    )}>
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
              <button
                className='button'
                role='button'
                onClick={() => navigate(`/${username}/post/new`)}
                variant='contained'
                color='primary'
              >
                New
              </button>
            </CardActions>
          </CardContent>
        </Card>
        <Divider orientation='vertical' flexItem />
        <Card className='profile-tools' variant='outlined'>
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
                    <aside key={uuidv4()} className='aside-spacing' onClick={() => navigate(`/tools/${tool.tool_id}`//, {state: {category: tool.category, condition: tool.condition, created_at: tool.created_at, created_by: tool.created_by, description: tool.description, name: tool.name, price: tool.price, stock: tool.stock}}
                    )}>
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
            <button
              className='button'
              role='button'
              onClick={() => navigate(`/${username}/tools/new`)}
              variant='contained'
              color='primary'
            >
              New
            </button>
          </CardActions>
        </Card>{' '}
      </div>
    </div>
  );
}
