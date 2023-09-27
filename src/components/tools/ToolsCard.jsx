import * as React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, CardActionArea, CardActions} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './toolsCard.css';
const API = import.meta.env.VITE_REACT_APP_API_URL;
export default function ToolsCard({tool, reloadTools}) {
  const navigate = useNavigate();
  const {username} = useParams();
  const handleDelete = () => {
    axios
      .delete(`${API}/tools/${tool.tool_id}`)
      .then(res => {
        reloadTools();
      })
      .catch(err => console.log(err));
  };
  return (
    <Card sx={{maxWidth: '15vw', minWidth: '15vw'}}>
      <CardActionArea
        sx={{maxHeight: '20vw'}}
        onClick={() => navigate(`/${username}/tools/${tool.tool_id}`)}
      >
        <CardMedia
          component='img'
          height='140'
          image={tool.thumbnail} //add in img from data
          alt='item thumbnail' //add in name from data
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='h6'>
            {tool.name}
          </Typography>

          <Typography gutterBottom variant='subtitle'>
            <strong>Sold by:</strong>
            {tool.created_by}
          </Typography>

          <Typography>
            <strong>Price:</strong>
            {tool.price}
          </Typography>

          <Typography>
            <strong>Quantity:</strong>
            {tool.stock}
          </Typography>
          <br />
          <Typography variant='body2' color='text.secondary'>
            <strong>Condition:</strong>
            {tool.condition}
          </Typography>
        </CardContent>
      </CardActionArea>

      {tool.created_by === username ? (
        <CardActions>
          <Button size='small' color='primary'>
            Add to Cart
          </Button>
          <Button onClick={handleDelete} title='small' color='error'>
            Delete
          </Button>
        </CardActions>
      ) : null}
    </Card>
  );
}
