import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {
  Select,
  TextField,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  CardActionArea,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUploadOutlined";
import "./toolsForm.css";
const API = import.meta.env.VITE_REACT_APP_API_URL;

function ToolsNewForm({ user }) {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [tool, setTool] = useState({
    user_id: user.user_id,
    created_by: user.username,
    name: "",
    condition: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    thumbnail: "",
  });

  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
  });

  const addTool = (newTool) => {
    const newForm = new FormData();
    images.forEach((image, i) => {
      newForm.append(`file-${i}`, image.data);
    });
    for (const key in newTool) {
      newForm.append(key, newTool[key]);
    }

    axios
      .post(`${API}/tools`, newForm, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => {
        navigate(-1);
      })
      .catch((e) => console.error("catch", e));
  };
  function handleImages(event) {
    setImages([
      ...images,
      {
        preview: URL.createObjectURL(event.target.files[0]),
        data: event.target.files[0],
      },
    ]);
  }

  const removeImage = (i) => {
    const updatedImages = [...images];
    updatedImages.splice(i, 1);
    setImages(updatedImages);
  };

  const handleTextChange = (event) => {
    if (event.target.name === "price" || event.target.name === "stock") {
      setTool({ ...tool, [event.target.name]: Number(event.target.value) });
    } else {
      setTool({ ...tool, [event.target.name]: event.target.value });
    }
  };

  const handleSelect = (e) => {
    setTool({
      ...tool,
      condition: e.target.value,
    });
  };
  const handleSelectCat = (e) => {
    setTool({
      ...tool,
      category: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTool(tool);
  };

  return (
    <div className="edit">
      <h1>Create a Listing</h1>
      <form className="tool-form" onSubmit={handleSubmit}>
        <TextField
          sx={{ marginBottom: 2 }}
          label="Listing Title"
          id="name"
          name="name"
          type="text"
          onChange={handleTextChange}
          required
        />
        <TextField
          label="Description"
          sx={{ marginBottom: 2 }}
          id="description"
          type="text"
          onChange={handleTextChange}
        />
<div className="category" >
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            onChange={handleSelectCat}
            name="category"
            id="category"
            value={tool.category}
          >
            <MenuItem value="painting">painting</MenuItem>
            <MenuItem value="drawing">photography</MenuItem>
            <MenuItem value="photography">ceramics</MenuItem>
            <MenuItem value="pottery">pottery</MenuItem>
            <MenuItem value="sculpting">sculpting</MenuItem>
            <MenuItem value="digital">digital</MenuItem>
            <MenuItem value="printmaking">printmaking</MenuItem>
            <MenuItem value="fashion">fashion</MenuItem>
            <MenuItem value="film">film</MenuItem>
            <MenuItem value="graffiti">graffiti</MenuItem>
          </Select>
        </FormControl>
</div>
        <div className="price-condition-stock">
          <FormControl sx={{ width: "48%" }}>
            <InputLabel id="condition-label">Condition</InputLabel>
            <Select
              labelId="condition-label"
              onChange={handleSelect}
              name="condition"
              id="condition"
              value={tool.condition}
            >
              <MenuItem value="">--Please choose an option--</MenuItem>
              <MenuItem value="good">good</MenuItem>
              <MenuItem value="neutral">neutral</MenuItem>
              <MenuItem value="bad">bad</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Price"
            sx={{ width: "25%" }}
            id="price"
            type="number"
            name="price"
            onChange={handleTextChange}
          />
          <TextField
            label="Stock Quantity"
            sx={{ width: "25%" }}
            id="stock"
            type="number"
            name="stock"
            onChange={handleTextChange}
          />
        </div>
        <h2>Upload Images</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            width: "90%",
          }}
        >
          <div className="images">
            {images.map((image, i) => (
              <div className="uploaded-images" key={`${image.data.name}-${i}`}>
                <aside className="image-box">
                  <img className="img" src={image.preview} alt="preview" />
                </aside>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => removeImage(i)}
                >
                  remove
                </Button>
              </div>
            ))}
            <Card
              sx={{
                width: "8vw",
                height: "8vw",
                position: "relative",
                backgroundColor: "lightgrey",
              }}
            >
              <CardContent></CardContent>
              <CardActionArea
                sx={{ position: "absolute", bottom: 0, width: "100%" }}
              >
                <Button
                  component="label"
                  type="file"
                  accept="image/*"
                  variant="contained"
                  onChange={handleImages}
                  startIcon={<CloudUploadIcon />}
                >
                  Select
                  <VisuallyHiddenInput type="file" />
                </Button>
              </CardActionArea>
            </Card>
          </div>
        </div>
        <div className="form-buttons">
          <Button
            variant="contained"
            color="error"
            sx={{ width: "10%" }}
            onClick={() => navigate(-1)}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ width: "10%", marginLeft: "5%" }}
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ToolsNewForm;
