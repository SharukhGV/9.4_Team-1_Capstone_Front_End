import {Typography} from '@mui/material';
import {Card, CardContent, CardOverflow, AspectRatio} from '@mui/joy';

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
import './explore.css';

export default function Explore() {
  const artsImgs = [
    //might need to make an array
    {name: 'Ceramics', imageUrl: ceramicsImg},
    {name: 'Photography', imageUrl: photographyImg},
    {name: 'Painting', imageUrl: paintingImg},
    {name: 'Graffiti', imageUrl: graffitiImg},
    {name: 'Filmmaking', imageUrl: filmmakingImg},
    {name: 'Fashion Design', imageUrl: fashionDesignImg},
    {name: 'Drawing', imageUrl: drawingImg},
    {name: 'Digital Artistry', imageUrl: digitalArtImg},
    {name: 'Sculpting', imageUrl: sculptureImg},
    {name: 'Printmaking', imageUrl: printmakingImg},
  ];

  return (
    <div>
      <h2 className='explore-h2'> Find Inspiration </h2>
      <main>
        <div className='explore-main'>
          {artsImgs.map((img, i) => (
            <div key={i} className='card'>
              <Card component='li' key={`image-${i}`} variant='outlined'>
                <CardOverflow>
                  <AspectRatio ratio='2'>
                    <img
                      src={img.imageUrl}
                      srcSet={img.imageUrl}
                      alt={img.name}
                      className='categoryImg'
                      loading='lazy'
                    />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography> {img.name} </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
