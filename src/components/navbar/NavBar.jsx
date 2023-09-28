import {useState, useRef, useEffect} from 'react';
import {Form, Link, useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid';
import './navbar.css';
import {Input, Popover, Select, MenuItem, InputLabel, FormControl, Badge, Breadcrumbs} from '@mui/material';
import craftopiaLogo2 from '../../assets/craftLogo2.png';
import Auth from '../../components/auth/Auth';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CraftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function NavBar({
  user,
  handleLogout,
  handleSignIn,
  modal,
  setModal,
  posts,
  cartItems,
  cartView,
}) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [categoriesPopOpen, setCategoriesPopOpen] = useState(false);
  const [tab, setTab] = useState(false);
  const categoriesBtnRef = useRef(null);
  // const navigate = useNavigate();
  const [navCategory, setNavCategory] = useState('');
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
            style={{maxWidth: '100px', maxHeight: '100px', borderRadius: '50%', width: '79px', margin: '7px'}}
            src={CraftopiaLogo}
            className='nav-logo'
            loading='lazy'
          />{' '}
        </Link>
      </div>
      {/* <h1 className='title'>Craftopia</h1> */}
      <div className='nav-right-container'>
        <div className='search-sect'>
          <SearchIcon
            className='search-icon'
            fontSize='small'
            sx={{color: '#1a237e'}}
          />
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
      <div className='navbar'>
      <aside>
        <button onClick={() => navigate('/about')} className='signup-btn'>
              {' '}
              About{' '}
        </button>
        <button className='categories-nav-btn' ref={categoriesBtnRef} onClick={() => setCategoriesPopOpen(true)}> Categories <KeyboardArrowDownIcon sx={{ color: '#1a237e' }}/> </button>
        <Popover open={categoriesPopOpen} anchorEl={categoriesBtnRef.current} onClose={() => setCategoriesPopOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}} transformOrigin={{ vertical: 'top', horizontal: 'left'}}>
          <MenuItem onClick={() => handleMenuItemNav('All')}> All Posts & Tools </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Photography')}> Photography </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Ceramics')}> Ceramics </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Painting')}> Painting </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Graffiti')}> Graffiti </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Printmaking')}> Printmaking </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Filmmaking')}> Filmmaking </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Fashion Design')}> Fashion Design </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Drawing')}> Drawing </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Digital Artistry')}> Digital Artistry </MenuItem>
          <MenuItem onClick={() => handleMenuItemNav('Sculpting')}> Sculpting </MenuItem>
        </Popover>
          </aside>
          <div className='cart-auth-buttons'>
            <aside className='aside-cart'>
              <Badge
                badgeContent={cartItems.length}
                color='error'
                onClick={() => setCartView(!cartView)}
              >
                <ShoppingCartIcon
                  className='shopping-cart'
                  onClick={() => setCartView(!cartView)}
                />
              </Badge>
              {cartView && (
                <Cart
                  items={cartItems}
                  removeItem={removeItem}
                  handleClose={() => setCartView(false)}
                />
              )}
            </aside>
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
                {/* > */}
                <Link to={`${user.username}/profile`}>
                  <button className='login-btn'>Profile</button>
                  {/* <BasicPopover
                className='login-btn'
                buttonText='Profile'
                popoverContent='Profile options will go here'
              /> */}
                </Link>
                <button className='login-btn' onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
      </div>
    </nav>
  );
}

