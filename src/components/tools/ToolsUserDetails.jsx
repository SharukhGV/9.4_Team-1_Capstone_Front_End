import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
const API = import.meta.env.VITE_REACT_APP_API_URL;

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
  const [thecolor, setthecolor] = useState("black");
  const { id } = useParams();
  const [tools, setTools] = useState({});

  useEffect(() => {
    axios
        .get(`${API}/tools/one/${id}`)
        .then(res => {
          console.log(res.data)
            setTools(res.data.tool); 
        })
        .catch(error => {
            console.error("There was an error fetching the tools:", error);
        });
}, [id]);


  const deletetool = () => {
    axios
      .delete(`${API}/tools/${tools_id}/${user.user_id}`)
      .then(() => {
        navigate(`/tools`);
      })
      .catch((error) => console.error(error));
  };

  // const handleDelete = () => {
  //   deletetool();
  // };

  // let thecolordeterminate = "black"
  // if(good_tool === "good")

  const textcoloring = {
    color: thecolor,
  };

  return (
          <>
          {tools.condition &&  (<>   <legend key={tools.tool_id}>
          <strong>Your Tools for Sale</strong>
        </legend>
          <tr>
            <th>Category</th>
            <th>Information</th>
          </tr>
          <tr>
            <td>Name: </td>
            <td>{tools.name}</td>
          </tr>
          <tr>
            <td>Condition: </td>
            <td>{tools.condition}</td>
          </tr>
          <tr>
            <td>Description of tool</td>
            <td>{tools.description}</td>
          </tr>

          <tr>
            <td>price </td>
            <td>{tools.price}</td>
          </tr>
          <tr>
            <td>Quantity: </td>
            <td>{tools.quantity}</td>
          </tr>       <aside className='tool-info'>
          <h5>Posted by: {tools.created_by}</h5>
   
          <aside className='tools-action-buttons'>
            <button onClick={()=>addToCart(tools)}>Add to Cart</button>
          </aside>
        </aside>
      </>)}

      <span className="showNavigation">
        <span>
          <Link to={`/tools`}>
            <button>Back</button>
          </Link>
        </span> 
      </span>
</>  );
}

export default ToolsUserDetails;
