import NavBar from "../../components/navbar/NavBar";
import { useState } from "react";
import CatCarousel from "../../components/categories-carousel/CatCarousel";
import './home.css';
import cameraImg from '../../assets/cameraImg.png';
import artistsGraphic from '../../assets/artistsgraphic.jpg';

import { Box, Modal, TextField, Select, FormControl, InputLabel, MenuItem, Input, Checkbox, ListItemText, OutlinedInput } from '@mui/material';
import { Textarea, Card, Button, styled } from "@mui/joy";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {

    const [postCtaCategory, setPostCtaCategory] = useState('');

    const [postModalOpen, setPostModalOpen] = useState(false);
    const [itemModalOpen, setItemModalOpen] = useState(false);

    const [itemCategory, setItemCategory] = useState([]);

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const categories = [
        'Photography',
        'Filmmaking', 
        'Ceramics', 
        'Digital Arts', 
        'Drawing', 
        'Sculpture', 
        'Printmaking', 
        'Painting', 
        'Fashion Design', 
        'Graffiti'];

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

    const handleItemCatSelect = (event) => {
        const {
            target: { value },
        } = event;
        setItemCategory(typeof value === 'string' ? value.split(',') : value);
    };

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
                        <button className="cta-btn" onClick={() => setPostModalOpen(true)} > Make a Post </button>
                        <Modal open={postModalOpen} onClose={() => setPostModalOpen(false)} >
                            <Box sx={stylePostModel}>
                                <button className="close-modal" onClick={() => setPostModalOpen(false)}> &times; </button>
                                {/* <TextField variant="standard" label='Title' /> */}
                                <Textarea minRows={9} sx={{ width: '99%' }} placeholder="Share your creative know-how..." 
                                startDecorator={
                                <div>
                                    <div className="upperLeft-txtSect">
                                    <Button component='label' startDecorator={<img src={cameraImg} width='30px' />} size="small" sx={{ backgroundColor: 'white' }}>
                                        <VisuallyHiddenInput type='file' />
                                    </Button>
                                    <Input placeholder="Title" focused />
                                    {/* <input placeholder="Title" className="text-placeholder" />  */}
                                    </div>
                                    <div className="bottomLeft-txtSect">
                                    <FormControl variant="standard" sx={{ minWidth: 170 }}>
                                    <InputLabel sx={{ fontFamily: 'Lato'}}> Category </InputLabel>
                                    <Select value={postCtaCategory} onChange={(event) => setPostCtaCategory(event.target.value)} >
                                        {/* <MenuItem value=''> <em>None</em></MenuItem> */}
                                        <MenuItem value='Photography'> Photography </MenuItem>
                                        <MenuItem value='Filmmaking'> Filmmaking </MenuItem>
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
                        <button className="cta-btn" onClick={() => setItemModalOpen(true)}> Publish an Item </button>
                        <Modal open={itemModalOpen} onClose={() => setItemModalOpen(false)}>
                            <Box sx={stylePostModel}>
                                <button onClick={() => setItemModalOpen(false)}> &times; </button> 
                                <Input placeholder='Name' />
                                <FormControl variant="standard" sx={{ m: 1, width: 300 }}>
                                    <InputLabel sx={{ fontFamily: 'Lato', marginLeft: '7px' }}> Item Category </InputLabel>
                                    <Select multiple value={itemCategory} MenuProps={MenuProps} onChange={handleItemCatSelect} input={<OutlinedInput label='Tag' />} renderValue={(selected) => selected.join(', ')} >
                                        {
                                            categories.map((category) => (
                                                <MenuItem key={category} value={category}>
                                                    <Checkbox checked={itemCategory.indexOf(category) > -1} />
                                                    <ListItemText primary={category} /> 
                                                </MenuItem>
                                            ))
                                        } 
                                    </Select>
                                    </FormControl>
                                    <FormControl variant="standard" sx={{ m: 1, width: 340 }}>
                                    <InputLabel sx={{ fontFamily: 'Lato', marginLeft: '7px' }}> Willing to trade for items in these categories:  </InputLabel>
                                    <Select multiple value={itemCategory} MenuProps={MenuProps} input={<OutlinedInput label='Tag' />} renderValue={(selected) => selected.join(', ')} >
                                        {
                                            categories.map((category) => (
                                                <MenuItem key={category} value={category}>
                                                    <Checkbox checked={itemCategory.indexOf(category) > -1} />
                                                    <ListItemText primary={category} /> 
                                                </MenuItem>
                                            ))
                                        } 
                                    </Select>
                                    </FormControl>
                                    <Button component='label' startDecorator={<img src={cameraImg} width='30px' />} size="small" sx={{ backgroundColor: 'white' }}>
                                        <VisuallyHiddenInput type='file' />
                                    </Button>
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
