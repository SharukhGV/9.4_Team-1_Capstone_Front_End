import './landing.css';
import Auth from '../../components/auth/Auth';
import { useState } from 'react';
//docs for cards: https://mui.com/joy-ui/react-card/ 
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArtistsGraphic from '../../assets/artistsgraphic.jpg';
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';
import ceramicsImg from '../../assets/categoryImg/ceramicsImg.jpg';
import graffitiImg from '../../assets/categoryImg/graffitiImg.jpg';
import paintingImg from '../../assets/categoryImg/paintingImg.jpg';
import visualImg from '../../assets/categoryImg/visualImg.jpg';
import photographyImg from '../../assets/categoryImg/photographyImg.jpg';
import filmmakingImg from '../../assets/categoryImg/filmmakingImg.jpg';
import fashionDesignImg from '../../assets/categoryImg/fashionDesignImg.jpg';
import drawingImg from '../../assets/categoryImg/drawingImg.jpg';
import digitalArtImg from '../../assets/categoryImg/digitalArtImg.jpg';
import sculptureImg from '../../assets/categoryImg/sculptureImg.jpg';
import printmakingImg from '../../assets/categoryImg/printmakingImg.jpg';

export default function Landing() {

  const artsImgs = [
    { name: 'Ceramics', imageUrl: ceramicsImg },
    { name: 'Visual Arts', imageUrl: visualImg },
    { name: 'Photography', imageUrl: photographyImg }, 
    { name: 'Painting', imageUrl: paintingImg },
    { name: 'Graffiti', imageUrl: graffitiImg },
    { name: 'Filmmaking', imageUrl: filmmakingImg }, 
    { name: 'Fashion Design', imageUrl: fashionDesignImg }, //change this image
    { name: 'Drawing', imageUrl: drawingImg }, 
    { name: 'Digital Art', imageUrl: digitalArtImg },
    { name: 'Sculpturing', imageUrl: sculptureImg },
    { name: 'Printmaking', imageUrl: printmakingImg }, //consider replacement
  ] 
  //double check fonts

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
        <div className='div' />
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
          <br />
          <div>
          <h3 className='top-categories-h3'> Top Categories </h3>
          <br />
          <div >
          <p className='top-category-p'> Photography </p>
          <button onClick={prevSlide} className='arrow'> <ArrowBackIosIcon /> </button>
          <button onClick={nextSlide} className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          {/* <div className='div' /> */}
          <div >
          <p className='top-category-p'> Painting </p>
          <button onClick={prevSlide} className='arrow'> <ArrowBackIosIcon /> </button>
          <button onClick={nextSlide} className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          {/* <div className='div' /> */}
          <div>
          <p className='top-category-p'> Digital Art </p>
          <button onClick={prevSlide} className='arrow'> <ArrowBackIosIcon /> </button>
          <button onClick={nextSlide} className='arrow'> <ArrowForwardIosIcon /> </button>
          </div>
          {/* <div className='div' /> */}
          </div>
          <br />
        </main>
        </> 
    )
}