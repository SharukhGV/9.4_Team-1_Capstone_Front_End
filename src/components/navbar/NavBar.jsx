import {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import BasicPopover from '../../assets/mui/popover/popover'
import { Input } from '@mui/material'

import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';
import searchIcon from '../../assets/search.png';
import Auth from '../../components/auth/Auth'

export default function NavBar({user, handleLogout, handleSignIn, modal, setModal}) {
  const [searchText, setSearchText] = useState('');
  const [tab, setTab] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  
  function handleSearchInput(event) {
    //console.log(searchText)
    setSearchText(event.target.value)
  }
  return (
    <>
    <nav>
    <Link> <img src={craftopiaLogo} className='nav-logo' /> </Link>
    <Link className='explore-link'> Explore </Link>
  <div className='nav-right-container'>
    <div >
      <button className='search-btn'> <img src={searchIcon} className='search-icon' /> </button>
      <Input type='text' placeholder='Search' value={searchText} onChange={handleSearchInput} size='xsmall' sx={{ width: '140px' }} />
    </div>
         {!user && (
          <aside className='auth-btns'>
            <button
              onClick={() => {
                setModal(true)
                setTab(false)
              }}
              className='login-btn'
            >
              {' '}
              Login{' '}
            </button>
            <button
              className='signup-btn'
              onClick={() => {
                setModal(true);
                setTab(true);
              }}
            >
              {' '}
              Sign Up{' '}
            </button>
          </aside>
        )}
        {user && (
          <div className='auth-btns'>
            <Link to={`${user.username}/profile`}>
              <BasicPopover
                className='login-btn'
                buttonText='Profile'
                popoverContent='Profile options will go here'
              />
            </Link>
            <button className='logout-btn' onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        <Auth
        modal={modal}
        tab={tab}
        setModal={setModal}
        setTab={setTab}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        signedUp={signedUp}
        setSignedUp={setSignedUp}
        />
    </div>  
    </nav>
    <div className='div' />
    </>
  )
}
