import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { Select, TextField, MenuItem } from '@mui/material';
import thumbnailPlaceHolder from '../../assets/thumbnail.jpeg'
import './toolsForm.css'
function ToolsNewForm({user}) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [thumbnail, setThumbnail] = useState({
    preview:'',
    data:''
  });

  const [tool, setTool] = useState({
    user_id: user.user_id,
    name_tools: '',
    item_condition: '',
    price: 0,
    stock_quantity: 0,
    description: '',
    thumbnail: '',
  });
  const navigate = useNavigate();

  const addTool = newTool => {
    const newForm = new FormData();
    newForm.append('thumbnail', files['thumbnail']);
    for (const key in newTool) {
      newForm.append(key, newTool[key]);
    }
    axios
      .post(`${API}/tools`, newForm, {
        headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(response => {

        console.log(response.data);
      })
      .catch(e => console.error('catch', e));
  };

  function handleThumbnail(event) {
    setThumbnail({
      preview:URL.createObjectURL(event.target.files[0]),
      data: event.target.files[0]
    });
  }

  const handleTextChange = event => {
    if (event.target.id === 'price' || event.target.id === 'stock_quantity') {
      setTool({...tool, [event.target.id]: Number(event.target.value)});
    }
    else {
      setTool({...tool, [event.target.id]: event.target.value});
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    addTool(tool);
  };

  return (
    <div className='edit'>
      <form className='tool-form' onSubmit={handleSubmit}>
        <label htmlFor='thumbnail'>Thumbnail</label>
        <img src={thumbnail.preview?thumbnail.preview:thumbnailPlaceHolder} alt='thumbnail-preview' style={{width:'200px', height:'auto'}} />
        <input
          type='file'
          id='thumbnail-input'
          name='thumbnail'
          accept='image/*'
          alt='thumbnail input'
          onChange={handleThumbnail}
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
