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
      component='li'
      variant='solid'
      sx={{
        height: 119,
        minWidth: '11vw',
        maxWidth: '11vw',
        backgroundColor: '#f8f8f8',
      }}
    >
      <CardOverflow sx={{height: '88px'}}>
        <AspectRatio ratio='2'>
          <img loading='lazy' src={tool?.thumbnail}/>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
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
            <div style={{fontSize:'17px'}}>{tool?.name}</div>{' '}
          </Typography>
          <p style={{fontSize:'15px'}} className='post-category'> ${tool?.price} </p>
          <p style={{fontSize:'13px'}} className='created-by'>By: {tool?.created_by}</p>
        </div>
      </CardContent>
    </Card>
  );
}
