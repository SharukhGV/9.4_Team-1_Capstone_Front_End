import {Card, CardCover, CardContent, CardOverflow, Divider, AspectRatio, Typography} from '@mui/joy';
//import PostCard

export default function PostsCarousel({post,i}) {

    return (
        <>
        <Card component='li' variant='solid' key={`post-${i}`} sx={{ height: 119 }}  >
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
        </>
    )
}