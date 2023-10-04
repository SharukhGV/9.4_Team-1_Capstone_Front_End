import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
const API = import.meta.env.VITE_REACT_APP_API_URL;
import './ToolsUserDetails.css';
import { Divider } from '@mui/material';
import back from '../../assets/back.png';

function ToolsUserDetails({
  removeItem,
  addToCart,
  // name,
  user,
  // description,
  // price,
  // quantity,
  // condition,
  // thumbnail,
  // userid,
  // index,
  // username,
  inKEY,
}) {
  //   const [cart, setCart] = useState([]);
  //   function addToCart(item) {
  //     setCart(prevCart => [...prevCart, item]);
  // }
  const [thecolor, setthecolor] = useState('black');
  const {id} = useParams();
  const [tools, setTools] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/tools/one/${id}`)
      .then(res => {
        //console.log(res.data);
        setTools(res.data.tool);
      })
      .catch(error => {
        console.error('There was an error fetching the tools:', error);
      });
  }, [id]);

  const deletetool = () => {
    axios
      .delete(`${API}/tools/${tools_id}/${user.user_id}`)
      .then(() => {
        navigate(`/tools`);
      })
      .catch(error => console.error(error));
  };

  //console.log(tools)

  return (
    <div className='tool-index'>
      <br />
      <button onClick={() => navigate(-1)} className='back-btn'> <img src={back} className='back-img' /> Go Back </button>
      {tools.condition && (
        <>
        <div className='tool-name'>
          <p>{tools.name}</p>
        </div>
        <br />
        {/* img here */}
        <div className='tool-desc'><p>Description: {tools.description}</p></div>
        <br />
        <div className='tool-info'>
        <p> By: {tools.created_by} </p>
        <Divider orientation='vertical' sx={{ height: '40px' }} flexItem />
        <p>Condition: {tools.condition}</p>
        <Divider orientation='vertical' sx={{ height: '40px' }} flexItem />
        <p>price: ${tools.price} </p>
        <Divider orientation='vertical' sx={{ height: '40px' }} flexItem />
        <p>Quantity: {tools.stock} </p>
        </div>
        <br />
          <aside className='tools-action-btn'>
            <button onClick={() => addToCart(tools)} className='to-cart-btn'>Add to Cart</button>
          </aside>
        </>
      )}
    </div>
  );
}

export default ToolsUserDetails;
