import axios from 'axios';
import {useState} from 'react';
import {useNavigate} from 'react-router';
import Add from '../../assets/add.svg'
import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
  CardActionArea,
} from '@mui/material';
import {styled} from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import placeholderImg from '../../assets/placeholder-img.jpeg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';
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
import './NewPost.css'

const API = import.meta.env.VITE_REACT_APP_API_URL;

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

    //addPlaceHolder();
  }

  const sendToServer = async event => {
    event.preventDefault();
    const formData = new FormData();
    files.forEach((file, index) => {
      if (file) {
        formData.append(`file-${index}`, file);
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
        navigate(`/${user.username}/post/${res.data.createdPost.post_id}`, {
          state: {
            title: post.title,
            category: post.category,
            body: post.body,
            file: files,
          },
        });
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
      <h1> Share Your Expertise </h1>
      <h3>
        {' '}
        No matter your level, you can inspire and empower fellow creatives. Post
        tutorials, guides, and classes.{' '}
      </h3>

      <div className='content-sect'>
        <aside className='post-title'>
          <Input
            placeholder='Title'
            sx={{width: '45%', alignItems: 'flex-end'}}
            focused
            onChange={event => setPost({...post, title: event.target.value})}
          />
          <FormControl variant='standard' sx={{width: '45%'}}>
            <InputLabel sx={{fontFamily: 'Lato'}}> Category </InputLabel>
            <Select
              onChange={event =>
                setPost({...post, category: event.target.value})
              }
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
            <h5>Add Images</h5>
            {files.map((img, i) => (
              <aside key={`post-image-upload-preview${i}`}>
                <img
                  src={img.preview}
                  alt={`fig-${i}`}
                  style={{width: '100%', height: 'auto'}}
                />
                <p className='caption'>
                  <em>figure - {i}</em>
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
                />
                <VisuallyHiddenInput
                  type='file'
                  onChange={handleFileSelection}
                />
              </CardActionArea>
            </Card>
          </div>
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
      <div className='preview-modal'>
        <Modal open={openPreview} onClose={() => setOpenPreview(false)}>
          <ModalDialog layout='fullscreen'>
            {/* <img className='logo' src={craftopiaLogo} /> */}
            {/* <div className='top-btns'> */}
            <button className='back-btn' onClick={() => setOpenPreview(false)}>
              {' '}
              Back to editing{' '}
            </button>
            <button className='x' onClick={() => setOpenPreview(false)}>
              {' '}
              &times;{' '}
            </button>
            {/* </div> */}
            <br />
            <div className='content-preview'>
              <Typography> {post.title} </Typography>
              {/* <p> {post.category} </p>
            <img src={selectedFile} />
            <p> {post.body} </p> */}
            </div>

            <button className='post-btn' onClick={sendToServer}>
              {' '}
              Post{' '}
            </button>
          </ModalDialog>
        </Modal>
      </div>
    </main>
  );
}

// function prevSlide() {
//   setCurrentPlaceholder(prevImg =>
//     prevImg === 0 ? placeholders.length - 1 : prevImg - 1
//   );
// };

// function nextSlide() {
//   setCurrentPlaceholder(prevImg =>
//     prevImg === placeholders.length - 1 ? 0 : prevImg + 1
//   );
// }

// const addPlaceHolder = () => {
//   if (files.length < placeholders.length) {
//     setFiles([...files, null]);
//   }
// }

// const removePlaceholder = (index) => {
//   const newFiles = [...files];
//   newFiles.splice(index, 1);
//   setFiles(newFiles);
// }

// function handleFileSelection(event, index) {
//   const newSelectedFiles = [...files];
//   newSelectedFiles[index] = event.target.files[0];
//   setFiles(newSelectedFiles);
//   addPlaceHolder();
// }

//apply lazyloading to images & everything possible

// const visibleImgs = [
//   placeholders[currentPlaceholder],
//   placeholders[(currentPlaceholder + 1) % placeholders.length],
//   //placeholders[(currentPlaceholder + 2) % placeholders.length],
// ];
