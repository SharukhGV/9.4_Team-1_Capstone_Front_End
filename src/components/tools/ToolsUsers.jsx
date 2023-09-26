import ToolsCard from './ToolsCard';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import Carousel from 'react-material-ui-carousel';
import ToolsDetails from './ToolsDetails';

function ToolsUsers({user}) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [tools, setTools] = useState([]);

//   useEffect(() => {
//     const getTools = () => {
//       axios
//         .get(`${API}/tools`)
//         .then(response => setTools(response.data))
//         .catch(e => console.error('catch', e));
//     };
//     getTools();
//   }, []);
const getTools = () => {
    axios.get(`${API}/tools/${user.user_id}`).then(res => {
      setTools(res.data);
    });
useEffect(() => {
  getTools();
}, []);

  };
  // console.log(tools)
  return (
    <table className='thedreamtable'>
      <thead>
        <tr>
          <th>Tool Number</th>
          <th>Tool Name</th>
          <th>Description</th>
        </tr>
      </thead>{tools.map((individualTool, index) => {
        return (
          <ToolsDetails
            key={`tool-key-${tool.tool_id}`}
            tool={individualTool}
            inKEY={individualTool.tool_id}
            name={individualTool.name}
            description={individualTool.description}
            price={individualTool.price}
            quantity={individualTool.stock}
            condition={individualTool.condition}
            thumbnail={individualTool.thumbnail}
            index={index}
            user={user}
            // username={username}
          />
        );
      })}
    </table>
  );
}

export default ToolsUsers;
