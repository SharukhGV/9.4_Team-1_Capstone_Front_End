import {useLocation} from 'react-router';

export default function Post() {

  const { state } = useLocation();

  // title: post.title,
  // category: post.category,
  // body: post.body,
  // created_at: post.created_at,
  // created_by: post.created_by,

  return (
    <>
      <h3> {state.title} </h3>
      <p> {state.category} </p>
      <div>
        {state.body}
      </div>
    </>
  );
}
