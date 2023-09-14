// import "./postsCard.css";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// key={individualpost.id} name={individualpost.name_posts} description={individualpost.description} price={individualpost.price} quantity={individualpost.stock_quantity} condition={individualpost.item_condition} thumbnail={individualpost.thumbnail} userid={individualpost.user_id} index={index}
function PostsCard({
  createdTime,
  thumbnail,
  body,
  tags,
  title,
  edited,
  index,
  inKEY,
}) {
  return (
    <span key={inKEY}>
      <Card sx={{ maxWidth: 250 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={thumbnail} //add in img from data
            alt="item thumbnail" //add in name from data
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <strong>Title:</strong>
              {title}
            </Typography>

            <Typography>
              <strong>created@:</strong>
              {createdTime}
            </Typography>

            <Typography>
              {edited}?<span> </span> :{" "}
              <span>
                <strong>edited:</strong>
                {edited}
              </span>
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <strong>tags:</strong>
              {tags}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              <strong>Body:</strong>
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </span>
  );
}
export default PostsCard;
