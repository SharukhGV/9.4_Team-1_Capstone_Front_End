import {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  CardContent,
  Button,
  TextareaAutosize,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import profile_pic from '../../assets/blank_profile.jpeg';
import './profile.css';
const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function ProfileEdit({user, refreshUser}) {
  const {username} = useParams();
  const navigate = useNavigate();
  const [updatedUser, setUpdatedUser] = useState(user);
  const [learningInterest, setLearningInterest] = useState('Unsure');
  const [currentSkillset, setCurrentSkillset] = useState('Beginner');

  const [file, setFile] = useState({
    preview: '',
    data: '',
  });

  const saveChanges = () => {
    const newForm = new FormData();
    newForm.append('profile-pic', file.data);
    for (const key in updatedUser) {
      newForm.append(key, updatedUser[key]);
    }
    axios
      .put(`${API}/auth/${user.user_id}`, newForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then(res => {
        refreshUser();
        navigate(`/${user.username}/profile`);
      })
      .catch(err => console.log(err));
  };
  const cancelChanges = () => {
    navigate(-1);
  };
  const handleUpdatedUser = e => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleFileInput = e => {
    setFile({
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    });
  };

  const handleSelectChange = e => {
    if (e.target.name === 'learning_interest') {
      setLearningInterest(e.target.value)
    }
    if (e.target.name === 'current_skillset') {
      setCurrentSkillset(e.target.value)
    }
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

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
                loading='lazy'
                src={
                  file.preview
                    ? file.preview
                    : user.profile_pic
                    ? user.profile_pic
                    : profile_pic
                }
                style={{borderRadius: '50%', width: '200px', height: '200px'}}
              />
              <input type='file' accept='image/*' onChange={handleFileInput} />
            </aside>
            <aside className='profile-desc-edit'>
              <h1>{user.username}</h1>
              <aside className='select-inputs'>
                <FormControl fullWidth sx={{marginRight: '5px'}}>
                  <InputLabel id='learning-interest-label'>
                    Learning Interest
                  </InputLabel>
                  <Select
                    labelId='learning-interest-label'
                    id='learning-interest-select'
                    name='learning_interest'
                    value={learningInterest}
                    label='Learning Interest'
                    onChange={handleSelectChange}
                  >
                    <MenuItem value='Unsure'>Unsure</MenuItem>
                    <MenuItem value='Painting'>Painting</MenuItem>
                    <MenuItem value='Drawing'>Drawing</MenuItem>
                    <MenuItem value='Photography'>Photography</MenuItem>
                    <MenuItem value='Ceramics'>Ceramics</MenuItem>
                    <MenuItem value='Sculpting'>Sculpting</MenuItem>
                    <MenuItem value='Printmaking'>Printmaking</MenuItem>
                    <MenuItem value='Graffiti'>Graffiti</MenuItem>
                    <MenuItem value='Fashion Design'>Fashion Design</MenuItem>
                    <MenuItem value='Filmmaking'>Filmmaking</MenuItem>
                    <MenuItem value='Digital Artistry'>
                      Digital Artistry
                    </MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth sx={{marginLeft: '5px'}}>
                  <InputLabel id='current-skillset-label'>
                    Current Skillset
                  </InputLabel>
                  <Select
                    labelId='current-skillset-label'
                    id='current-skillset-select'
                    name='current_skillset'
                    value={currentSkillset}
                    label='Current Skillset'
                    onChange={handleSelectChange}
                  >
                    <MenuItem value='Beginner'>Beginner</MenuItem>
                    <MenuItem value='Painting'>Painting</MenuItem>
                    <MenuItem value='Drawing'>Drawing</MenuItem>
                    <MenuItem value='Photography'>Photography</MenuItem>
                    <MenuItem value='Ceramics'>Ceramics</MenuItem>
                    <MenuItem value='Sculpting'>Sculpting</MenuItem>
                    <MenuItem value='Printmaking'>Printmaking</MenuItem>
                    <MenuItem value='Graffiti'>Graffiti</MenuItem>
                    <MenuItem value='Fashion Design'>Fashion Design</MenuItem>
                    <MenuItem value='Filmmaking'>Filmmaking</MenuItem>
                    <MenuItem value='Digital Artistry'>
                      Digital Artistry
                    </MenuItem>
                  </Select>
                </FormControl>
              </aside>

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
    </div>
  );
}
