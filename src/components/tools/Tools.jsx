import {useState, useEffect} from 'react';
import axios from 'axios';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {Card, CardContent, CardOverflow, AspectRatio} from '@mui/joy';

function Tools({user}) {
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [tools, setTools] = useState([]);
  const [visibleTools, setVisibleTools] = useState([]);
  const [currentTool, setCurrentTool] = useState(0);

  useEffect(() => {
    axios
      .get(`${API}/tools`)
      .then(response => setTools(response.data))
      .catch(e => console.error('catch', e))
      .finally(() => updateVisibleTools());
  }, []);

  function updateVisibleTools() {
    const theVisibleTools = [
      tools[(currentTool - 1 + tools.length) % tools.length],
      tools[currentTool],
      tools[(currentTool + 1) % tools.length],
      tools[(currentTool + 2) % tools.length],
      tools[(currentTool + 3) % tools.length],
    ];
    setVisibleTools(theVisibleTools);
  }

  function prevSlide() {
    setCurrentTool(prevTool =>
      prevTool === 0 ? tools.length - 1 : prevTool - 1
    );
    updateVisibleTools();
  }

  function nextSlide() {
    setCurrentTool(prevTool =>
      prevTool === tools.length - 1 ? 0 : prevTool + 1
    );
    updateVisibleTool();
  }
  return (
    <div>
      <br />
      <div className='slider-container'>
        <button className='arrow' onClick={prevSlide}>
          {' '}
          <ArrowBackIosIcon />{' '}
        </button>
        {visibleTools.map(tool => (
          <Card component='li' variant='solid'>
            <CardOverflow>
              <AspectRatio>
                <img loading='lazy' src={tool?.thumbnail} />
              </AspectRatio>
              <CardContent>
                <p> {tool?.title || 'Loading...'} </p>
              </CardContent>
            </CardOverflow>
          </Card>
        ))}
        <button className='arrow' onClick={nextSlide}>
          {' '}
          <ArrowForwardIosIcon />{' '}
        </button>
      </div>
    </div>
  );
}

export default Tools;
