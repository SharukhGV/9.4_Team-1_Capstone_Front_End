import './home.css';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router';
// import Container from '@mui/material';
// import CardContent from '@mui/material';

import Posts from '../../components/posts/Posts';
import Tools from '../../components/tools/Tools';

import axios from 'axios';
const API = import.meta.env.VITE_REACT_APP_API_URL;

import CatCarousel from '../../components/carousels/CatCarousel';
import cameraImg from '../../assets/cameraImg.png';
import artistsGraphic from '../../assets/artistsgraphic.jpg';
import Assesment from '../../components/assesment/Assesment';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Paper } from '@mui/material';
// import {
//   Box,
//   Modal,
//   TextField,
//   Select,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Input,
// } from '@mui/material';
import {Card, Button} from '@mui/joy';
//import {styled} from '@mui/system';

// const diagonalMask = {
//   position: 'relative',
//   overflow: 'hidden', '&::before': {
//     content: '""',
//     position: 'absolute',
//     top: '0',
//     right: '0',
//     width: '40%',
//     height: '100%',
//     backgroundColor: 'white',
//     transform: 'skew(-20deg) translateX(100%)',
//     transformOrigin: 'top left',
//   },
// };

export default function Home({user}) {
  const navigate = useNavigate();
//   const [postCtaCategory, setPostCtaCategory] = useState('');
//   const [itemModalOpen, setItemModalOpen] = useState(false);
  const [assesmentModalOpen, setAssesmentModalOpen] = useState(false);
  const [assesmentCompleted, setAssesmentCompleted] = useState(false);
  const [file, setFile] = useState(null);
  const [post, setPost] = useState({
    title: '',
    tags: '',
    body: '',
  }); 

//   function handleFileSelection(event) {
//     setFile(event.target.files[0]);
//   }

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

//   const stylePostModel = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '70%',
//     height: 240,
//     bgcolor: '#f8f8f8',
//     boxShadow: 14,
//     p: 4,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   };

//   const VisuallyHiddenInput = styled('input')`
//     clip: rect(0 0 0 0);
//     clip-path: inset(50%);
//     height: 1px;
//     overflow: hidden;
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     white-space: nowrap;
//     width: 1px;
//   `;

//STACK

  return (
    <div>
      <br />
      <div className='home-header' >
        <img src={artistsGraphic} className='artistsGraphic' />
        {/* <div className='post-cta-sect'>
        <h3> Connect & Exchange: Share Knowledge or Supplies </h3>
        <div className='content-container'>
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
                  onClick={() => navigate(`/${user.username}/post/new`)}
                  //used to :username
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
                  onClick={() => navigate(`/${user.username}/tools/new`)}
                >
                  {' '}
                  Publish an Item{' '}
                </button>
              </Card>
            </div>
          </div>
          <br />
        </div>
        <br />
      </div> */}
     
        </div>
        <h2 className='header-h2'>
          {' '}
          Ignight Your Creativity, Equip Your Creativity{' '}
        </h2>
        {/* <br /> */}
        {/* <br /> */}
        <div>
        {!assesmentCompleted && (
          <div className='assesment-sect'>
            <h4 className='home-h4'> Let's Get Personal </h4>
            <p className='assesment-p'>
              {' '}
              Take our quick assesment for a better curated homepage{' '}
            </p>
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
              user={user}
            />
          </div>
        )}
        </div>
      
      <br />
      <div className='div' />
      <main>
      <div className='post-cta-sect'>
        <h3> Connect & Exchange: Share Knowledge or Supplies </h3>
        <div className='content-container'>
          <div className='post-ctas'>
            <div className='post-cta'>
              <Card
                className='overlay-card'
                sx={{backgroundColor: 'rgba(209, 196, 233, 0.75)'}}
              >
                <h4> Share Your Expertise </h4>
                <p className='post-cta-p'>
                  {' '}
                  No matter your level, you can inspire and empower fellow creatives. Post tutorials, guides, and classes. {' '}
                </p>
                <button
                  className='cta-btn'
                  onClick={() => navigate(`/${user.username}/post/new`)}
                  //used to :username
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
                  onClick={() => navigate(`/${user.username}/tools/new`)}
                >
                  {' '}
                  Publish an Item{' '}
                </button>
              </Card>
            </div>
          </div>
          <br />
        </div>
        <br />
      </div>
      <div className='div' />
      <br />
      
      <CatCarousel />
      <div />
      <Posts />
      <Tools />
      <div>{/* categories generated by user interest here */}</div>
      {/* <div>
        <p className='user-connect-p'>
          {' '}
          Meet, trade, connect with other creatives in your city{' '}
        </p>
        <button className='arrow'>
          {' '}
          <ArrowBackIosIcon />{' '}
        </button>
        {/* user info from dummy accounts here */}
        {/* <button className='arrow'>
          {' '}
          <ArrowForwardIosIcon />{' '}
        </button>
      </div> */}
      </main>
    </div>
  );
}

