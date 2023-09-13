import './toolsCard.css'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function ToolsCard(props) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="src/assets/cameraImg.png" //add in img from data
          alt="item thumbnail"  //add in name from data
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tool Item Name
          </Typography>
          <Typography>
            $15,000
          </Typography>
          <Typography variant="body2" color="text.secondary">
            User inputted description of tool listing.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}