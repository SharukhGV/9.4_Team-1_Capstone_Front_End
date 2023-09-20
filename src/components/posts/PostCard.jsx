// import "./postsCard.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea, CardActions} from '@mui/material';
// key={individualpost.id} name={individualpost.name_posts} description={individualpost.description} price={individualpost.price} quantity={individualpost.stock_quantity} condition={individualpost.item_condition} thumbnail={individualpost.thumbnail} userid={individualpost.user_id} index={index}
function PostsCard({post}){
  // createdTime,
  // thumbnail,
  // body,
  // tags,
  // title,
  // edited,
  // index,
  // inKEY,
// }) {
  return (
      <Card sx={{maxWidth:'15vw',minWidth:'15vw'}}>
        <CardActionArea sx={{maxHeight:'20vw'}}>
          <CardMedia
            component='img'
            height='140'
            image={post.thumbnail} //add in img from data
            alt='item thumbnail' //add in name from data
          />
          <CardContent>
            <Typography gutterBottom variant='h6' component='h6'>
              <strong>Title:</strong>
              {post.title}
            </Typography>

            <Typography >
              {/* <strong>created@:</strong> */}
              {post.created_at}
            </Typography>

            <Typography>
              <strong>created by</strong>
              {post.created_by}
            </Typography>

            <Typography>
              {/* {edited}?<span> </span> :{' '}
              <span>
                <strong>edited:</strong>
                {edited}
              </span> */}
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              <strong>tags:</strong>
              {post.category}
            </Typography>

            <Typography variant='body2' color='text.secondary'>
              {/* <strong>Body:</strong> */}
              {/* {post.body} */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size='small' color='warning'>
            Edit
          </Button>
        </CardActions>
      </Card>
  );
}
export default PostsCard;
