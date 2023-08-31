import { useState, MouseEvent } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

export default function BasicPopover({ buttonText, popoverContent }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const buttonStlye = {
        background: 'linear-gradient(to bottom, #7CA0E7, #1A237E)',
        color: 'white',
        width: '90px',
        borderColor: '#7CA0E7',
        borderRadius: '4px',
        fontFamily: 'Lato'
    }

    return (
        <div>
            <button style={buttonStlye} onClick={handleClick}>
                {buttonText}
            </button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Typography sx={{ p: 2 }}>{popoverContent}</Typography>
            </Popover>
        </div>
    );
}