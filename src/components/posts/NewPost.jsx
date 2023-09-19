import {Textarea, Card, Button} from '@mui/joy';
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
} from '@mui/material';
import {useState} from 'react';
import cameraImg from '../../assets/cameraImg.png';
import {styled} from '@mui/system';
import axios from 'axios';
import {useNavigate} from 'react-router';
const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function NewPost({user}) {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [post, setPost] = useState({
    title: '',
    category: '',
    body: '',
  });

  function handleFileSelection(event) {
    setFile(event.target.files[0]); //set to inline
  }

  const sendToServer = async event => {
    event.preventDefault(); 
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', post.title);
    formData.append('category', post.category);
    formData.append('body', post.body);
    formData.append('user_id', user.user_id);

    axios
      .post(`${API}/posts`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(res => {
        console.log(res.data);
        navigate(`/${user.username}/post/${res.data.createdPost.post_id}`, { state: { title: post.title, category: post.category, body: post.body, file: file }});
      })
      .catch(error => console.log(error));
  };

  //console.log(post);

  const VisuallyHiddenInput = styled('input')`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;

  return (
    <div>
      <Input
        placeholder='Title'
        focused
        onChange={event => setPost({...post, title: event.target.value})}
      />
      {/* <br /> */}
      <Textarea
        minRows={19}
        sx={{width: '100%'}}
        placeholder='Share your creative know-how...'
        onChange={event => setPost({...post, body: event.target.value})}
        startDecorator={
          <div>
            <Button
              component='label'
              variant='contained'
              href='#file-upload'
              startDecorator={<img src={cameraImg} width='30px' />}
              size='small'
              sx={{backgroundColor: 'white'}}
            >
              <VisuallyHiddenInput
                multiple
                type='file'
                name='file'
                onChange={handleFileSelection}
              />
            </Button>
          </div>
        }
      />
      <div>
        <FormControl variant='standard' sx={{minWidth: 170}}>
          <InputLabel sx={{fontFamily: 'Lato'}}> Category </InputLabel>
          <Select
            onChange={event => setPost({...post, category: event.target.value})}
          >
            <MenuItem value=''> Category </MenuItem>
            <MenuItem value='Photography'> Photography </MenuItem>
            <MenuItem value='Filmmaking'> Filmmaking </MenuItem>
            <MenuItem value='Digital Arts'> Digital Arts </MenuItem>
            <MenuItem value='Ceramics'> Ceramics </MenuItem>
            <MenuItem value='Drawing'> Drawing </MenuItem>
            <MenuItem value='Sculpture'> Sculpture </MenuItem>
            <MenuItem value='Printmaking'> Printmaking </MenuItem>
            <MenuItem value='Painting'> Painting </MenuItem>
            <MenuItem value='Fashion Design'> Fashion Design </MenuItem>
            <MenuItem value='Graffiti'> Graffiti </MenuItem>
          </Select>
        </FormControl>
        <div className='bottomRight-actionBtns'>
          <button className='preview-btn' 
          onClick={() => navigate(`/:username/post/preview`,
          { state: { title: post.title, category: post.category, body: post.body, file: file }})}>
            {' '}
            Preview{' '}
          </button>
          <button className='post-btn' onClick={sendToServer} >
            {' '}
            Post{' '}
          </button>
        </div>
      </div>
    </div>
  );
}
