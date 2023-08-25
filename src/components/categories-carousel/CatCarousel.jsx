import { useState } from 'react';
import './catCarousel.css';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import ceramicsImg from '../../assets/categoryImg/ceramicsImg.jpg';
import graffitiImg from '../../assets/categoryImg/graffitiImg.jpg';
import paintingImg from '../../assets/categoryImg/paintingImg.jpg';
import photographyImg from '../../assets/categoryImg/photographyImg.jpg';
import filmmakingImg from '../../assets/categoryImg/filmmakingImg.jpg';
import fashionDesignImg from '../../assets/categoryImg/fashionDesignImg.jpg';
import drawingImg from '../../assets/categoryImg/drawingImg.jpg';
import digitalArtImg from '../../assets/categoryImg/digitalArtImg.jpg';
import sculptureImg from '../../assets/categoryImg/sculptureImg.jpg';
import printmakingImg from '../../assets/categoryImg/printmakingImg.jpg';

export default function CatCarousel() {

    const [currentImg, setCurrentImg] = useState(0);

    const artsImgs = [
        { name: 'Ceramics', imageUrl: ceramicsImg },
        { name: 'Photography', imageUrl: photographyImg }, 
        { name: 'Painting', imageUrl: paintingImg },
        { name: 'Graffiti', imageUrl: graffitiImg },
        { name: 'Filmmaking', imageUrl: filmmakingImg }, 
        { name: 'Fashion Design', imageUrl: fashionDesignImg }, //change this image
        { name: 'Drawing', imageUrl: drawingImg }, 
        { name: 'Digital Artistry', imageUrl: digitalArtImg },
        { name: 'Sculpturing', imageUrl: sculptureImg },
        { name: 'Printmaking', imageUrl: printmakingImg }, //consider replacement
    ] 

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
    )
}