import './toolsCard.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';

export default function ToolsCard({
  name,
  description,
  price,
  quantity,
  condition,
  thumbnail,
  userid,
  index,
  inKEY,
}) {
  return (
    <span key={inKEY}>
      <Card sx={{maxWidth: 250}}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={thumbnail} //add in img from data
            alt='item thumbnail' //add in name from data
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              <strong>Name:</strong>
              {name}
            </Typography>

            <Typography>
              <strong>Price:</strong>
              {price}
            </Typography>

            <Typography>
              <strong>Quantity:</strong>
              {quantity}
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              <strong>Description:</strong>
              {description}
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              <strong>Condition:</strong>
              {condition}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </span>
  );
}
