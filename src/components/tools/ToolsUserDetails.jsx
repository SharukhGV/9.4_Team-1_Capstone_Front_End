import {useState, useEffect} from 'react';

function ToolsUserDetails({
  name,
  user,
  description,
  price,
  quantity,
  condition,
  thumbnail,
  userid,
  index,
  username,
  inKEY,
}) {
  const [thecolor, setthecolor] = useState('black');

  const deletetool = () => {
    axios
      .delete(`${API}/${username}/tools/${inKEY}`)
      .then(() => {
        navigate(`/tools`);
      })
      .catch(error => console.error(error));
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
    if (condition === 'good') {
      setthecolor('green');
    }
    if (condition === 'bad') {
      setthecolor('orange');
    }
    if (condition === 'neutral') {
      setthecolor('black');
    }
  }, [condition]);

  return (
    <article className='cardContact' key={inKEY}>
      <fieldset style={textcoloring}>
        <legend>
          <strong>Your Tools for Sale</strong>
        </legend>

        <table className='thetooltableSHOW'>
          <tr>
            <th>Category</th>
            <th>Information</th>
          </tr>
          <tr>
            <td>Name: </td>
            <td>{name}</td>
          </tr>
          {/* <tr>
  <td>Date: </td>
  <td>{createdTim}</td>
</tr> */}
          <tr>
            <td>Condition: </td>
            <td>{condition}</td>
          </tr>
          <tr>
            <td>Description of tool</td>
            <td>{description}</td>
          </tr>

          <tr>
            <td>price </td>
            <td>{price}</td>
          </tr>
          <tr>
            <td>Quantity: </td>
            <td>{quantity}</td>
          </tr>
        </table>
      </fieldset>

      <div className='showNavigation'>
        <span>
          <Link to={`/tools`}>
            <button>Back</button>
          </Link>
        </span>
        <span>
          <Link to={`/tools/${inKEY}/edit`}>
            <button className='editbutton'>Edit</button>
          </Link>
        </span>
        <span>
          <button className='delete' onClick={handleDelete}>
            Delete
          </button>
        </span>
      </div>
    </article>
  );
}

export default ToolsUserDetails;
