import {useState} from 'react';
import axios from 'axios';

import {
  Modal,
  Box,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import './assesment.css';

export default function Assesment({
  user,
  setAssesmentModalOpen,
  assesmentModalOpen,
  updateUser,
}) {
  const assesmentModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '77%',
    height: 490,
    bgcolor: '#f8f8f8',
    border: '1px solid #D1C4E9', //change this
    boxShadow: 14,
    p: 4,
  };
  const API = import.meta.env.VITE_REACT_APP_API_URL;

  const [updatedUser, setUpdatedUser] = useState(user); // Initialize with the default selected value

  const handleRadioSelect = e => {
    setUpdatedUser({
      ...updatedUser,
      [e.target.name]: e.target.value,
    });
  };

  function handleAssesmentBtns(event) {
    event.preventDefault();
    axios.put(`${API}/auth/${updatedUser.user_id}`, updatedUser).then(res => {
      updateUser(res.data.updatedAccount);
    });
  }

  return (
    <Modal
      open={assesmentModalOpen}
      onClose={() => setAssesmentModalOpen(false)}
    >
      <Box sx={assesmentModalStyle}>
        <button onClick={() => setAssesmentModalOpen(false)} className='x-btn'>
          {' '}
          &times;{' '}
        </button>
        <p>
          {' '}
          These quick assesment questions will help us curate your homapage with
          suggestions on equipment, hobby discoveries & more{' '}
        </p>
        <div className='questions-sect'>
          <div>
            <p>
              {' '}
              Which virtual arts hobby are you interested in learning /
              exploring?{' '}
            </p>
            <FormControl>
              <RadioGroup
                name='learning_interest'
                onChange={handleRadioSelect}
                id='learning_interest'
              >
                <FormControlLabel
                  value='painting'
                  control={<Radio />}
                  label='Painting'
                />
                <FormControlLabel
                  value='drawing'
                  control={<Radio />}
                  label='Drawing'
                />
                <FormControlLabel
                  value='photography'
                  control={<Radio />}
                  label='Photography'
                />
                <FormControlLabel
                  value='pottery'
                  control={<Radio />}
                  label='Pottery'
                />
                <FormControlLabel
                  value='sculpture'
                  control={<Radio />}
                  label='Sculpting'
                />
                <FormControlLabel
                  value='printmaking'
                  control={<Radio />}
                  label='Printmaking'
                />
                <FormControlLabel
                  value='fashion-design'
                  control={<Radio />}
                  label='Fashion Design'
                />
                <FormControlLabel
                  value='graffiti'
                  control={<Radio />}
                  label='Graffiti'
                />
                <FormControlLabel
                  value='filmmaking'
                  control={<Radio />}
                  label='Filmmaking'
                />
              </RadioGroup>
            </FormControl>
          </div>
          <div>
            <p> Which virtual arts hobby do you have good experience in? </p>
            <FormControl>
              <RadioGroup
                name='current_skillset'
                onChange={handleRadioSelect}
                id='current_hobby'
              >
                <FormControlLabel
                  value='painting'
                  control={<Radio />}
                  label='Painting'
                />
                <FormControlLabel
                  value='drawing'
                  control={<Radio />}
                  label='Drawing'
                />
                <FormControlLabel
                  value='photography'
                  control={<Radio />}
                  label='Photography'
                />
                <FormControlLabel
                  value='pottery'
                  control={<Radio />}
                  label='Pottery'
                />
                <FormControlLabel
                  value='sculpture'
                  control={<Radio />}
                  label='Sculpture'
                />
                <FormControlLabel
                  value='printmaking'
                  control={<Radio />}
                  label='Printmaking'
                />
                <FormControlLabel
                  value='fashion-design'
                  control={<Radio />}
                  label='Fashion Design'
                />
                <FormControlLabel
                  value='graffiti'
                  control={<Radio />}
                  label='Graffiti'
                />
                <FormControlLabel
                  value='filmmaking'
                  control={<Radio />}
                  label='Filmmaking'
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <br />
        <div className='btns'>
          <button
            className='later-btn'
            value='later-btn'
            onClick={event => handleAssesmentBtns(event)}
          >
            {' '}
            Complete Later{' '}
          </button>
          <button
            className='done-btn'
            value='done-btn'
            onClick={event => handleAssesmentBtns(event)}
          >
            {' '}
            Done{' '}
          </button>
        </div>
      </Box>
    </Modal>
  );
}
