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

  // useEffect(() => {
  //   axios
  //     .get(`${API}/tools/${id}/${user.user_id}`)
  //     .then((response) => {
  //       console.log(response.data)
  //       setTools(response.data);
  //     })
  //     .catch((err) => {
  //       // navigate("/not-found");
  //       console.log(err);
  //     });
  // }, [API, id]);
  useEffect(() => {
    axios
        .get(`${API}/tools/${id}`)
        .then(res => {
          console.log(res.data)
            setTools(res.data[0]); 
            // or if you need to extract specific properties:
            // setTools({
            //     tool: res.data,
            //     media: res.data.media,
            // });
        })
        .catch(error => {
            console.error("There was an error fetching the tools:", error);
            // you can set some state here to show an error message or take some other action
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

  useEffect(() => {
    if (tools.condition === "good") {
      setthecolor("green");
    }
    if (tools.condition === "bad") {
      setthecolor("orange");
    }
    if (tools.condition === "neutral") {
      setthecolor("black");
    }
  }, [tools.condition]);

  return (
<>   {tools &&  (<>   <legend key={tools.tool_id}>
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
          {/* <tr>
  <td>Date: </td>
  <td>{createdTim}</td>
</tr> */}
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
        <span>
          {/* <Link to={`/tools/${tools_id}/edit`}>
            <button className="editbutton">Edit</button>
          </Link> */}
        </span>
        <span>
          {/* <button className="delete" onClick={handleDelete}>
            Delete
          </button> */}
        </span>
      </span>
</>  );
}

export default ToolsUserDetails;
