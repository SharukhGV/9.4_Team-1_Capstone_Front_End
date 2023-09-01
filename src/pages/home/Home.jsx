import NavBar from "../../components/navbar/NavBar";
import { useState } from "react";
import CatCarousel from "../../components/categories-carousel/CatCarousel";
import './home.css';

import { Box, Modal, TextField, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { Textarea, Card } from "@mui/joy";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {

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
        height: 340,
        bgcolor: '#f8f8f8',
        border: '1px solid #D1C4E9', //change this
        boxShadow: 14,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }

    return (

        <div>
            {/* <NavBar /> */}
            <br />
            <div className="home-header">
                <h2 className="header-h2"> Ignight Your Creativity, Equip Your Creativity </h2>
                <br />
                <CatCarousel />
                <br />
                <h4 className="home-h4"> Let's Make Things a Little More Personal </h4>
                <p className="assesment-p"> Take our quick assesment for a better curated homepage </p>
                {/* <br /> */}
                <button className="take-assesment-btn"> Take Assesment </button>
            </div>
            <br />
            <div className="div" />          
            <div className="post-cta-sect">
                <h3> Connect & Exchange: Share Knowledge or Supplies </h3>
                <div className="post-ctas">
                <div className="post-cta">
                    <Card >
                        <h4> Share Your Expertise </h4>
                        <p className="post-cta-p"> Whether you're a seasoned pro or just starting out, you can contribute to our community by sharing your knowledge. Create and post tutorials, guides, and classes to help others learn and grow in their creative journey. Your insights can inspire and empower fellow artists and enthusiasts. </p>
                        <button className="cta-btn" onClick={handlePostModalOpen} > Make a Post </button>
                        <Modal open={postModalOpen} onClose={handlePostModalClose}>
                            <Box sx={stylePostModel}>
                                <button className="close-modal" onClick={handlePostModalClose}> &times; </button>
                                <TextField variant="standard" label='Title' />
                                <Textarea>
                                </Textarea>
                                <FormControl sx={{ minWidth: 170 }}>
                                    <InputLabel> Skill Category </InputLabel>
                                    <Select>
                                        <MenuItem value=''> <em>None</em></MenuItem>
                                        <MenuItem> Photography </MenuItem>
                                        <MenuItem> Filmmaking </MenuItem>
                                        <MenuItem> Digital Arts </MenuItem>
                                        <MenuItem> Ceramics </MenuItem>
                                        <MenuItem> Drawing </MenuItem>
                                        <MenuItem> Sculpture </MenuItem>
                                        <MenuItem> Printmaking </MenuItem>
                                        <MenuItem> Painting </MenuItem>
                                        <MenuItem> Fashion Design </MenuItem>
                                        <MenuItem> Graffiti </MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField variant="standard" label='Tags' />
                                <button> Preview </button>
                                <button> Post </button>
                            </Box>
                        </Modal>
                    </Card>
                </div>
                <div className="post-cta">
                    <Card>
                        <h4> Trade Your Treasures </h4>
                        <p className="post-cta-p"> Have unused art supplies, equipment, or gear collecting dust? Give them a new life and find something you need in return. Post your items for trade and discover a world of possibilities. Whether it's brushes, cameras, or other creative tools, your surplus can become someone else's inspiration. </p>
                        <button className="cta-btn" onClick={handleItemPostOpen}> Publish an Item </button>
                        <Modal open={itemModalOpen} onClose={handleItemPostClose}>
                            <Box sx={stylePostModel}>
                                <button onClick={handleItemPostClose}> &times; </button>
                                <p> STUFF IN HERE </p>
                            </Box>
                        </Modal>
                    </Card>
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
