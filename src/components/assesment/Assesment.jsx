import { Modal, Box, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import './assesment.css';

export default function Assesment(props) {

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
    }

    function handleAssesmentBtns(event) {
        event.preventDefault();

        props.setAssesmentModalOpen(false);

        if (event.target.value === 'later-btn') {
            props.setAssesmentCompleted(false);
        }

        else {
            props.setAssesmentCompleted(true);
        }
    }

    return (
        <>
        <Modal open={props.assesmentModalOpen} onClose={() => props.setAssesmentModalOpen(false)}>
            <Box sx={assesmentModalStyle}>
                <button onClick={() => props.setAssesmentModalOpen(false)} className="x-btn"> &times; </button>
                <p> These quick assesment questions will help us curate your homapage with suggestions on equipment, hobby discoveries & more </p>
                <div className="questions-sect">
                <div>
                    <p> Which virtual arts hobbies are you interested in learning / exploring? </p>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox size="xsmall" />} label="Painting"  />
                        <FormControlLabel control={<Checkbox size="xsmall" />} label="Drawing / Sketching" />
                        <FormControlLabel control={<Checkbox size="xsmall" />} label="Photography / Filmmaking" />
                        <FormControlLabel control={<Checkbox size="xsmall" />} label="Pottery / Ceramics" />
                        <FormControlLabel control={<Checkbox size="xsmall" />} label="Digital Art" />
                        <FormControlLabel control={<Checkbox size="xsmall" />} label="Sculpture / 3D Art" />
                        <FormControlLabel control={<Checkbox size="xsmall" />} label="Printmaking" />
                        <FormControlLabel control={<Checkbox size="xsmall" />} label="Fashion Design" />
                        <FormControlLabel control={<Checkbox size="xsmall" />} label="Graffiti" />
                    </FormGroup>
                </div>
                {/* <br /> */}
                <div>
                <p> Which virtual arts hobbies do you have good experience in? </p>
                <FormGroup>
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Painting" />
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Drawing / Sketching" />
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Photography / Filmmaking" />
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Pottery / Ceramics" />
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Digital Art" />
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Sculpture / 3D Art" />
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Printmaking" />
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Fashion Design" />
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Graffiti" />
                    <FormControlLabel control={<Checkbox size="xsmall" />} label="Beginner" />
                </FormGroup>
                </div>
                </div>
                <br />
                <div className="btns">
                    <button className="later-btn" value='later-btn' onClick={(event) => handleAssesmentBtns(event) }> Complete Later </button>
                    <button className="done-btn" value='done-btn' onClick={(event) => handleAssesmentBtns(event) }> Done </button>
                </div>
            </Box>
        </Modal>
        </>
    )
}