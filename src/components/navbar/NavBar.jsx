import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';

import BasicPopover from '../../assets/mui/popover/popover';
import Auth from '../../components/auth/Auth';
import { Popover } from '@mui/material';


export default function NavBar() {

    const [loggedOut, setLoggedOut] = useState(false);


    return (
        <div className='navbar'>

            {loggedOut ? (
                <div>
                    <Link to='/'>
                        <img src={craftopiaLogo} alt='circ-logo' className='navbar-logo' />
                    </Link>

                    <Link to="/home">
                        <button className='explore-btn'>Explore</button>
                    </Link>

                    <input type="text" placeholder="Search..." />

                    <Auth craftopiaLogo={craftopiaLogo} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />

                </div>
            ) : (
                <div>
                    <Link to='/'>
                        <img src={craftopiaLogo} alt='circ-logo' className='navbar-logo' />
                    </Link>
                    <Link to="/home">
                        <button className='explore-btn'>Explore</button>
                    </Link>

                    <input type="text" placeholder="Search..." />

                    <Link to="/profile">
                       <Popover className='login-btn' />
                    </Link>

                </div>

            )
            }



        </div>
    )
}