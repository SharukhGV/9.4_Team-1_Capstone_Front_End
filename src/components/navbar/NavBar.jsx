import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';

import { Popover, Typography } from '@mui/material';

import Auth from '../../components/auth/Auth';


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
                        <button className='profile-btn'>
                            Profile
                        </button>
                    </Link>

                </div>

            )
            }



        </div>
    )
}