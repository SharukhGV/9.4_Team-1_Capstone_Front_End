import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './navbar.css';
import { Input, Popover, MenuItem, Badge } from '@mui/material';
import { Avatar } from '@mui/joy';
import Auth from '../../components/auth/Auth';
import shoppingCartIcon from '../../assets/circularShoppingCart.png';
import CraftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Cart from '../cart/Cart';

export default function NavBar({
  user,
  handleLogout,
  handleSignIn,
  modal,
  setModal,
  posts,
  cartItems,
  removeItem,
  setGrandTotal,
}) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [categoriesPopOpen, setCategoriesPopOpen] = useState(false);
  const [sharePopOpen, setSharePopOpen] = useState(false);
  const [navCategory, setNavCategory] = useState('');
  const [tab, setTab] = useState(false);
  const categoriesBtnRef = useRef(null);
  const [cartView, setCartView] = useState(false);
  const avatarRef = useRef(null);
  const [avatarPopOver, setAvatarPopover] = useState(false);
  const [avatarAnchorEl, setAvatarAnchorEl] = useState(null);
  const shareBtnRef = useRef(null);
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

  const handleSearch = (id) => {
    setSearch('')
    setSearchResults([])
    navigate(`/post/${id}`)
  }

  const handleAvatarPopover = (event) => {
    setAvatarPopover(true);
    setAvatarAnchorEl(event.currentTarget);
  }

  function handleMenuItemNav(selectedCategory) {
    setNavCategory(selectedCategory);
    navigate(`/home/#category-nav`,
      { state: { category: selectedCategory } }
    );
  }

  return (
    <nav>
      <div className='top'>


      </div>
      <div className='navbar'>
        <div className='nav-left'>
          <Link to='/home'>
            <img
              style={{ maxWidth: '100px', maxHeight: '100px', borderRadius: '50%', width: '79px', margin: '7px' }}
              src={CraftopiaLogo}
              className='nav-logo'
              loading='lazy'
            />{' '}
          </Link>
          <aside>
            <Link to='/about' className='about-link' >
              {' '}
              About{' '}
            </Link>
            /
            <button className='categories-nav-btn' ref={categoriesBtnRef} onClick={() => setCategoriesPopOpen(true)}> <div className='nav-categories-btn-text' style={{ display: 'flex', width: 'auto', fontSize: '14px', cursor: 'pointer', alignItems: 'center', fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}> Categories <KeyboardArrowDownIcon sx={{ color: '#1a237e' }} /> </div> </button>
            <Popover open={categoriesPopOpen} sx={{ marginTop: '7px' }} anchorEl={categoriesBtnRef.current} onClose={() => setCategoriesPopOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
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
            /
            <button className='share-nav-btn' ref={shareBtnRef} onClick={() => setSharePopOpen(true)}> <div className='share-btn-text' style={{ display: 'flex', alignItems: 'center', width: 'auto', fontSize: '14px', cursor: 'pointer', fontFamily: 'Roboto, sans-serif', fontSize: '14px' }}> Share <KeyboardArrowDownIcon sx={{ color: '#1a237e' }} /> </div> </button>
            <Popover open={sharePopOpen} sx={{ marginTop: '7px' }} anchorEl={shareBtnRef.current} onClose={() => setSharePopOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left' }} >
              <MenuItem onClick={() => navigate(`/${user.username}/post/new`)}> Make a post </MenuItem>
              <MenuItem onClick={() => navigate(`/${user.username}/tools/new`)}> Make an item listing </MenuItem>
            </Popover>
          </aside>
        </div>
        <div className='nav-right'>

          <div className='search-sect'>
            <Input
              type='text'
              placeholder='Search...'
              value={search}
              onChange={handleTextChange}
              size='xsmall'
              sx={{ width: '100%', marginBottom: '-4px' }}
              inputProps={{ style: { fontSize: '17px', marginBottom: '-2px' } }}
            />
            {searchResults.length > 0 ? (
              <div className='search-results'>
                {searchResults.map((res, i) => {
                  if (i < 3) {
                    return (
                      <aside className='result-item' onClick={() => handleSearch(res.post_id)} key={uuid()}>
                        <p>{res.title}</p>
                      </aside>
                    );
                  }
                })}
                {searchResults.length - 3 >= 1 ? <p>{searchResults.length - 3} other results</p> : null}
              </div>
            ) : null}
            {/* <SearchIcon
            className='search-icon'
            fontSize='small'
            sx={{color: '#1a237e'}}
          /> */}
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
          <div className='cart-auth-buttons'>
            <aside className='aside-cart'>
              <Badge
                badgeContent={cartItems.length}
                color='error'
                onClick={() => setCartView(!cartView)}
              >
                <button className='shopping-cart' onClick={() => setCartView(!cartView)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <img src={shoppingCartIcon} style={{ maxWidth: '37px', maxHeight: '37px', borderRadius: '50%' }} />
                </button>
                {/* <ShoppingCartIcon
                  className='shopping-cart'
                  onClick={() => setCartView(!cartView)}
                /> */}
              </Badge>
              {cartView && (
                <Cart
                  setGrandTotal={setGrandTotal}
                  items={cartItems}
                  removeItem={removeItem}
                  handleClose={() => setCartView(false)}
                />
              )}
            </aside>
            {!user && (
              <aside className='auth-btns'>
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
              </aside>
            )}
            {user && (
              <div className='auth-btns' onMouseEnter={handleAvatarPopover} onMouseLeave={() => setAvatarPopover(false)}>
                <Avatar variant='soft' ref={avatarRef} />
                <Popover open={avatarPopOver} sx={{ marginTop: '4px' }} anchorEl={avatarRef.current} onClose={() => setAvatarPopover(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
                  <MenuItem onClick={() => navigate(`${user.username}/profile`)}> Profile </MenuItem>
                  <MenuItem onClick={handleLogout}> LogOut </MenuItem>
                </Popover>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

