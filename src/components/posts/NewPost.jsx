import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import Add from '../../assets/add.svg';
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
  CardActionArea,
} from '@mui/material';
import {styled} from '@mui/system';
import {
  Textarea,
  Card,
  Button,
  CardCover,
  CardContent,
  Modal,
  Sheet,
  ModalDialog,
  Typography,
} from '@mui/joy';
import './NewPost.css';
import back from '../../assets/back.png';

const API = import.meta.env.VITE_REACT_APP_API_URL;

//we want to implement the about and the categories as breadcrumbs

export default function NewPost({user}) {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [openPreview, setOpenPreview] = useState(false);
  const [post, setPost] = useState({
    created_by: user.username,
    title: '',
    category: '',
    body: '',
    user_id: user.user_id,
  });

  function handleFileSelection(e) {
    setFiles([
      ...files,
      {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
      },
    ]);
  }

  const sendToServer = async event => {
    event.preventDefault();
    const formData = new FormData();
    console.log(files);
    files.forEach((file, index) => {
      if (file) {
        formData.append(`file-${index}`, file.data);
      }
    });

    formData.append('title', post.title);
    formData.append('category', post.category);
    formData.append('body', post.body);
    formData.append('user_id', post.user_id);
    formData.append('created_by', post.created_by);
    axios
      .post(`${API}/posts`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(res => {
        navigate(`/${user.username}/post/${res.data.createdPost.post_id}`);
      })
      .catch(error => console.log(error));
  };

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
    <main>
      <br />
      <h1> Share Your Expertise </h1>
      <h3>
        {' '}
        No matter your level, you can inspire and empower fellow creatives. Post
        tutorials, guides, and classes.{' '}
      </h3>
      <br />
      <div className='content-sect'>
        <aside className='post-title'>
          <Input
            placeholder='Title'
            sx={{width: '45%', alignItems: 'flex-end'}}
            //focused
            onChange={event => setPost({...post, title: event.target.value})}
          />
          <FormControl variant='standard' sx={{width: '45%'}}>
            <InputLabel sx={{fontFamily: 'Lato'}}> Category </InputLabel>
            <Select
              value={post.category}
              onChange={event =>
                setPost({...post, category: event.target.value})
              }
            >
              <MenuItem value=''> Category </MenuItem>
              <MenuItem value='Photography'> Photography </MenuItem>
              <MenuItem value='Filmmaking'> Filmmaking </MenuItem>
              <MenuItem value='Ceramics'> Ceramics </MenuItem>
              <MenuItem value='Drawing'> Drawing </MenuItem>
              <MenuItem value='Sculpture'> Sculpture </MenuItem>
              <MenuItem value='Printmaking'> Printmaking </MenuItem>
              <MenuItem value='Painting'> Painting </MenuItem>
              <MenuItem value='Fashion Design'> Fashion Design </MenuItem>
              <MenuItem value='Graffiti'> Graffiti </MenuItem>
              <MenuItem value='Digital Artistry'> Digital Artistry </MenuItem>
            </Select>
          </FormControl>
        </aside>
        <div className='post-body'>
          <Textarea
            className='textarea'
            minRows={11}
            sx={{width: '80%', marginRight: '5%', textAlign: 'left'}}
            placeholder='Share your creative know-how...'
            onChange={event => setPost({...post, body: event.target.value})}
          />
          <div className='img-slider-container'>
            {files.map((img, i) => (
              <aside key={`post-image-upload-preview${i}`}>
                <img
                  src={img.preview}
                  alt={`fig-${i}`}
                  style={{width: '100%', height: 'auto'}}
                  loading='lazy'
                />
                <p className='caption'>
                  <em>figure - {i + 1}</em>
                </p>
              </aside>
            ))}
            <Card
              sx={{
                width: '50%',
                marginRight: 'auto',
                marginLeft: 'auto',
                height: 'auto',
              }}
            >
              <CardActionArea
                sx={{width: '100%', height: 'auto'}}
                component='label'
                variant='contained'
                href='#file-upload'
              >
                <img
                  src={Add}
                  className='add-svg'
                  alt='click to add an image'
                  loading='lazy'
                />
                <VisuallyHiddenInput
                  type='file'
                  onChange={handleFileSelection}
                />
              </CardActionArea>
            </Card>
          </div>
        </div>
      <div className='post-buttons'>
        <button className='preview-btn' onClick={() => setOpenPreview(true)}>
          {' '}
          Preview
        </button>
        <button className='post-btn' onClick={sendToServer}>
          {' '}
          Post{' '}
        </button>
      </div>
      </div>
      <div className='preview-modal'>
        <Modal open={openPreview} onClose={() => setOpenPreview(false)}>
          <ModalDialog layout='fullscreen'>
            <div className='top-btns'>
              <button
                className='back-btn'
                onClick={() => setOpenPreview(false)}
              > <img src={back} className='back-img' />
                {' '}
                Back to editing{' '}
              </button>
              <button className='x' onClick={() => setOpenPreview(false)}>
                {' '}
                &times;{' '}
              </button>
            </div>
            {/* </div> */}
            <br />
            <div className='content-preview'>
              <h3> {post.title} </h3>
              <p> {post.category} </p>
              <p style={{ fontFamily: 'Montserrat, sans serif', color: '#1A237E', fontSize: '17px' }}> By:{post.created_by} </p>
              {/* <img src={URL.createObjectURL(selected)} /> */}
              <p> {post.body} </p>
              <div>
                {/* {
                files && files.length > 0 ? files.map(file => (
                  <img src={URL.createObjectURL(file)} />
                ) 
                ) : null
              } */}
              </div>
            </div>
            <button className='preview-post-btn' onClick={sendToServer}>
              {' '}
              Post{' '}
            </button>
          </ModalDialog>
        </Modal>
      </div>
    </main>
  );
}
