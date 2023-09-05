import { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';

import BasicPopover from '../../assets/mui/popover/popover';
import Auth from '../../components/auth/Auth';

export default function NavBar() {

    const [loggedOut, setLoggedOut] = useState(true);
    const [searchText, setSearchText] = useState('');

    function handleSearchInput(event) {
        console.log(searchText);
        setSearchText(event.target.value);
    }

    return (
        <div className='navbar'>

            {loggedOut ? (
                <div>
                    <Link to='/'>
                        <img src={craftopiaLogo} alt='circ-logo' className='navbar-logo' />
                    </Link>

                    {/* Remove button later */}
                    <button onClick={() => setLoggedOut(!loggedOut)}>Temp Button see login view of NavBar</button>

                    <Link to="/home">
                        <button className='explore-btn'>Explore</button>
                    </Link>

                    <input 
                    type="text" 
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleSearchInput} />

                    <Auth craftopiaLogo={craftopiaLogo} loggedOut={loggedOut} setLoggedOut={setLoggedOut} />

                </div>
            ) : (
                <div>
                    <Link to='/'>
                        <img src={craftopiaLogo} alt='circ-logo' className='navbar-logo' />
                    </Link>

                    {/* Remove button later */}
                    <button onClick={() => setLoggedOut(!loggedOut)}>Temp Button see login view of NavBar</button>

                    <Link to="/home">
                        <button className='explore-btn'>Explore</button>
                    </Link>

                    <input 
                    type="text" 
                    placeholder="Search..."
                    value={searchText}
                    onChange={handleSearchInput} />

                    <Link to="/profile">
                        <BasicPopover className='login-btn' buttonText='Profile' popoverContent='Profile options will go here' />
                    </Link>

                </div>

            )
            }



        </div>
    )
}