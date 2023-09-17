import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
function ToolsNewForm({ user }) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [files, setFiles] = useState({});

  const [tool, settool] = useState({
    user_id: user.user_id,
    name_tools: "",
    item_condition: "",
    price: 0,
    stock_quantity: 0,
    description: "",
    thumbnail: "",
  });
  const navigate = useNavigate();

  const addtool = (newtool) => {
    console.log(files["thumbnail"])
    const newForm = new FormData();
newForm.append("thumbnail",files["thumbnail"])

// newForm.append("user_id", user.user_id)
for (const key in newtool){
    newForm.append(key,newtool[key])
}
console.log(newForm)
    axios
      .post(`${API}/tools`, newForm, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        console.log(response.data);
        // console.log(newForm)
        // settool(response.data); // set the entire `tool` object
        // navigate(`/${user}/tools`);
      })
      .catch((e) => console.error("catch", e));
  };

function handleFileUploads(event){

setFiles({...files, [event.target.name]: event.target.files[0]})

}


  const handleTextChange = (event) => {
    if (event.target.id === "price" || event.target.id === "stock_quantity") {
      settool({ ...tool, [event.target.id]: Number(event.target.value) });
    }
    //   if (event.target.id === "stock_quantity") {
    //     settool({ ...tool, [event.target.id]: Number(event.target.value) });
    //   }
    else {
      settool({ ...tool, [event.target.id]: event.target.value });
    }

    // settool({ ...tool, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addtool(tool);
  };

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        {/* <input type="hidden" id="user_id" name="user_id" value={userShow2}></input> */}
        <label htmlFor="thumbnail">Picture of Tool:</label>

        <input
          type="file"
          id="thumbnail"
          name="thumbnail"
          accept="image/*"
          alt="thumbnail"
          onChange={handleFileUploads}
        />

        <label htmlFor="name_tools">Name:</label>
        <input
          id="name_tools"
          value={tool.name_tools}
          type="text"
          onChange={handleTextChange}
          placeholder="Name your tool..."
          required
        />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          // pattern="http[s]*://.+"
          value={tool.description}
          // placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          name="price"
          value={tool.price}
          placeholder="Price Your Item!"
          onChange={handleTextChange}
        />
        <label htmlFor="item_condition">Condition:</label>

        <select
          onChange={handleTextChange}
          name="item_condition"
          id="item_condition"
          value={tool.item_condition}
        >
          <option value="">--Please choose an option--</option>
          <option value="good">good</option>
          <option value="neutral">neutral</option>
          <option value="bad">bad</option>
        </select>

        <label htmlFor="stock_quantity">Stock Quantity:</label>
        <input
          id="stock_quantity"
          type="number"
          name="stock_quantity"
          value={tool.stock_quantity}
          placeholder="Quantity of Your Item!"
          onChange={handleTextChange}
        />

        <input type="submit" />
      </form>
      <Link to={`/${user}/tools`}>
        <button>Go Back to All Tool Listings!</button>
      </Link>
    </div>
  );
}

export default ToolsNewForm;
