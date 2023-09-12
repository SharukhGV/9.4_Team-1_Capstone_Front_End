import {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import BasicPopover from '../../assets/mui/popover/popover'

import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg'
import Auth from '../../components/auth/Auth'
//import Assesment from '../assesment/Assesment.jsx';

export default function NavBar({user, handleLogout, handleSignIn, modal, setModal}) {
  const [searchText, setSearchText] = useState('');
  const [tab, setTab] = useState(false);
  const [signedUp, setSignedUp] = useState(false);
  
  function handleSearchInput(event) {
    //console.log(searchText)
    setSearchText(event.target.value)
  }
  return (
    <div className='navbar'>
      <Link to='/home'>
        <img src={craftopiaLogo} alt='circ-logo' className='navbar-logo' />
      </Link>
      <aside className='search-aside'>
        <input
          type='text'
          placeholder='Search...'
          className='search-bar'
          value={searchText}
          onChange={handleSearchInput}
        />
        <button>🔎</button>
      </aside>
      <div className='navbar-btns'>
        <Link to='/home'>
          <button className='explore-btn'>Explore</button>
        </Link>
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
      </div>
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
      {/* {
        signedUp && modal && (
          <Assesment assesmentModalOpen={modal} setAssesmentModalOpen={setModal} />
        )
      } */}
    </div>
  )
}
