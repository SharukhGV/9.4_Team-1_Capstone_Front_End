import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
function ToolsUserDetails({
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
  const [thecolor, setthecolor] = useState("black");
  const { tools_id } = useParams();
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/tools/${id}/${user.user_id}`)
      .then((response) => {
        console.log(response.data)
        setTools(response.data);
      })
      .catch((err) => {
        // navigate("/not-found");
        console.log(err);
      });
  }, [API, id]);

  const deletetool = () => {
    axios
      .delete(`${API}/tools/${tools_id}/${user.user_id}`)
      .then(() => {
        navigate(`/tools`);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = () => {
    deletetool();
  };

  // let thecolordeterminate = "black"
  // if(tool.good_tool === "good")

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
    <article className="cardContact" key={uuidv4()}>
      <fieldset style={textcoloring}>
        <legend>
          <strong>Your Tools for Sale</strong>
        </legend>
        <table className="thetooltableSHOW">
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
          </tr>
        </table>
      </fieldset>

      <div className="showNavigation">
        <span>
          <Link to={`/tools`}>
            <button>Back</button>
          </Link>
        </span>
        <span>
          <Link to={`/tools/${tools_id}/edit`}>
            <button className="editbutton">Edit</button>
          </Link>
        </span>
        <span>
          <button className="delete" onClick={handleDelete}>
            Delete
          </button>
        </span>
      </div>
    </article>
  );
}

export default ToolsUserDetails;
