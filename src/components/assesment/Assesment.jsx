import {
  Modal,
  Box,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  FormControl,
  Checkbox,
} from "@mui/material";
import "./assesment.css";
import { useState } from "react";
import axios from "axios";
export default function Assesment(props) {

  const assesmentModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "77%",
    height: 490,
    bgcolor: "#f8f8f8",
    border: "1px solid #D1C4E9", //change this
    boxShadow: 14,
    p: 4,
  };
  const API = import.meta.env.VITE_REACT_APP_API_URL;

  const [updatedUser, setUpdatedUser] = useState(props.user); // Initialize with the default selected value

  const handleRadioChange = (event) => {
    // console.log(event.target.name)
    // console.log(updatedUser)

    setUpdatedUser({
      ...updatedUser,
      [event.target.name]: event.target.value
    }); // Update the selected value when the radio button changes
  };


  function handleAssesmentBtns(event) {
    event.preventDefault();

    props.setAssesmentModalOpen(false);

    if (event.target.value === "later-btn") {
      props.setAssesmentCompleted(false);
    } else {



      axios
      .put(`${API}/auth/${props.user.user_id}`,updatedUser)
      .then((response) => {
        console.log(response.data.updatedAccount);

      })
      .catch((e) => console.error(e));
      // console.log(updatedUser.learning_interest);
      // console.log(updatedUser.current_skillset);

      // props.setAssesmentCompleted(true);
    }
  }

  return (
    <>
      <Modal
        open={props.assesmentModalOpen}
        onClose={() => props.setAssesmentModalOpen(false)}
      >
        <Box sx={assesmentModalStyle}>
          <button
            onClick={() => props.setAssesmentModalOpen(false)}
            className="x-btn"
          >
            {" "}
            &times;{" "}
          </button>
          <p>
            {" "}
            These quick assesment questions will help us curate your homapage
            with suggestions on equipment, hobby discoveries & more{" "}
          </p>
          <div className="questions-sect">
            <div>
              <p>
                {" "}
                Which virtual arts hobbies are you interested in learning /
                exploring?{" "}
              </p>
              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label">
                  
                </FormLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  // value={updatedUser.learning_interest}
                  name="learning_interest"
                  onChange={(e)=>handleRadioChange(e)}
                  id="learning_interest"
                >
                  <FormControlLabel
                    value="painting"
                    control={<Radio />}
                    label="painting"
                  />
                  <FormControlLabel
                    value="drawing"
                    control={<Radio />}
                    label="drawing"
                  />
                  <FormControlLabel
                    value="photography"
                    control={<Radio />}
                    label="photography"
                  />
                  <FormControlLabel
                    value="pottery"
                    control={<Radio />}
                    label="pottery"
                  />
                  <FormControlLabel
                    value="sculpture"
                    control={<Radio />}
                    label="sculpture"
                  />
                  <FormControlLabel
                    value="printmaking"
                    control={<Radio />}
                    label="printmaking"
                  />
                  <FormControlLabel
                    value="fashion"
                    control={<Radio />}
                    label="fashion"
                  />
                  <FormControlLabel
                    value="graffiti"
                    control={<Radio />}
                    label="graffiti"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            {/* <br /> */}
            <div>
              <p>
                {" "}
                Which virtual arts hobbies do you have good experience in?{" "}
              </p>
              <FormControl>
                {/* <FormLabel id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel> */}
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  // value={updatedUser.current_skillset}
                  name="current_skillset"
                  onChange={(e)=>handleRadioChange(e)}
                  id="current_skillset"
                >
                  <FormControlLabel
                    value="painting"
                    control={<Radio />}
                    label="painting"
                  />
                  <FormControlLabel
                    value="drawing"
                    control={<Radio />}
                    label="drawing"
                  />
                  <FormControlLabel
                    value="photography"
                    control={<Radio />}
                    label="photography"
                  />
                  <FormControlLabel
                    value="pottery"
                    control={<Radio />}
                    label="pottery"
                  />
                  <FormControlLabel
                    value="sculpture"
                    control={<Radio />}
                    label="sculpture"
                  />
                  <FormControlLabel
                    value="printmaking"
                    control={<Radio />}
                    label="printmaking"
                  />
                  <FormControlLabel
                    value="fashion"
                    control={<Radio />}
                    label="fashion"
                  />
                  <FormControlLabel
                    value="graffiti"
                    control={<Radio />}
                    label="graffiti"
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <br />
          <div className="btns">
            <button
              className="later-btn"
              value="later-btn"
              onClick={(event) => handleAssesmentBtns(event)}
            >
              {" "}
              Complete Later{" "}
            </button>
            <button
              className="done-btn"
              value="done-btn"
              onClick={(event) => handleAssesmentBtns(event)}
            >
              {" "}
              Done{" "}
            </button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
