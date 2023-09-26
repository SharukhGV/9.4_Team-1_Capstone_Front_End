import {useState} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import {Input} from '@mui/material';
import craftopiaLogo2 from '../../assets/craftLogo2.png';
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
  const [tab, setTab] = useState(false);
  function handleSearchInput(event) {
    setSearchText(event.target.value);
  }
  return (
    <nav>
      <div className='top-left'>
        <Link to='/home'>
          {' '}
          <img
            style={{maxWidth: '100px', maxHeight: '100px'}}
            src={craftopiaLogo2}
            className='nav-logo'
          />{' '}
        </Link>
        {/* <Link className='about-link' to='/about'>
            {' '}
            About{' '}
          </Link> */}
      </div>
      <h1 className='title'>Craftopia</h1>
      <div className='nav-right-container'>
        <div>
          {/* <img src={searchIcon} className='search-icon' /> */}
          <Input
            type='text'
            placeholder='Search...'
            value={searchText}
            onChange={handleSearchInput}
            size='xsmall'
            sx={{width: '190px', marginBottom: '-4px'}}
            inputProps={{style: {fontSize: '17px', marginBottom: '-2px'}}}
          />
        </div>
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
