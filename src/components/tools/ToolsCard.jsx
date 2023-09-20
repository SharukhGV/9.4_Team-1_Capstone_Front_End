import * as React from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import {Button, CardActionArea, CardActions} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './toolsCard.css';
const API = import.meta.env.VITE_REACT_APP_API_URL
export default function ToolsCard({tool,reloadTools}){
  const {username} = useParams()
  const handleDelete=()=>{
    console.log(tool.tool_id)
    axios.delete(`${API}/tools/${tool.tool_id}`)
    .then(res=>{
      reloadTools()
      console.log(res)})
    .catch(err=>console.log(err))
  }
  return (
      <Card sx={{maxWidth:'15vw',minWidth:'15vw'}}>
        <CardActionArea>
          <CardMedia
            component='img'
            height='140'
            image={tool.thumbnail} //add in img from data
            alt='item thumbnail' //add in name from data
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              <strong>Name:</strong>
              {tool.name}
            </Typography>

            <Typography>
              <strong>Price:</strong>
              {tool.price}
            </Typography>

            <Typography>
              <strong>Quantity:</strong>
              {tool.stock}
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              <strong>Description:</strong>
              {tool.description}
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              <strong>Condition:</strong>
              {tool.condition}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='primary'>
            Add to Cart
          </Button>
          <Button onClick={handleDelete} title='small' color='error'>Delete</Button>
        </CardActions>
      </Card>
  );
}
