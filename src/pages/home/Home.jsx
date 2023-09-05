import NavBar from "../../components/navbar/NavBar";
import { useState } from "react";
import CatCarousel from "../../components/categories-carousel/CatCarousel";
import './home.css';
import cameraImg from '../../assets/cameraImg.png';
import artistsGraphic from '../../assets/artistsgraphic.jpg';

import { Box, Modal, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { Textarea, Card, Button, styled } from "@mui/joy";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { fontFamily } from "@mui/system";

export default function Home() {

    const [postCtaCategory, setPostCtaCategory] = useState('');

    const [postModalOpen, setPostModalOpen] = useState(false);
    const [itemModalOpen, setItemModalOpen] = useState(false);
  
    const handlePostModalOpen = () => setPostModalOpen(true);
    const handlePostModalClose = () => setPostModalOpen(false);

    const handleItemPostOpen = () => setItemModalOpen(true);
    const handleItemPostClose = () => setItemModalOpen(false);

    const stylePostModel = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: 240,
        bgcolor: '#f8f8f8',
        border: '1px solid #D1C4E9', //change this
        boxShadow: 14,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    const VisuallyHiddenInput = styled('input')`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
    `;

    //function handlePostSelectChange() 

    return (

        <div>
            {/* <NavBar /> */}
            <br />
            <div className="home-header">
                <h2 className="header-h2"> Ignight Your Creativity, Equip Your Creativity </h2>
                <br />
                <CatCarousel />
                <br />
                <h4 className="home-h4"> Let's Get Personal </h4>
                <p className="assesment-p"> Take our quick assesment for a better curated homepage </p>
                {/* <br /> */}
                <button className="take-assesment-btn"> Take Assesment </button>
            </div>
            <br />
            <div className="div" />          
            <div className="post-cta-sect">
                <h3> Connect & Exchange: Share Knowledge or Supplies </h3>
                <div className="content-container">
                <img src={artistsGraphic} className="artistsGraphic"/>
                <div className="post-ctas">
                <div className="post-cta">
                    <Card className='overlay-card' sx={{ backgroundColor: 'rgba(209, 196, 233, 0.75)'}} >
                        <h4> Share Your Expertise </h4>
                        <p className="post-cta-p"> No matter your level, share insights. Post tutorials, guides, and classes. Inspire and empower fellow creatives. </p>
                        <button className="cta-btn" onClick={handlePostModalOpen} > Make a Post </button>
                        <Modal open={postModalOpen} onClose={handlePostModalClose} >
                            <Box sx={stylePostModel}>
                                <button className="close-modal" onClick={handlePostModalClose}> &times; </button>
                                {/* <TextField variant="standard" label='Title' /> */}
                                <Textarea minRows={9} sx={{ width: '99%' }} placeholder="Share your creative know-how..." 
                                startDecorator={
                                <div>
                                    <div className="upperLeft-txtSect">
                                    <Button component='label' startDecorator={<img src={cameraImg} width='30px' />} size="small">
                                        <VisuallyHiddenInput type='file' />
                                    </Button>
                                    <input placeholder="Title" className="text-placeholder" /> 
                                    </div>
                                    <div className="bottomLeft-txtSect">
                                    <FormControl variant="standard" sx={{ minWidth: 170 }}>
                                    <InputLabel sx={{ fontFamily: 'Lato'}}> Skill Category </InputLabel>
                                    <Select value={postCtaCategory} onChange={(event) => setPostCtaCategory(event.target.value)} >
                                        {/* <MenuItem value=''> <em>None</em></MenuItem> */}
                                        <MenuItem value='Photography'> Photography </MenuItem>
                                        <MenuItem value='Filmaking'> Filmmaking </MenuItem>
                                        <MenuItem value='Digital Arts'> Digital Arts </MenuItem>
                                        <MenuItem value='Ceramics'> Ceramics </MenuItem>
                                        <MenuItem value='Drawing'> Drawing </MenuItem>
                                        <MenuItem value='Sculpture'> Sculpture </MenuItem>
                                        <MenuItem value='Printmaking'> Printmaking </MenuItem>
                                        <MenuItem value='Painting'> Painting </MenuItem>
                                        <MenuItem value='Fashion Design'> Fashion Design </MenuItem>
                                        <MenuItem value='Graffiti'> Graffiti </MenuItem>
                                    </Select>
                                    </FormControl>
                                    <TextField variant="standard" label='Tags' className="txt-tags" />
                                    </div>
                                    <div className="bottomRight-actionBtns">
                                    <button className="preview-btn"> Preview </button>
                                    <button className="post-btn"> Post </button>
                                    </div>
                                </div>
                                } >                 
                                </Textarea>
                            </Box>
                        </Modal>
                    </Card>
                </div>
                <div className="post-cta">
                    <Card className='overlay-card' sx={{ backgroundColor: 'rgba(209, 196, 233, 0.75)'}} >
                        <h4> Trade Your Treasures </h4>
                        <p className="post-cta-p"> Give new life to neglected supplies. Exchange for fresh inspiration. Trade and discover possibilities. </p>
                        <button className="cta-btn" onClick={handleItemPostOpen}> Publish an Item </button>
                        <Modal open={itemModalOpen} onClose={handleItemPostClose}>
                            <Box sx={stylePostModel}>
                                <button onClick={handleItemPostClose}> &times; </button> 
                            </Box>
                        </Modal>
                    </Card>
                </div>
                </div>
                </div>
            </div>
            <br />
            <div>
                {/* categories generated by user interest here */}
            </div>
            <div className="div" />
            <div>
               <p className="user-connect-p"> Meet, trade, connect with other creatives in your city </p> 
               <button className="arrow"> <ArrowBackIosIcon /> </button>
               {/* user info from dummy accounts here */}
               <button className="arrow"> <ArrowForwardIosIcon /> </button>
            </div>
        </div>
    )
}
