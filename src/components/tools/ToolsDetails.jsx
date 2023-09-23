// import {useState} from 'react';
// import {useEffect} from 'react';
// import axios from 'axios';
// import ToolsUserDetails from './ToolsUserDetails';
import { Link } from "react-router-dom";

function ToolsDetails({inKEY,name, user, condition}) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
//   const [tools, setTools] = useState([]);

//   const getTools = () => {
//     axios.get(`${API}/tools/${user.user_id}`).then(res => {
//       setTools(res.data);
//     });
//   };

//   useEffect(() => {
//     getTools()
//   }, []);
//   const {id} = useParams();

//   // console.log(tools)
  return (
<tbody>
    <tr><td>{index+=1}</td>
    <td><Link to={`/${user.username}/tools/${inKEY}`}>{name}</Link></td>
    <td>{condition}</td>
    </tr>
    </tbody>
  )
//     <table className='thedreamtable'>
//       <thead>
//         <tr>
//           <th>Tool Number</th>
//           <th>Tool Name</th>
//           <th>Description</th>
//         </tr>
//       </thead>
//       {tools.map((individualTool, index) => {
//         return (
//           <ToolsUserDetails
//             key={`tool-${individualTool.tool_id}`}
//             inKEY={individualTool.tool_id}
//             name={individualTool.name_tools}
//             description={individualTool.description}
//             price={individualTool.price}
//             quantity={individualTool.stock_quantity}
//             condition={individualTool.item_condition}
//             thumbnail={individualTool.thumbnail}
//             userid={individualTool.user_id}
//             index={index}
//             user={user.user_id}
//             username={user.username}
//           />
//         );
//       })}
//     </table>



}

export default ToolsDetails;
