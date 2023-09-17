import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Card, CardContent, Button} from '@mui/material'
import profile_pic from '../../assets/blank_profile.jpeg'
import './profile.css'
const API = import.meta.env.VITE_REACT_APP_API_URL

export default function Profile({user}) {
  const {username} = useParams()
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [tools, setTools] = useState([])

  useEffect(() => {
    console.log(user)
    const getPosts = () => {
      axios.get(`${API}/posts/${user.user_id}`)
      .then(res=>console.log(res))
      // setPosts(data)
    }
    const getTools = () => {
       axios.get(`${API}/tools/${user.user_id}`)
       .then(res=>console.log(res))
      // setTools(data)
    }
    getPosts()
    getTools()
  }, [])
  return (
    <div>
      <Card
        variant='outlined'
        sx={{
          width: '90vw',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 10,
        }}
      >
        <CardContent>
          <div className='profile-card'>
            <img
              className='profile-img'
              // src={user.profile_pic}
              src={`https://craftopia-media-bucket.s3.us-east-2.amazonaws.com/felizj171-profile-pic`}
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
      <div>
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
          </CardContent>
        </Card>
        <Card className='profile-tools'>
        <Button onClick={()=>navigate(`/tools/${user.username}/new`)} variant='contained' color='warning'>
              New Tools Post
            </Button>
            
            <Button onClick={()=>navigate(`/tools/${user.username}`)} variant='contained' color='warning'>
              All Your Tools
            </Button>           <CardContent>
            {tools.length < 1 ? (
              <div>
                <p>No Tools yet </p>
              </div>
            ) : (
              <div>
                {tools.map(tool => (
                  <Card>
                    <CardContent>
                      <img src={tool.thumbnail} alt='thumbnail' />
                      <p>{tool.title}</p>
                      <p>{tool.created_at}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
