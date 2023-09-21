'./NewPost.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router';

import {
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
} from '@mui/material';
import { styled } from '@mui/system';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import placeholderImg from '../../assets/placeholder-img.jpeg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { Textarea, Card, Button, CardCover, CardContent, Modal, Sheet, ModalDialog, Typography } from '@mui/joy';

const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function NewPost({ user }) {
  const navigate = useNavigate();
  const [currentPlaceholder, setCurrentPlaceholder] = useState(0);
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [post, setPost] = useState({
    created_by:user.username,
    title: '',
    category: '',
    body: '',
    user_id: user.user_id,
  });

  function handleFileSelection(event) {
    const newSelectedFiles = [...files];
    setSelectedFile(event.target.files[0])
    newSelectedFiles.push(event.target.files[0]);
    setFiles(newSelectedFiles); 
    
    //addPlaceHolder();
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

  const sendToServer = async event => {
    event.preventDefault(); 
    const formData = new FormData();
    files.forEach((file, index) => {
      if (file) {
        formData.append(`file-${index}`, file);
      }
    })//must be sent as array
    //does this work for the backend ?
    // formData.append('files', files); 
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
      <main>
        <h4> Share Your Expertise </h4>
        <p> No matter your level, you can inspire and empower fellow creatives. Post tutorials, guides, and classes. </p>
      <Input
        placeholder='Title'
        focused
        onChange={(event) => setPost({ ...post, title: event.target.value })}
      />
      {/* <br /> */}
      <div className='content-sect'>
        <div>
          <Button component='label' variant='contained' href='#file-upload' accept='image/*'>
            <VisuallyHiddenInput type='file' onChange={handleFileSelection} />
            <Card component='li'>
              <CardCover>
                {//maybe the issue is that it should be looking fo rlength ? 
                selectedFile ? (
                  <div>
                    <img src={URL.createObjectURL(selectedFile)} className='img' />
                    {/* <img src={URL.createObjectURL(files[currentPlaceholder])} loading='lazy' /> */}
                    {/* <button onClick={() => removePlaceholder(currentPlaceholder)}> Remove </button> */}
                  </div>
                ) : (
                  <img src={placeholderImg} loading='lazy' className='img' />
                )}
              </CardCover>
              
            </Card>
          </Button>
        </div>
        {/* <button className='arrow'
        //  onClick={nextSlide}
         >
          <KeyboardArrowDownIcon fontSize='large' />
        </button> */}
      <div>
      <Textarea
        className='textarea'
        minRows={11}
        sx={{width: '94%'}}
        placeholder='Share your creative know-how...'
        onChange={event => setPost({...post, body: event.target.value})}
      />
      </div>
      </div>
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
          <button className='preview-btn' onClick={() => setOpenPreview(true)}
          // onClick={() => navigate(`/:username/post/preview`,
          // { state: { title: post.title, category: post.category, body: post.body }})}
          >
            {' '}
            Preview{' '}
            {/* onclick modal pop up */}
          </button>
          <button className='post-btn' onClick={sendToServer} >
            {' '}
            Post{' '}
          </button>
        </div>
      </div>
      <div className='preview-modal'>
        <Modal open={openPreview} onClose={() => setOpenPreview(false)}>
          <ModalDialog layout='fullscreen' >
            <div className='content-preview'>
              <Typography> {post.title} </Typography>
          
            <div>
            <p> {post.category} </p>
            <img src={selectedFile ? URL.createObjectURL(selectedFile) : null} />
            <p> {post.body} </p>
            </div>
            </div>
          </ModalDialog>
        </Modal>
      </div>
      </main>
    </div>
  );
}