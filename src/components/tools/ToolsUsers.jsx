import {useState, useEffect} from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';
import ToolsIndexSingle from './ToolsIndexSingle';
import './toolsUsers.css';

function ToolsUsers({addToCart}) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios.get(`${API}/tools`).then(res => {
      setTools(res.data);
    });
  }, []);

  return (
    <div className='thedreamtable'>
      {tools.map((tool, index) => {
        return (
          <div className='tool-container'>
            <ToolsIndexSingle
              key={uuidv4()}
              tool={tool}
              index={index}
            />
            <button className='add-to-cart-btn' onClick={() => addToCart(tool)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
export default ToolsUsers;
