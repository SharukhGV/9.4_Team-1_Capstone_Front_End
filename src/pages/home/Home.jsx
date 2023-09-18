import './home.css';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router';
import axios from 'axios';
const API = import.meta.env.VITE_REACT_APP_API_URL;

import CatCarousel from '../../components/categories-carousel/CatCarousel';
import cameraImg from '../../assets/cameraImg.png';
import artistsGraphic from '../../assets/artistsgraphic.jpg';
import Assesment from '../../components/assesment/Assesment';
//import Post from '../../components/posts/Post';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  Box,
  Modal,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Input,
} from '@mui/material';
import {Card, Button} from '@mui/joy';
import {styled} from '@mui/system';

export default function Home({user}) {
  const navigate = useNavigate();
  const [postCtaCategory, setPostCtaCategory] = useState('');
  const [itemModalOpen, setItemModalOpen] = useState(false);
  const [assesmentModalOpen, setAssesmentModalOpen] = useState(false);
  const [assesmentCompleted, setAssesmentCompleted] = useState(false);
  const [file, setFile] = useState(null);
  const [post, setPost] = useState({
    title: '',
    tags: '',
    body: '',
  }); //seperate to component

  function handleFileSelection(event) {
    setFile(event.target.files[0]);
  }

  const sendToServer = async event => {
    //event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', post.title);
    formData.append('tags', post.tags);
    formData.append('body', post.body);
    formData.append('user_id', user.user_id);

    axios
      .post(`${API}/posts`, formData, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(res => console.log(res.data))
      .catch(error => console.log(error));
  };

  function previewPost() {
    sendToServer();
    //resetForm();
    navigate(`/${user.username}/post/preview`);
  }

  function resetForm() {
    setFile(null);
    setPost({
      title: '',
      tags: '',
      body: '',
    });
  } //necessary ?

  // const displayImg = () => {
  //     if (file) {
  //         setFile([...file, file]);
  //         setFile(null);
  //     }
  // }

  const stylePostModel = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: 240,
    bgcolor: '#f8f8f8',
    boxShadow: 14,
    p: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    <div>
      <br />
      <div className='home-header'>
        <h2 className='header-h2'>
          {' '}
          Ignight Your Creativity, Equip Your Creativity{' '}
        </h2>
        <br />
        <CatCarousel />
        <br />
        {!assesmentCompleted && (
          <div className='assesment-sect'>
            <h4 className='home-h4'> Let's Get Personal </h4>
            <p className='assesment-p'>
              {' '}
              Take our quick assesment for a better curated homepage{' '}
            </p>
            {/* <br /> */}
            <button
              className='take-assesment-btn'
              onClick={() => setAssesmentModalOpen(true)}
            >
              {' '}
              Take Assesment{' '}
            </button>
            <Assesment
              assesmentModalOpen={assesmentModalOpen}
              setAssesmentModalOpen={setAssesmentModalOpen}
              assesmentCompleted={assesmentCompleted}
              setAssesmentCompleted={setAssesmentCompleted}
            />
          </div>
        )}
      </div>
      <br />
      <div className='div' />
      <div className='post-cta-sect'>
        <h3> Connect & Exchange: Share Knowledge or Supplies </h3>
        <div className='content-container'>
          <img src={artistsGraphic} className='artistsGraphic' />
          <div className='post-ctas'>
            <div className='post-cta'>
              <Card
                className='overlay-card'
                sx={{backgroundColor: 'rgba(209, 196, 233, 0.75)'}}
              >
                <h4> Share Your Expertise </h4>
                <p className='post-cta-p'>
                  {' '}
                  No matter your level, share insights. Post tutorials, guides,
                  and classes. Inspire and empower fellow creatives.{' '}
                </p>
                <button
                  className='cta-btn'
                  onClick={() => navigate('/:username/post/new')}
                >
                  {' '}
                  Make a Post{' '}
                </button>
              </Card>
            </div>
            <div className='post-cta'>
              <Card
                className='overlay-card'
                sx={{backgroundColor: 'rgba(209, 196, 233, 0.75)'}}
              >
                <h4> Trade Your Treasures </h4>
                <p className='post-cta-p'>
                  {' '}
                  Give new life to neglected supplies. Exchange for fresh
                  inspiration. Trade and discover possibilities.{' '}
                </p>
                <button
                  className='cta-btn'
                  onClick={() => setItemModalOpen(true)}
                >
                  {' '}
                  Publish an Item{' '}
                </button>
                <Modal
                  open={itemModalOpen}
                  onClose={() => setItemModalOpen(false)}
                >
                  <Box sx={stylePostModel}>
                    <button onClick={() => setItemModalOpen(false)}>
                      {' '}
                      &times;{' '}
                    </button>
                    <Input placeholder='Name' />
                    <FormControl variant='standard' sx={{m: 1, width: 300}}>
                      <InputLabel sx={{fontFamily: 'Lato', marginLeft: '7px'}}>
                        {' '}
                        Item Category{' '}
                      </InputLabel>
                      <Select
                        value={postCtaCategory}
                        onChange={event =>
                          setPostCtaCategory(event.target.value)
                        }
                      >
                        <MenuItem value='Photography'> Photography </MenuItem>
                        <MenuItem value='Filmmaking'> Filmmaking </MenuItem>
                        <MenuItem value='Digital Arts'> Digital Arts </MenuItem>
                        <MenuItem value='Ceramics'> Ceramics </MenuItem>
                        <MenuItem value='Drawing'> Drawing </MenuItem>
                        <MenuItem value='Sculpture'> Sculpture </MenuItem>
                        <MenuItem value='Printmaking'> Printmaking </MenuItem>
                        <MenuItem value='Painting'> Painting </MenuItem>
                        <MenuItem value='Fashion Design'>
                          {' '}
                          Fashion Design{' '}
                        </MenuItem>
                        <MenuItem value='Graffiti'> Graffiti </MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl variant='standard' sx={{m: 1, width: 340}}>
                      <InputLabel sx={{fontFamily: 'Lato', marginLeft: '7px'}}>
                        {' '}
                        Willing to trade for items in these categories:{' '}
                      </InputLabel>
                      <Select
                        value={postCtaCategory}
                        onChange={event =>
                          setPostCtaCategory(event.target.value)
                        }
                      >
                        <MenuItem value='Photography'> Photography </MenuItem>
                        <MenuItem value='Filmmaking'> Filmmaking </MenuItem>
                        <MenuItem value='Digital Arts'> Digital Arts </MenuItem>
                        <MenuItem value='Ceramics'> Ceramics </MenuItem>
                        <MenuItem value='Drawing'> Drawing </MenuItem>
                        <MenuItem value='Sculpture'> Sculpture </MenuItem>
                        <MenuItem value='Printmaking'> Printmaking </MenuItem>
                        <MenuItem value='Painting'> Painting </MenuItem>
                        <MenuItem value='Fashion Design'>
                          {' '}
                          Fashion Design{' '}
                        </MenuItem>
                        <MenuItem value='Graffiti'> Graffiti </MenuItem>
                      </Select>
                    </FormControl>
                    <Button
                      component='label'
                      startDecorator={<img src={cameraImg} width='30px' />}
                      size='small'
                      sx={{backgroundColor: 'white'}}
                    >
                      <VisuallyHiddenInput type='file' />
                    </Button>
                  </Box>
                </Modal>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>{/* categories generated by user interest here */}</div>
      <div>
        <p className='user-connect-p'>
          {' '}
          Meet, trade, connect with other creatives in your city{' '}
        </p>
        <button className='arrow'>
          {' '}
          <ArrowBackIosIcon />{' '}
        </button>
        {/* user info from dummy accounts here */}
        <button className='arrow'>
          {' '}
          <ArrowForwardIosIcon />{' '}
        </button>
      </div>
    </div>
  );
}

//first lets make the posts and that way we can add the file to the serve once the post is made?
