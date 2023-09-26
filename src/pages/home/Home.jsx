import {useState} from 'react';
import {useNavigate} from 'react-router';
import {v4 as uuid} from 'uuid'
import CatCarousel from '../../components/carousels/CatCarousel';
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
  import './home.css';
  
export default function Home({user, userHobbyInterest, dataLoader, setUserHobbyInterest, userCurrentHobby, setUserCurrentHobby, ArtistsGraphic, postsCategorized}) {
  const navigate = useNavigate();
  const [assesmentModalOpen, setAssesmentModalOpen] = useState(false);
  const [assesmentCompleted, setAssesmentCompleted] = useState(false);
  const [currentInterestPost, setCurrentInterestPost] = useState(0);
  const [currentHobbyPost, setCurrentHobbyPost] = useState(0);
  let visibleInterestPosts = [];
  let visibleCurrentHobbyPosts = [];

  console.log(user)

  if (dataLoader === false) {
    for (let i = 0; i < 5; i++) {
      const currentHobbyIndex = (currentHobbyPost + i) % postsCategorized[userCurrentHobby].length;
      const currentInterestIndex = (currentInterestPost + i) % postsCategorized[userHobbyInterest].length;
      visibleCurrentHobbyPosts.push(postsCategorized[userCurrentHobby][currentHobbyIndex]);
      visibleInterestPosts.push(postsCategorized[userHobbyInterest][currentInterestIndex]);
    }
  }

  return (
    <div className='home-page'>
      <br />
      <div className='home-header'>
        <img src={ArtistsGraphic} className='artistsGraphic' />
        <h2 className='header-h2'>
          {' '}
          Ignight Your Creativity, Equip Your Creativity{' '}
        </h2>
      </div>
      <div className='assesement-sect'>
        {!user.learning_interest || !user.current_skillset ? (
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
              updateUser={updateUser}
              user={user}
            />
          </div>
        ) : null}
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
      <br />
      <div className='curated-posts-sect'>
        {/* <h2>  </h2> */}
        <div className='user-current-hobby-posts'>
          <h4> {userCurrentHobby} </h4>
          <div className='posts-slider-container'>
            <button className='arrow' onClick={() => setCurrentHobbyPost(prevPost => prevPost === 0 ? postsCategorized[userCurrentHobby].length - 1 : prevPost - 1)}> <ArrowBackIosIcon /> </button>
          {
            visibleCurrentHobbyPosts.map((post, i) => {
              return (
                <PostCard post={post} />
              )
            })
          }
          <button className='arrow' onClick={() => setCurrentHobbyPost(prevPost => prevPost === postsCategorized[userCurrentHobby].length - 1 ? 0 : prevPost + 1)}> <ArrowForwardIosIcon /> </button>
          </div>
        </div>
        <br />
        <div className='user-interest-posts'>
          <h4> {userCurrentHobby} </h4>
          <div className='posts-slider-container'>
          <button className='arrow' onClick={() => setCurrentInterestPost(prevPost => prevPost === 0 ? postsCategorized[userHobbyInterest].length - 1 : prevPost - 1)}> <ArrowBackIosIcon /> </button>
          {
            visibleInterestPosts.map((post, i) => {
              return (
                <PostCard post={post} />
              )
            })
          }
          <button className='arrow' onClick={() => setCurrentInterestPost(prevPost => prevPost === postsCategorized[userHobbyInterest].length - 1 ? 0 : prevPost + 1)}> <ArrowForwardIosIcon /> </button>
          </div>
        </div>
        </div>
        <div>
          {/* categories generated by user interest here  as well as user current hobby*/}
        </div>
      </main>
    </div>
  );
}
