import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { Select, TextField, MenuItem } from '@mui/material';
//import './toolsForm.css'
function ToolsNewForm({user}) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [files, setFiles] = useState({});

  const [tool, settool] = useState({
    user_id: user.user_id,
    name_tools: '',
    item_condition: '',
    price: 0,
    stock_quantity: 0,
    description: '',
    thumbnail: '',
  });
  const navigate = useNavigate();

  const addtool = newtool => {
    console.log(files['thumbnail']);
    const newForm = new FormData();
    newForm.append('thumbnail', files['thumbnail']);

    // newForm.append("user_id", user.user_id)
    for (const key in newtool) {
      newForm.append(key, newtool[key]);
    }
    console.log(newForm);
    axios
      .post(`${API}/tools`, newForm, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(response => {
        console.log(response.data);
        // console.log(newForm)
        // settool(response.data); // set the entire `tool` object
        // navigate(`/${user}/tools`);
      })
      .catch(e => console.error('catch', e));
  };

  function handleFileUploads(event) {
    setFiles({...files, [event.target.name]: event.target.files[0]});
  }

  const handleTextChange = event => {
    if (event.target.id === 'price' || event.target.id === 'stock_quantity') {
      settool({...tool, [event.target.id]: Number(event.target.value)});
    }
    //   if (event.target.id === "stock_quantity") {
    //     settool({ ...tool, [event.target.id]: Number(event.target.value) });
    //   }
    else {
      settool({...tool, [event.target.id]: event.target.value});
    }

    // settool({ ...tool, [event.target.id]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    addtool(tool);
  };

  return (
    <div className='edit'>
      <form className='tool-form' onSubmit={handleSubmit}>
        {/* <TextField type="hidden" id="user_id" name="user_id" value={userShow2}></TextField> */}
        <label htmlFor='thumbnail'>Picture of Tool:</label>

        <input
          type='file'
          id='thumbnail-input'
          name='thumbnail'
          accept='image/*'
          alt='thumbnail input'
          onChange={handleFileUploads}
        />

        <TextField
          label='Listing Title'
          id='name'
          name='name'
          type='text'
          onChange={handleTextChange}
          required
        />
        <TextField
          label='Description'
          id='description'
          type='text'
          onChange={handleTextChange}
        />
        <TextField
        label='Price'
          id='price'
          type='number'
          name='price'
          onChange={handleTextChange}
        />
        <Select
          onChange={handleTextChange}
          label='Condition'
          name='item_condition'
          id='item_condition'
          value={tool.item_condition}
        >
          <MenuItem value=''>--Please choose an option--</MenuItem>
          <MenuItem value='good'>good</MenuItem>
          <MenuItem value='neutral'>neutral</MenuItem>
          <MenuItem value='bad'>bad</MenuItem>
        </Select>

        <TextField
          label='Stock Quantity'
          id='stock_quantity'
          type='number'
          name='stock_quantity'
          value={tool.stock_quantity}
          placeholder='Quantity of Your Item!'
          onChange={handleTextChange}
        />

        <input type='submit' />
      </form>
      <Link to={`/${user}/tools`}>
        <button>Go Back to All Tool Listings!</button>
      </Link>
    </div>
  );
}

export default ToolsNewForm;
