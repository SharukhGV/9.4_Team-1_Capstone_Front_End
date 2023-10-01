import {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import noImage from '../../assets/placeholder-img.jpeg';
import {useLocation} from 'react-router';

import './toolsDetails.css'
const API = import.meta.env.VITE_REACT_APP_API_URL;

function ToolsDetails({addToCart}) {

  const {username, tools_id} = useParams();
  const [tool, setTool] = useState({
    tool:'',
    media:[]
  });
  useEffect(() => {
    axios
      .get(`${API}/tools/one/${tools_id}`)
      .then(res => {
        console.log(res.data)
        setTool({
          tool: res.data.tool,
          media: res.data.media,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className='tool-details'>
      <aside>
        {tool.media.length > 0 ? (
          <div>
            <div className='main-image-div'>
              <img className='selected-img' src={noImage} loading='lazy' />
            </div>
            {tool.media.map(img => (
              <img src={img.file_url} loading='lazy' />
            ))}
          </div>
        ) : (
          <div className='main-image-div'>
            <img className='selected-img' src={noImage} loading='lazy' />
          </div>
        )}
      </aside>
      {tool.tool && (
        <aside className='tool-info'>
          <h1>{tool.tool.name}</h1>
          <h5>Posted by: {tool.tool.created_by}</h5>
          <h3>${tool.tool.price}</h3>
          <aside className='tools-action-buttons'>
            <button>Buy it Now</button>
            <button onClick={()=>addToCart(tool.tool)}>Add to Cart</button>
          </aside>
        </aside>
      )}
      <div className='tool-description'>
        <h2>Description</h2>
        <p>{tool.tool.description}</p>
      </div>
    </div>
  );
}

export default ToolsDetails;
