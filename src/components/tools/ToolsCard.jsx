import * as React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {Button, CardActionArea, CardActions} from '@mui/material';
import {
  Card,
  CardContent,
  CardOverflow,
  AspectRatio,
  Typography,
} from '@mui/joy';
import CardMedia from '@mui/material/CardMedia';
import './toolsCard.css';
const API = import.meta.env.VITE_REACT_APP_API_URL;

export default function ToolsCard({
  addToCart,
  tool,
  reloadTools,
  addToCartnStock,
}) {
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
    <Card
      component='div'
      variant='solid'
      sx={{
        height: 'fit-content',
        minWidth: '11vw',
        maxWidth: '11vw',
        backgroundColor: '#f8f8f8',
      }}
    >
      <CardOverflow
        sx={{height: '118px'}}
        onClick={() => navigate(`/tools/${tool?.tool_id}`)}
      >
        <AspectRatio ratio='2'>
          <img loading='lazy' src={tool?.thumbnail} />
        </AspectRatio>
      </CardOverflow>
      <CardActionArea onClick={() => navigate(`/tools/${tool?.tool_id}`)}>
        <CardContent sx={{marginTop: '5px'}}>
          <div className='card-content-info'>
            <Typography
              level='title-sm'
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {' '}
              <span style={{fontSize: '17px'}}>{tool?.name}</span>{' '}
            </Typography>
            <p style={{fontSize: '15px'}} className='post-category'>
              {' '}
              ${tool?.price}{' '}
            </p>
            <p style={{fontSize: '13px'}} className='created-by'>
              By: {tool?.created_by}
            </p>
          </div>
        </CardContent>
      </CardActionArea>
      <button onClick={() => addToCart(tool)} className='add-to-cart-btn'>
        Add to Cart
      </button>
    </Card>
  );
}
