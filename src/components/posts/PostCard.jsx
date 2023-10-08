import {Card, CardContent, CardOverflow, AspectRatio, Typography} from '@mui/joy';
import './PostCard.css';

export default function PostCard({post}) {
  //console.log(post)
  //const createdAt = new Date(post.created_at);

  //const formattedDate = `${createdAt.toLocaleDateString()}`;

    return (
        <Card component='li' variant='solid' sx={{ height: 119, minWidth: '11vw', maxWidth: '11vw', backgroundColor: '#f8f8f8', cursor: 'pointer' }}  >
            <CardOverflow sx={{ height: '88px' }}>
              <AspectRatio ratio='2'>
                {
                  post &&
                  <img loading='lazy' src={post.thumbnail} />
                }
              </AspectRatio>
            </CardOverflow>
                <CardContent >
                <div className='card-content-info'>
                <Typography style={{fontSize:"17px"}} level='title-sm' sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}> {post?.title} </Typography>
                <p className='post-category' style={{fontSize:"15px"}}> {post?.category} </p>
                <p className='created-by' style={{fontSize:"13px"}}>By: {post?.created_by}</p>
                </div>
                </CardContent>
        </Card>
    )
}
