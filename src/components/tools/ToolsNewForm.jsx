import {useState, useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import {Select, TextField, MenuItem, Button, InputLabel} from '@mui/material';
import {styled} from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import './toolsForm.css';
function ToolsNewForm({user}) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [images, setImages] = useState([]);
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

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  const addTool = newTool => {
    const newForm = new FormData();
    images.forEach((image,i)=>{
      newForm.append(`file-${i}`, image.data)
    })
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
  useEffect(()=>{
    console.log(images)
  },[images])

  function handleImages(event) {
    setImages([
      ...images,
      {
        preview: URL.createObjectURL(event.target.files[0]),
        data: event.target.files[0],
      },
    ]);
  }

  const handleTextChange = event => {
    if (event.target.id === 'price' || event.target.id === 'stock_quantity') {
      setTool({...tool, [event.target.id]: Number(event.target.value)});
    } else {
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
        <div className='images'>
          {images.map((image,i) => (
            <aside className='image-box' key={`${image.data.name}-${i}`}>
              <img className='img' src={image.preview} alt='preview' />
            </aside>
          ))}
            <Button
              component='label'
              type='file'
              id='thumbnail-input'
              name='thumbnail'
              accept='image/*'
              alt='thumbnail input'
              variant='contained'
              onChange={handleImages}
              startIcon={<CloudUploadIcon />}
            >
              Upload Image
              <VisuallyHiddenInput type='file' />
            </Button>

        </div>

        <TextField
          label='Listing Title'
          sx={{margin: 4}}
          id='name'
          name='name'
          type='text'
          onChange={handleTextChange}
          required
        />
        <TextField
          label='Description'
          sx={{margin: 4}}
          id='description'
          type='text'
          onChange={handleTextChange}
        />
        <TextField
          label='Price'
          sx={{margin: 4}}
          id='price'
          type='number'
          name='price'
          onChange={handleTextChange}
        />
        <InputLabel id='condition'>Condition</InputLabel>
        <Select
          sx={{margin: 4}}
          label='Condition'
          onChange={handleTextChange}
          name='condition'
          id='condition'
          value={tool.item_condition}
        >
          {/* <MenuItem value=''>--Please choose an option--</MenuItem> */}
          <MenuItem value='good'>good</MenuItem>
          <MenuItem value='neutral'>neutral</MenuItem>
          <MenuItem value='bad'>bad</MenuItem>
        </Select>

        <TextField
          label='Stock Quantity'
          sx={{margin: 4}}
          id='stock'
          type='number'
          name='stock'
          onChange={handleTextChange}
        />

        <Button variant='contained' sx={{width: '10%'}} type='submit'>
          Submit
        </Button>
      </form>
      <Link to={`/${user}/tools`}>
        <button>Go Back to All Tool Listings!</button>
      </Link>
    </div>
  );
}

export default ToolsNewForm;
