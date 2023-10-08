import {useLocation} from 'react-router';
import {useState} from 'react';
import PostCard from './PostCard';

export default function Posts({posts}) {
  const location = useLocation();
  const {state} = location;

  //add filtering based on different things

  return (
    <div>
      <br />
      <main className='selected-posts'>
        <br />
        {posts.map(post => {
          if (post.category === state.category) {
            return <PostCard post={post} />;
          } else if (state.category === 'All') {
            return <PostCard post={post} />;
          }
        })}
      </main>
    </div>
  );
}
