import {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import axios from 'axios';
const API = import.meta.env.VITE_REACT_APP_API_URL;
import './ToolsUserDetails.css';
import {Divider} from '@mui/material';
import back from '../../assets/back.png';
import {height} from '@mui/system';

function ToolsUserDetails({removeItem, addToCart, user}) {
  const {id} = useParams();
  const navigate = useNavigate();
  const [tools, setTools] = useState({});
  const [media, setMedia] = useState([]);
  const [stockRemaining, setStockRemaining] = useState([]);
  const [selectedImage, setSelectedImage] = useState('');

  function addToCartnStock(tools) {
    let amountStockRemaining = stockRemaining;
    amountStockRemaining === -1
      ? null
      : setStockRemaining((amountStockRemaining -= 1));

    amountStockRemaining === -1 ? null : addToCart(tools);
  }
  useEffect(() => {
    axios
      .get(`${API}/tools/one/${id}`)
      .then(res => {
        setTools(res.data.tool);
        setMedia([...res.data.media]);
        setSelectedImage(res.data.tool.thumbnail);
        setStockRemaining(res.data.tool.stock);
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

  function addToCartnStock(tools) {
    let amountStockRemaining = stockRemaining;
    amountStockRemaining === -1
      ? null
      : setStockRemaining((amountStockRemaining -= 1));

    amountStockRemaining === -1 ? null : addToCart(tools);
  }

  console.log(media);
  return (
    <div className='tool-index'>
      <br />
      <button onClick={() => navigate(-1)} className='back-btn'>
        {' '}
        <img src={back} className='back-img' /> Go Back{' '}
      </button>

      {tools.condition && (
        <div className='tool-div'>
          <div className='tool-images'>
            <div className='selected-image-div'>
              <img
                className='selected-image'
                src={selectedImage}
              />
            </div>
            <aside className='image-array-display'>
              {media.map(img => (
                <aside className='img-preview' key={uuidv4()}>
                  <img
                    className='img'
                    src={img.file_url}
                    onClick={() => setSelectedImage(img.file_url)}
                  />
                </aside>
              ))}
            </aside>
          </div>
          <br />
          <div className='tool-desc'>
            <div className='tool-name'>
              <p>{tools.name}</p>
            </div>
            <p>Description: {tools.description}</p>
            <br />
            <div className='tool-info'>
              <p> By: {tools.created_by} </p>
              <Divider orientation='vertical' sx={{height: '40px'}} flexItem />
              <p>Condition: {tools.condition}</p>
              <Divider orientation='vertical' sx={{height: '40px'}} flexItem />
              <p>price: ${tools.price} </p>
              <Divider orientation='vertical' sx={{height: '40px'}} flexItem />
              <p>Quantity: {tools.stock} </p>
            </div>
            <br />
            <aside className='tools-action-btn'>
              <button
                onClick={() => {
                  addToCartnStock(tools);
                }}
                className='to-cart-btn'
              >
                Add to Cart
              </button>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToolsUserDetails;
