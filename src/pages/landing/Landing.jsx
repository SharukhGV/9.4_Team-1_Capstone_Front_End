import './landing.css';
import Auth from '../../components/auth/Auth';
import { useState } from 'react';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArtistsGraphic from '../../assets/artistsgraphic.jpg';
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';
import ceramicsImg from '../../assets/categoryImg/ceramicsImg.jpg';
import graffitiImg from '../../assets/categoryImg/graffitiImg.jpg';
import paintingImg from '../../assets/categoryImg/paintingImg.jpg';
import visualImg from '../../assets/categoryImg/visualImg.jpg';
import photographyImg from '../../assets/categoryImg/photographyImg.jpg';
import filmmakingImg from '../../assets/categoryImg/filmmaking.jpg';
import fashionDesignImg from '../../assets/categoryImg/fashionDesignImg.jpg';
import drawingImg from '../../assets/categoryImg/drawingImg.jpg';
import digitalArtImg from '../../assets/categoryImg/digitalArtImg.jpg';
import sculptureImg from '../../assets/categoryImg/sculptureImg.jpg';
import printmakingImg from '../../assets/categoryImg/printmakingImg.jpg';

//make the carousel a component and lazy load it, lazy load each image as well

export default function Landing() {

  const artsImgs = [
    { name: 'Ceramics', imageUrl: ceramicsImg },
    { name: 'Visual Arts', imageUrl: visualImg },
    { name: 'Photography', imageUrl: photographyImg },
    { name: 'Painting', imageUrl: paintingImg },
    { name: 'Graffiti', imageUrl: graffitiImg },
    { name: 'Filmmaking', imageUrl: filmmakingImg },
    { name: 'Fashion Design', imageUrl: fashionDesignImg },
    { name: 'Drawing', imageUrl: drawingImg },
    { name: 'Digital Art', imageUrl: digitalArtImg },
    { name: 'Sculpturing', imageUrl: sculptureImg },
    { name: 'Printmaking', imageUrl: printmakingImg },
  ] //get rid of pics once you figure out how to showcase these without using unsplash or perhaps a better option; unless allowed by unsplash ofcourse

  const [currentImg, setCurrentImg] = useState(0);

  function prevSlide() {
    setCurrentImg((prevImg) => (prevImg === 0 ? artsImgs.length - 1 : prevImg - 1));
  }

  function nextSlide() {
    setCurrentImg((prevImg) => (prevImg === artsImgs.length - 1 ? 0 : prevImg + 1));
  }

  const visibleImgs = [
    artsImgs[(currentImg - 1 + artsImgs.length) % artsImgs.length],
    artsImgs[currentImg],
    artsImgs[(currentImg + 1) % artsImgs.length],
    artsImgs[(currentImg + 2) % artsImgs.length],
    artsImgs[(currentImg + 3) % artsImgs.length],
  ];

  // const useStyles = makeStyles((theme) => ({
  //   imageContainer: {
  //     position: 'relative',
  //     maxWidth: '100%',
  //   },
  //   image: {
  //     width: '100%',
  //     height: 'auto',
  //     display: 'block',
  //   },
  //   textOverlay: {
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     background: 'rgba(0, 0, 0, 0.7)',
  //     color: 'white',
  //     padding: '10px',
  //     borderRadius: '4px',
  //   }
  // }))

    return (
        <>
        <Auth craftopiaLogo={craftopiaLogo} />
        <header>
        <div className='header-branding'>
        <img className='landing-logo' src={craftopiaLogo} alt='craftopia logo' />
        <br />
        <div className='landing-action'>  
          <div className='branding-text'>
          <h2 className='header-h2'> Ignite Your Creativity </h2>
          <h4 className='header-h4'> Explore Gear & Community to Cultivate Inspired Artistry </h4>
          <button className='join-btn'> Join The Fun </button>
          </div>
          <div>
          <img src={ArtistsGraphic} className='artists-graphic' />
          </div>
        </div>
        <br />
        </div>
        <br />
        <div className='header-bottom' />
        <br />
        </header>
        <br />
        <main>
          <div className='slider-container'>
              <button onClick={prevSlide} className='arrow'> <ArrowBackIosIcon /> </button>
            {
              visibleImgs.map(img => (
                <div className='imgDiv' key={img.name}>
                  <img src={img.imageUrl} alt={img.name} className='categoryImg' loading='lazy' />
                  <p className='img-name'> {img.name} </p>
                </div> 
              ))
            }
              <button onClick={nextSlide} className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
            {/* <h3> Top Categories </h3> */}
            <div>
                {/* top categories here */}
            </div>
        </main>
        </> 
    )
}