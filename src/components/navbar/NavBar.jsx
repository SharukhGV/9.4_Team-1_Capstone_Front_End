import {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import BasicPopover from '../../assets/mui/popover/popover';
import {Input} from '@mui/material';
import craftopiaLogo from '../../assets/craftLogo.png';
import craftopiaLogo2 from '../../assets/craftLogo2.png';
import craftEmpty from '../../assets/craftLogoempty.png';
import searchIcon from '../../assets/search.png';
import Auth from '../../components/auth/Auth';

export default function NavBar({
  user,
  handleLogout,
  handleSignIn,
  modal,
  setModal,
}) {
  const [searchText, setSearchText] = useState('');
  // const [signedUp, setSignedUp] = useState(false);
  const [tab, setTab] = useState(false);
  function handleSearchInput(event) {
    setSearchText(event.target.value);
  }
  return (
    <nav>
      <div className='top-left'>
        <Link to='/home'>
          {' '}
          <img style={{maxWidth:"100px",maxHeight:"100px"}} src={craftopiaLogo2} className='nav-logo' />{' '}
        </Link>
        <Link className='about-link' to='/about' >
          {' '}
          About{' '}
        </Link>
      </div>
      <div className='nav-right-container'>
        <div>
          <button className='search-btn'> <img src={searchIcon} className='search-icon' /> </button>
          <Input type='text' placeholder='Search...' value={searchText} onChange={handleSearchInput} size='xsmall' sx={{width: '190px', marginBottom: '-4px'}} inputProps={{ style: { fontSize: '17px', marginBottom: '-2px' }}} />
        </div>
        {!user && (
          <aside className='auth-btns'>
            <button
              onClick={() => {
                setModal(true);
                setTab(false);
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
            <button className='logout-btn' >
              Profile
            </button>
              {/* <BasicPopover
                className='login-btn'
                buttonText='Profile'
                popoverContent='Profile options will go here'
              /> */}
            </Link>
            <button className='logout-btn' onClick={handleLogout}>
              Logout
            </button>
          </div>
        )}
        <Auth
          user={user}
          modal={modal}
          tab={tab}
          setTab={setTab}
          setModal={setModal}
          handleLogout={handleLogout}
          handleSignIn={handleSignIn}
        />
      </div>
    </nav>
  );
}
