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
  const API = import.meta.env.VITE_REACT_APP_API_URL;
  const [updatedUser, setUpdatedUser] = useState(user);
  const [isFormValid, setIsFormValid] = useState(false);
  
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
  
  const handleRadioSelect = e => {
    const updatedUserCopy = {
      ...updatedUser,
      [e.target.name]: e.target.value,
    };
    
    setUpdatedUser(updatedUserCopy);
    
    const isValid = 
      !!updatedUserCopy.learning_interest && 
      !!updatedUserCopy.current_skillset; 
    
    setIsFormValid(isValid);
    // setUpdatedUser({
    //   ...updatedUser,
    //   [e.target.name]: e.target.value,
    // });
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
        <div style={{ textAlign: 'center' }}>
        <p>
          {' '}
          These quick assesment questions will help us curate your homapage with
          suggestions on equipment, hobby discoveries & more{' '}
        </p>
        <br />
        </div>
        <div className='questions-sect'>
          <div>
            <p>
              {' '}
              Which virtual arts hobby are you interested in learning /
              exploring?{' '}
            </p>
            <FormControl required>
              <RadioGroup
                name='learning_interest'
                onChange={handleRadioSelect}
                id='learning_interest'
              >
                <div>
                <FormControlLabel
                  value='Painting'
                  control={<Radio />}
                  label='Painting'
                />
                <FormControlLabel
                  value='Drawing'
                  control={<Radio />}
                  label='Drawing'
                />
                <FormControlLabel
                  value='Photography'
                  control={<Radio />}
                  label='Photography'
                />
                <FormControlLabel
                  value='Ceramics'
                  control={<Radio />}
                  label='Ceramics'
                />
                <FormControlLabel
                  value='Sculpting'
                  control={<Radio />}
                  label='Sculpting'
                />
                <FormControlLabel
                  value='Printmaking'
                  control={<Radio />}
                  label='Printmaking'
                />
                </div>
                <div>
                <FormControlLabel
                  value='Fashion Design'
                  control={<Radio />}
                  label='Fashion Design'
                />
                <FormControlLabel
                  value='Graffiti'
                  control={<Radio />}
                  label='Graffiti'
                />
                <FormControlLabel
                  value='Filmmaking'
                  control={<Radio />}
                  label='Filmmaking'
                />
                <FormControlLabel
                  value='Digital Artistry'
                  control={<Radio />}
                  label='Digital Artistry'
                />
                <FormControlLabel
                  value='Unsure'
                  control={<Radio />}
                  label='Unsure'
                />
                </div>
              </RadioGroup>
            </FormControl>
          </div>
          <br />
          <div>
            <p> Which virtual arts hobby do you have good experience in? </p>
            <FormControl required>
              <RadioGroup
                name='current_skillset'
                onChange={handleRadioSelect}
                id='current_hobby'
              >
                <div>
                <FormControlLabel
                  value='Painting'
                  control={<Radio />}
                  label='Painting'
                />
                <FormControlLabel
                  value='Drawing'
                  control={<Radio />}
                  label='Drawing'
                />
                <FormControlLabel
                  value='Photography'
                  control={<Radio />}
                  label='Photography'
                />
                <FormControlLabel
                  value='Sculpting'
                  control={<Radio />}
                  label='Sculpting'
                />
                <FormControlLabel
                  value='Printmaking'
                  control={<Radio />}
                  label='Printmaking'
                />
                <FormControlLabel
                  value='Fashion Design'
                  control={<Radio />}
                  label='Fashion Design'
                />
                </div>
                <div>
                <FormControlLabel
                  value='Graffiti'
                  control={<Radio />}
                  label='Graffiti'
                />
                <FormControlLabel
                  value='Ceramics'
                  control={<Radio />}
                  label='Ceramics'
                />
                <FormControlLabel
                  value='Filmmaking'
                  control={<Radio />}
                  label='Filmmaking'
                />
                <FormControlLabel
                  value='Digital Artistry'
                  control={<Radio />}
                  label='Digital Artistry'
                />
                <FormControlLabel
                  value='Beginner'
                  control={<Radio />}
                  label='Beginner / None'
                />
                </div>
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
            disabled={!isFormValid}
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
