import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import './navbar.css';
import {Input, Box, Dialog, DialogContent} from '@mui/material';
import craftopiaLogo2 from '../../assets/craftLogo2.png';
//import CraftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';
import Auth from '../../components/auth/Auth';
import SearchIcon from '@mui/icons-material/Search';

export default function NavBar({
  user,
  handleLogout,
  handleSignIn,
  modal,
  setModal,
  posts
}) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [tab, setTab] = useState(false);
  const handleTextChange = e => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const allPosts = [...posts];
    const filterSearch = allPosts.filter(
      post => post.title.toLowerCase().includes(search) || post.created_by.toLowerCase().includes(search)
    );
    if (filterSearch.length === allPosts.length) {
      setSearchResults([]);
    } else {
      setSearchResults(filterSearch);
    }
  }, [search]);

  const handleSearch=(id)=>{
    setSearch('')
    setSearchResults([])
    navigate(`/post/${id}`)
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
      </div>
      <h1 className='title'>Craftopia</h1>
      <div className='nav-right-container'>
        <div className='search-sect'>
          {/* <SearchIcon
            className='search-icon'
            fontSize='small'
            sx={{color: '#1a237e'}}
          /> */}
          <Input
            type='text'
            placeholder='Search...'
            value={search}
            onChange={handleTextChange}
            size='xsmall'
            sx={{width: '100%', marginBottom: '-4px'}}
            inputProps={{style: {fontSize: '17px', marginBottom: '-2px'}}}
          />
          {searchResults.length > 0 ? (
            <div className='search-results'>
              {searchResults.map((res, i) => {
                if (i < 3) {
                  return (
                    <aside className='result-item' onClick={()=>handleSearch(res.post_id)} key={uuid()}>
                      <p>{res.title}</p>
                    </aside>
                  );
                }
              })}
              {searchResults.length - 3>=1?<p>{searchResults.length - 3} other results</p>:null}
            </div>
          ) : null}
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
