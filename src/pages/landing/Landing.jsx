import {useState, lazy} from 'react';
import {v4 as uuid} from 'uuid'
import { Card } from '@mui/joy';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; 
const CatCarousel = lazy(() => import('../../components/carousels/CatCarousel'));
const PostCard = lazy(() => import('../../components/posts/PostCard'));
import { useNavigate } from 'react-router';
import './landing.css';

export default function Landing({setModal, ArtistsGraphic, postsCategorized, dataLoader}) {
  const navigate = useNavigate();
  const [currentFilmmakingPost, setCurrentFilmmakingPost] = useState(0);
  const [currentPaintPost, setCurrentPaintPost] = useState(0);
  const [currentPhotographyPost, setCurrentPhotographyPost] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('');
  let visibleFilmmakingPosts = []; 
  let visiblePhotographyPosts = [];
  let visiblePaintPosts = [];

  for (let i = 0; i < 5; i++) {
    const filmmakingIndex = (currentFilmmakingPost + i) % postsCategorized.Filmmaking.length;
    const photographyIndex = (currentPhotographyPost + i) % postsCategorized.Photography.length;
    const paintIndex = (currentPaintPost + i) % postsCategorized.Painting.length;
    visibleFilmmakingPosts.push(postsCategorized.Filmmaking[filmmakingIndex]);
    visiblePhotographyPosts.push(postsCategorized.Photography[photographyIndex]);
    visiblePaintPosts.push(postsCategorized.Painting[paintIndex]);  
  }

  return (
    <div className='landing'>
        <div className='header-branding'>
          {/* <Card sx={{ width: '87%' }} > */}
          <div className='landing-action'>
            <Card>
              <div className='branding-text'>
                <h2 className='header-h2'> Ignite Your Creativity </h2>
                <h4 className='header-h4'>
                  {' '}
                  Explore Gear & Community to Cultivate Inspired Artistry{' '}
                </h4>
                <button className='join-btn' onClick={() => setModal(true)}>
                  {' '}
                  Join Craftopia{' '}
                </button>
              </div>
            </Card>
            <div>
              <img src={ArtistsGraphic} className='artists-graphic' loading='lazy' />
            </div>
          </div>
          <br />
          {/* <br />
          <div className='div'> </div>
          <br /> */}
        </div>
        <br />
        <CatCarousel setSelectedCategory={setSelectedCategory} />
        <br />
      {/* <br /> */}
      <main>
        <div className='top-categories-sect'>
        {selectedCategory ? (<h3 className='top-categories-h3'> {selectedCategory} </h3>) : null}
        <br />
        <div className='selected-posts'>
        {
          selectedCategory && !dataLoader && selectedCategory.length > 1 ? //
          postsCategorized[selectedCategory].map((post, i) => {
            //console.log(post)
            return (
              <div onClick={() => navigate(`/post/${post.post_id}`, {
                state: {
                  title: post.title,
                  category: post.category,
                  body: post.body,
                  created_at: post.created_at,
                  created_by: post.created_by,
                  //file: files,
                },
              })}>
              <PostCard post={post} />
              </div>
            )
          }) 
          : null 
        }
        </div>
        <br />
        {selectedCategory ? (<> <br /> <div className='div' /> <br /> </>) : null}
        </div>
        {/* <div className='div' /> */}
        {/* <br /> */}
      <div className='top-categories-sect'>
      <h3 className='top-categories-h3'> Top Categories </h3>
      <br />
      <div className='top-category-1'>
      <h4 className='main-h4'> Photography </h4>
      <div className='posts-slider-container'>
      <button className='arrow' onClick={() => setCurrentPhotographyPost(prevPost => prevPost === 0 ? postsCategorized.Photography.length - 1 : prevPost - 1)}>{' '} <ArrowBackIosIcon />{' '} </button>
      {
        visiblePhotographyPosts.map((post) => {
          return (
            <div onClick={() => navigate(`/post/${post.post_id}`, {
              state: {
                title: post.title,
                category: post.category,
                body: post.body,
                created_at: post.created_at,
                created_by: post.created_by,
                //file: files,
              },
            })}>
            <PostCard post={post} key={uuid()}/>
            </div>
          )
        })
      }
       <button className='arrow' onClick={() => setCurrentPhotographyPost(prevPost => prevPost === postsCategorized.Photography.length - 1 ? 0 : prevPost + 1)}>
        {' '}
        <ArrowForwardIosIcon />{' '}
      </button>
      </div>
      </div>
      <div className='top-category-2'>
        <h4 className='main-h4'> Painting </h4>
        <div className='posts-slider-container'>
        <button className='arrow' onClick={() => setCurrentPaintPost(prevPost => prevPost === 0 ? postsCategorized.Painting.length - 1 : prevPost - 1)}>{' '} <ArrowBackIosIcon />{' '} </button>
        {
          visiblePaintPosts.map((post) => {
            return (
              <div onClick={() => navigate(`/post/${post.post_id}`, {
                state: {
                  title: post.title,
                  category: post.category,
                  body: post.body,
                  created_at: post.created_at,
                  created_by: post.created_by,
                  //file: files,
                },
              })}>
              <PostCard post={post} key={uuid()} />
              </div>
            )
          })
        }
        <button className='arrow' onClick={() => setCurrentPaintPost(prevPost => prevPost === postsCategorized.Painting.length - 1 ? 0 : prevPost + 1)}>
        {' '}
        <ArrowForwardIosIcon />{' '}
        </button>
        </div>
      </div>
      <div className='top-category-3'>
        <h4 className='main-h4'> Filmmaking </h4>
        <div className='posts-slider-container'>
        <button className='arrow' onClick={() => setCurrentFilmmakingPost(prevPost => prevPost === 0 ? postsCategorized.Filmmaking.length - 1 : prevPost - 1)}>{' '} <ArrowBackIosIcon />{' '} </button>
        {
          visibleFilmmakingPosts.map((post) => {
            return (
              <div onClick={() => navigate(`/post/${post.post_id}`, {
                state: {
                  title: post.title,
                  category: post.category,
                  body: post.body,
                  created_at: post.created_at,
                  created_by: post.created_by,
                  //file: files,
                },
              })}>
              <PostCard post={post} key={uuid()} />
              </div>
            )
          })
        }
        <button className='arrow' onClick={() => setCurrentFilmmakingPost(prevPost => prevPost === postsCategorized.Filmmaking.length - 1 ? 0 : prevPost + 1)}>
        {' '}
        <ArrowForwardIosIcon />{' '}
        </button>
        </div>
      </div>
      </div>
      </main>
    </div>
  );
}
