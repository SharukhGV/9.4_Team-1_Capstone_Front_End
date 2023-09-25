import {Card, CardCover, CardContent, CardOverflow, Divider, AspectRatio, Typography} from '@mui/joy';
// import "./postsCard.css";

export default function PostCard({post}) {

    return (
        <Card component='li' variant='solid' sx={{ height: 119, minWidth: '11vw', maxWidth: '11vw' }}  >
            <CardOverflow>
              <AspectRatio ratio='2'>
              <img loading='lazy' />
              </AspectRatio>
                <CardContent>
                <Typography> {post.title} </Typography>
                <Typography> This is post description </Typography>
              {/* <p> {post?.title || 'Loading...'} </p> */}
              {/* <p> post description? try typography comp </p> */}
                </CardContent>
            </CardOverflow>
        </Card>
    )
}
