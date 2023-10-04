import {useState, useEffect, lazy} from 'react';
import {useNavigate, useLocation} from 'react-router';
import {v4 as uuid} from 'uuid';
import axios from 'axios';

import CatCarousel from '../../components/carousels/CatCarousel';
import Assesment from '../../components/assesment/Assesment';
import PostCard from '../../components/posts/PostCard';
import ToolsCard from '../../components/tools/ToolsCard';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Card} from '@mui/joy';
import './home.css';

const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function Home({
  user,
  dataLoader,
  ArtistsGraphic,
  postsCategorized,
  updateUser,
  addToCart
}) {
  const navigate = useNavigate();
  const location = useLocation()
  const [assesmentModalOpen, setAssesmentModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentInterestPost, setCurrentInterestPost] = useState(0);
  const [tools, setTools] = useState([]);
  const [currentHobbyPost, setCurrentHobbyPost] = useState(0);
  const [currentInterestTool, setCurrentInterestTool] = useState(0); 
  const [currentHobbyTool, setCurrentHobbyTool] = useState(0);
  const [tab, setTab] = useState(false);
  let visibleInterestPosts = [];
  let visibleCurrentHobbyPosts = [];
  let visibleInterestTools = [];
  let visibleCurrentHobbyTools = [];

  useEffect(() => {
    
    axios.get(`${API}/tools`).then(response => {
      const allTools = response.data;
      setTools(allTools);
    })
    .catch(error => console.error('catch', error));
  }, []);

 
  useEffect(()=>{
    if(location.state){
      window.scrollTo({
        top:800,
        behavior:'smooth'
      })
        setSelectedCategory(location.state.category)
    }
  }, [location.state])
  if (!dataLoader) {
    for (let i = 0; i < 5; i++) {
      const currentHobbyIndex = user.current_skillset === 'Beginner' 
      ? (currentHobbyPost + i) % (postsCategorized.Photography ? postsCategorized.Photography.length : 0)
      : (currentHobbyPost + i) % (postsCategorized[user.current_skillset] ? postsCategorized[user.current_skillset].length : 0);
        
      const currentInterestIndex = user.learning_interest === 'Unsure' 
      ? (currentInterestPost + i) % (postsCategorized.Painting ? postsCategorized.Painting.length : 0)
      : (currentInterestPost + i) % (postsCategorized[user.learning_interest] ? postsCategorized[user.learning_interest].length : 0);

      const currentHobbyToolIndex = user.current_skillset === 'Beginner'
      ? (currentHobbyTool + i) % (tools.filter(tool => tool?.category === 'Photography').length)
      : (currentHobbyTool + i) % (tools.filter(tool => tool?.category === user.current_skillset).length);
        
      const currentInterestToolIndex = user.learning_interest === 'Unsure'
      ? (currentInterestTool + i) % (tools.filter(tool => tool?.category === 'Painting').length)
      : (currentInterestTool + i) % (tools.filter(tool => tool?.category === user.learning_interest).length);

      if (user.current_skillset === 'Beginner') {
        visibleCurrentHobbyPosts.push(postsCategorized.Photography[currentHobbyIndex]);
        visibleCurrentHobbyTools.push(tools.filter(tool => tool?.category === 'Photography')[currentHobbyToolIndex]);
      } else {
        visibleCurrentHobbyPosts.push(postsCategorized[user.current_skillset][currentHobbyIndex]);
        visibleCurrentHobbyTools.push(tools.filter(tool => tool?.category === user.current_skillset)[currentHobbyToolIndex]);
      }
        
      if (user.learning_interest === 'Unsure') {
        visibleInterestPosts.push(postsCategorized.Painting[currentInterestIndex]);
        visibleInterestTools.push(tools.filter(tool => tool?.category === 'Painting')[currentInterestToolIndex]);
      } else {
        visibleInterestPosts.push(postsCategorized[user.learning_interest][currentInterestIndex]);
        visibleInterestTools.push(tools.filter(tool => tool?.category === user.learning_interest)[currentInterestToolIndex]);
      }        
    }
  }  

  return (
    <div className='home-page'>
     
      <div className='home-header'>
      <h2 className='header-h2'>
          {' '}
          Ignight Your Creativity, Equip Your Creativity{' '}
      </h2>
      <br />
      <img src={ArtistsGraphic} className='artistsGraphic' loading='lazy' />
      </div>
      <div className='assesement-sect'>
      </div>
      <br />
      <main>
        <div className='post-cta-sect'>
          {/* <h3> Connect & Exchange: Share Knowledge or Supplies </h3> */}
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
                    No matter your level, you can inspire and empower fellow
                    creatives. Post tutorials, guides, and classes.{' '}
                  </p>
                  <button
                    className='cta-btn'
                    onClick={() => navigate(`/${user.username}/post/new`)}
                  >
                    {' '}
                    Make a Post{' '}
                  </button>
                </Card>
              </div>
              {user.learning_interest === 'Unsure' && user.current_skillset === 'Beginner' ? (
          <div className='post-cta'>
            <Card className='overlay-card' sx={{backgroundColor: 'rgba(209, 196, 233, 0.75)'}}>
            <h4 className='home-h4'> Let's Get Personal </h4>
            <p className='post-cta-p'>
              {' '}
              Take our quick assesment for a better curated homepage{' '}
            </p>
            <button
              className='cta-btn'
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
            </Card>
          </div>
        ) : null}
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
                    Make an item listing{' '}
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
        <CatCarousel setSelectedCategory={setSelectedCategory} />
        <br />
        <div className='selected-cat-sect' id='category-nav'>
          {selectedCategory ? <h3> {selectedCategory} </h3> : null}
          <br />
          <div className='selected-posts'>
            {selectedCategory && !dataLoader && selectedCategory.length > 1 //
              ? postsCategorized[selectedCategory].map((post) => {
                  return (
                  <div onClick={() => navigate(`/posts/${post.post_id}`)} key={post.post_id}>
                  <PostCard post={post} />
                  </div>
                  )
                })
              : null}
          </div>
        </div>
        {/* <div /> */}
        {/* <br /> */}
        <div className='curated-posts-sect'>
          <h4 className='curations-h4'> Curations </h4>
          <aside>
            <button className={tab ? 'view-tab' : 'view-tab selected'} onClick={() => setTab(false)} style={{ cursor: 'pointer' }}> Posts </button>
            <button className={!tab ? 'view-tab' : 'view-tab selected'} onClick={() => setTab(true)} style={{ cursor: 'pointer' }}> Tools </button>
          </aside>
          {
            !tab ? (
            <>
            <div className='user-current-hobby-posts'>
            <h4 className='main-h4'> {user.current_skillset === 'Beginner' ? 'Photography' : user.current_skillset} </h4>
            <div className='posts-slider-container'>
              <button
                className='arrow'
                onClick={() => user.current_skillset === 'Beginner' ? setCurrentHobbyPost(prevPost => prevPost === 0 ? postsCategorized.Photography.length - 1 : prevPost - 1) :
                  setCurrentHobbyPost(prevPost =>
                    prevPost === 0
                      ? postsCategorized[user.current_skillset].length - 1
                      : prevPost - 1
                  )
                }
              >
                {' '}
                <ArrowBackIosIcon />{' '}
              </button>
              {visibleCurrentHobbyPosts.map(post => {
                return (
                <div onClick={() => navigate(`/post/${post?.post_id}`)} key={post?.post_id} >
                <PostCard post={post} />
                </div>
                )
              })}
              <button
                className='arrow'
                onClick={() => user.current_skillset === 'Beginner' ? setCurrentHobbyPost(prevPost => prevPost === 0 ? postsCategorized.Photography.length - 1 : prevPost + 1) :
                  setCurrentHobbyPost(prevPost =>
                    prevPost ===
                    postsCategorized[user.current_skillset].length - 1
                      ? 0
                      : prevPost + 1
                  )
                }
              >
                {' '}
                <ArrowForwardIosIcon />{' '}
              </button>
            </div>
            <br />
          </div>
          <br />
          <div className='user-interest-posts'>
            <h4 className='main-h4'> {user.learning_interest === 'Unsure' ? 'Painting' : user.learning_interest} </h4>
            <div className='posts-slider-container'>
              <button
                className='arrow'
                onClick={() => user.learning_interest === 'Unsure' ? setCurrentInterestPost(prevPost => prevPost === 0 ? postsCategorized.Painting.length - 1 : prevPost - 1) :
                  setCurrentInterestPost(prevPost => 
                    prevPost === 0
                      ? postsCategorized[user.learning_interest].length - 1
                      : prevPost - 1
                  )
                }
              >
                {' '}
                <ArrowBackIosIcon />{' '}
              </button>
              {visibleInterestPosts.map(post => {
                // console.log(visibleInterestPosts)
                // console.log(post)
                return (
                <div onClick={() => navigate(`/post/${post?.post_id}`)} key={post?.post_id} >
                <PostCard post={post} />
                </div>
                )
              })}
              <button
                className='arrow'
                onClick={() => user.learning_interest === 'Unsure' ? setCurrentInterestPost(prevPost => prevPost === 0 ? postsCategorized.Painting.length - 1 : prevPost + 1) :
                  setCurrentInterestPost(prevPost =>
                    prevPost ===
                    postsCategorized[user.learning_interest].length - 1
                      ? 0
                      : prevPost + 1
                  )
                }
              >
                {' '}
                <ArrowForwardIosIcon />{' '}
              </button>
            </div>
            <br />
          </div>
          </>
          ) : (
          <>   
          <br />         
          <div className='tools-sect'>
          <h4 className='main-h4'> {user.current_skillset === 'Beginner' ? 'Photography' : user.current_skillset} </h4>
            <div className='posts-slider-container'>
              {user.current_skillset === 'Beginner' && tools ? (tools.filter((tool) => tool?.category === 'Photography').length > 5 ? (<button className='arrow'> <ArrowBackIosIcon /> </button>) : null) : tools && user.current_skillset ? (tools.filter((tool) => tool?.category === user.current_skillset).length > 5 ? (<button className='arrow'> <ArrowBackIosIcon /> </button>) : null) : null}
              {
                visibleCurrentHobbyTools.map((tool, i) => (
                  <div style={{ cursor: 'pointer'}} onClick={() => navigate(`/tools/${tool?.tool_id}`)}  >
                    <ToolsCard addToCart={addToCart} tool={tool} />
                  </div>
                ))
              }
              {user.current_skillset === 'Beginner' && tools ? (tools.filter((tool) => tool?.category === 'Photography').length > 5 ? (<button className='arrow'> <ArrowForwardIosIcon /> </button>) : null) : tools && user.current_skillset ? (tools.filter((tool) => tool?.category === user.current_skillset).length > 5 ? (<button className='arrow'> <ArrowForwardIosIcon /> </button>) : null) : null}
            </div>
            </div>
            <br />
            <div className='tools-sect'>
            <h4 className='main-h4'> {user.learning_interest === 'Unsure' ? 'Painting' : user.learning_interest} </h4>
            <div className='posts-slider-container'>
              {user.learning_interest === 'Unsure' && tools ? (tools.filter((tool) => tool?.category === 'Painting').length > 5 ? (<button className='arrow'> <ArrowBackIosIcon /> </button>) : null) : tools && user.learning_interest ? (tools.filter((tool) => tool?.category === user.learning_interest).length > 5 ? (<button className='arrow'> <ArrowForwardIosIcon /> </button>) : null) : null}
              {visibleInterestTools.map((tool, i) => (
                <div style={{ cursor: 'pointer'}} onClick={() => navigate(`/tools/${tool?.tool_id}`)} >
                  <ToolsCard addToCart={addToCart} tool={tool} />
                </div>
              ))}
              {user.learning_interest === 'Unsure' && tools ? (tools.filter((tool) => tool?.category === 'Painting').length > 5 ? (<button className='arrow'> <ArrowForwardIosIcon /> </button>) : null) : tools && user.learning_interest ? (tools.filter((tool) => tool?.category === user.learning_interest).length > 5 ? (<button className='arrow'> <ArrowForwardIosIcon /> </button>) : null) : null}
            </div>
            </div>
            </>
            )
          }
        </div>
      </main>
    </div>
  );
}