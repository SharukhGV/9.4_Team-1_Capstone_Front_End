import ToolsCard from './ToolsCard';
import {useState,useEffect} from 'react';
import axios from 'axios';
// import Carousel from 'react-material-ui-carousel';
// import ToolsDetails from './ToolsDetails';
import { v4 as uuidv4 } from 'uuid';
import ToolsIndexSingle from './toolsIndexSingle';
import './toolsUsers.css'


function ToolsUsers({user}) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [tools, setTools] = useState([]);
  

useEffect(() => {
  axios.get(`${API}/tools`).then(res => {
    setTools(res.data);
  });
}, []);




  return (
    <table className='thedreamtable'>
      <thead>
        <tr>
          <th>Item Number</th>
          <th>Item Name</th>
          <th>Description</th>
        </tr>
      </thead>{tools.map((individualTool, index) => {
        return (
          <ToolsIndexSingle
            key={uuidv4()}
            // tool={individualTool}
            // inKEY={individualTool.tool_id}
            // name={individualTool.name}
            // description={individualTool.description}
            // price={individualTool.price}
            // quantity={individualTool.stock}
            // condition={individualTool.condition}
            // thumbnail={individualTool.thumbnail}
            // index={index}
            // user={user}
            // username={username}
            individualTool={individualTool}
            index={index}
          />
        );
      })}
    </table>
  );

    }
export default ToolsUsers;
