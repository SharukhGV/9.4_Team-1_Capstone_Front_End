import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import ToolsUserDetails from './ToolsUserDetails';

function ToolsDetails({user}) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/${user}/tools`)
      .then(response => setTools(response.data))
      .catch(e => console.error('catch', e));
  }, [API]);

  // console.log(tools)
  return (
    <table className='thedreamtable'>
      <thead>
        <tr>
          <th>Tool Number</th>
          <th>Tool Name</th>
          <th>Description</th>
        </tr>
      </thead>
      {tools.map((individualTool, index) => {
        return (
          <ToolsUserDetails
            key={`tool-${individualTool.tool_id}`}
            inKEY={individualTool.tool_id}
            name={individualTool.name_tools}
            description={individualTool.description}
            price={individualTool.price}
            quantity={individualTool.stock_quantity}
            condition={individualTool.item_condition}
            thumbnail={individualTool.thumbnail}
            userid={individualTool.user_id}
            index={index}
            user={user.user_id}
            username={user.username}
          />
        );
      })}
    </table>
  );
}

export default ToolsDetails;
