import { useLocation, useNavigate } from "react-router";

export default function PostPreview() {
    const { state } = useLocation();
    const navigate = useNavigate();
    
  return (
    <div>
        {/* <div>
            <button onClick={() => navigate(-1, { state })} > Back To Editing </button>
        </div> takes back to empty editing page but removes inputs, needs
        to save inputs */}
      <h3> {state.title} </h3>
      <p> {state.category} </p>
      <div>
        {state.body}
      </div>
      {/* <img src={state.file} /> */}
      <button> Post </button>
    </div>
  );
}
