import './explore.css';
//docs for cards: https://mui.com/joy-ui/react-card/
// import Card from '@mui/joy/Card';
// import CardContent from '@mui/joy/CardContent';
// import CardOverflow from '@mui/joy/CardOverflow';
import {Typography} from '@mui/material';
// import {Button} from '@mui/joy';
/////////////

import { CardCover, Card, CardContent, CardOverflow, Button, AspectRatio, Divider } from '@mui/joy';

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


export default function Explore() {
    const artsImgs = [ //might need to make an array
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
        <Card
          component='li'
          // sx={{height: 40, width: '100%'}}
          key={`image-${i}`}
          variant='outlined'
        >
          <CardOverflow>
          {/* <div className='imgDiv' key={img.name}> */}
          {/* <CardCover> */}
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
          {/* </CardCover> */}
          {/* <CardContent>
            <p className='img-name'> {img.name} </p>
          </CardContent> */}
          {/* </div> */}
          {/* <Divider inset='context' /> */}
          <CardContent>
            <Typography> {img.name} </Typography>
          {/* <p className='img-name'> {img.name} </p> */}
          </CardContent>
          {/* <CardOverflow>
          <Divider orientation='vertical' />
          <p> time post was made </p>
          </CardOverflow> */}
        </Card>
        </div>
      ))}
        </div>
        </main>
        </div>
    )
}