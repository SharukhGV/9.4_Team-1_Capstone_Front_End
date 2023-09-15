import {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {
  Card,
  CardContent,
  Button,
  TextareaAutosize,
  TextField,
} from '@mui/material'
import profile_pic from '../../assets/blank_profile.jpeg'
import './profile.css'
const API = import.meta.env.VITE_REACT_APP_API_URL

export default function ProfileEdit({user}) {
  const {username} = useParams()
  const navigate = useNavigate()
  const [updatedUser, setUpdatedUser] = useState(user)
  const [file, setFile] = useState({
    preview: '',
    data: '',
  })
  useEffect(()=>{
    console.log(updatedUser)
  },[])
  const saveChanges = () => {
    const newForm = new FormData()
    newForm.append('profile-pic', file.data)
    for(const key in updatedUser){
      newForm.append(key, updatedUser[key] )
    }
    axios.put(`${API}/auth/${user.user_id}`,newForm,{
      headers:{
        "Content-Type":"multipart/form-data"
      }
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>console.log(err))
  }
  const cancelChanges = () => {
    // setConfirm(true)
    navigate(-1)
  }
  const handleUpdatedUser = e => {
    console.log(updatedUser)
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    })
  }
  const handleFileInput = e => {
    console.log(e.target.files[0])
    setFile({
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    })
  }
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
            <aside className='img-update'>
              <img
                className='profile-img'
                src={file.preview ? file.preview : profile_pic}
                style={{borderRadius: '50%', width: '200px', height: '200px'}}
              />
              <input type='file' accept='image/*' onChange={handleFileInput} />
            </aside>
            <aside className='profile-desc-edit'>
              <h1>{user.username}</h1>
              <TextField
                name='current_skillset'
                label='Current Skillset'
                value={updatedUser.current_skillset}
                sx={{marginBottom: 4}}
                onChange={handleUpdatedUser}
              />

              <TextField
                name='learning_interest'
                label='Learning Interest'
                value={updatedUser.learning_interest}
                sx={{marginBottom: 4}}
                onChange={handleUpdatedUser}
              />
              <TextField
                name='city_state'
                label='City State'
                value={updatedUser.city_state}
                sx={{marginBottom: 4}}
                onChange={handleUpdatedUser}
              />
              <label>Bio</label>
              <TextareaAutosize
                name='aboutme'
                value={updatedUser.aboutme}
                sx={{width: '100%'}}
                onChange={handleUpdatedUser}
              />
              {/* <p>{user.aboutme}</p> */}
            </aside>
          </div>
          {user.username === username && (
            <div>
              <Button onClick={saveChanges} variant='contained' color='primary'>
                Save
              </Button>
              <Button onClick={cancelChanges} variant='contained' color='error'>
                Cancel
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
      {/* <div>
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
          <CardContent>
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
      </div> */}
    </div>
  )
}
