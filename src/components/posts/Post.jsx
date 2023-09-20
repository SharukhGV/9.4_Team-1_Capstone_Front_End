import {useLocation} from 'react-router';

export default function Post() {

  const { state } = useLocation();

  return (
    <>
      <h3> {state.title} </h3>
      <p> {state.category} </p>
      <div>
        {/* <img {state.file} /> */}
        {state.body}
      </div>
    </>
  );
}
