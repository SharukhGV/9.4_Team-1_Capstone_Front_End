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
import Assesment from '../../components/assesment/Assesment';
import PostCard from '../../components/posts/PostCard';

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
  import './home.css';
  
export default function Home({user, userHobbyInterest, setUserHobbyInterest, userCurrentHobby, setUserCurrentHobby, ArtistsGraphic, visiblePosts, nextSlide, prevSlide}) {
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

  //console.log(visiblePosts)

  return (
    <div className='home-page'>
      <br />
      <div className='home-header' >
        <img src={ArtistsGraphic} className='artistsGraphic' />
        </div>
        <h2 className='header-h2'>
          {' '}
          Ignight Your Creativity, Equip Your Creativity{' '}
        </h2>
        {/* <br /> */}
        {/* <br /> */}
        <div>
          {
            assesmentCompleted === false ? (
              <div className='assesment-sect'>
                <h4 className='home-h4'> Let's Get Personal </h4>
                <p className='assesment-p'> {' '} Take our quick assesment for a better curated homepage{' '} </p>
                <button className='take-assesment-btn' onClick={() => setAssesmentModalOpen(true)}> {' '} Take Assesment {' '} </button>
                <Assesment
                assesmentModalOpen={assesmentModalOpen}
                setAssesmentModalOpen={setAssesmentModalOpen}
                assesmentCompleted={assesmentCompleted}
                setAssesmentCompleted={setAssesmentCompleted}
                user={user}
                userHobbyInterest={userHobbyInterest}
                setUserHobbyInterest={setUserHobbyInterest} 
                userCurrentHobby={userCurrentHobby}
                setUserCurrentHobby={setUserCurrentHobby}
                />
              </div>
            ) : (
              <>
              </>
            )
          }
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
                <Button
                  className='cta-btn'
                  onClick={() => navigate(`/${user.username}/post/new`)}
                  //used to :username
                >
                  {' '}
                  Make a Post{' '}
                </Button>
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
                <Button
                  className='cta-btn'
                  onClick={() => navigate(`/${user.username}/tools/new`)}
                >
                  {' '}
                  Publish an Item{' '}
                </Button>
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
      <div className='curated-posts-sect'>
        <div className='user-interests-posts'>
          {/* {
            assesmentCompleted ? visiblePosts.map((post, i) => {
              if (post.category === userHobbyInterest) {
                return (
                  <>
                  <PostCard post={post} i={i} />
                  </>
                )
              }
            }) : visiblePosts
          } */}
        </div>
        <div className='user-current-hobby-posts'>
          {
            visiblePosts.map((post, i) => {
              if (post.category === userCurrentHobby) {
                return (
                  <>
                  <PostCard post={post} i={i} />
                  </>
                )
              }
            })
          }
        </div>
      </div>
      
      {/* <Tools /> */}
      <div>{/* categories generated by user interest here  as well as user current hobby*/}</div>
      {/* <div>
        <p className='user-connect-p'>
          {' '}
          Meet, trade, connect with other creatives in your city{' '}
        </p>
        <Button className='arrow'>
          {' '}
          <ArrowBackIosIcon />{' '}
        </Button>
        {/* user info from dummy accounts here */}
        {/* <Button className='arrow'>
          {' '}
          <ArrowForwardIosIcon />{' '}
        </Button> */}
        {/* <button className='arrow'>
          {' '}
          <ArrowForwardIosIcon />{' '}
        </button>
      </div> */}
      </main>
    </div>
  );
}

