import { useLocation } from "react-router";

export default function PostPreview() {

    const { state } = useLocation();

    console.log(state);

  return (
    <div>
      <h3> {state.title} </h3>
      <p> {state.category} </p>
      {/* <img src={state.file} />
      {state.file} not transferring pics search how to transfer images on state to transfer */}
      <button> Post </button>
    </div>
  );
}
