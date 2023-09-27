import {useState, useEffect} from 'react';
import {
  Routes,
  Route,
  Navigate,
  Outlet,
  useNavigate,
  Link,
} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import axios from 'axios';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import NavBar from './components/navbar/NavBar';
import Cart from './components/cart/Cart';
import Landing from './pages/landing/Landing';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import ProfileEdit from './pages/profile/ProfileEdit';
import Post from './components/posts/Post';
import ToolsEditForm from './components/tools/ToolsEditForm';
import ToolsNewForm from './components/tools/ToolsNewForm';
import ToolsDetails from './components/tools/ToolsDetails';
import ToolsUserDetails from './components/tools/ToolsUserDetails';
import NewPost from './components/posts/NewPost';
import About from './pages/about/About';

import ArtistsGraphic from './assets/artistsgraphic.jpg';

import './App.css';
import ToolsUsers from './components/tools/ToolsUsers';
import {Badge} from '@mui/material';

const API = import.meta.env.VITE_REACT_APP_API_URL;

const ProtectedRoute = ({user, redirectPath = '/'}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

function App() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies();
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState(false);
  const [user, setUser] = useState(undefined);
  const [error, setError] = useState();
  const [cartView, setCartView] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [posts, setposts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [dataLoader, setDataLoader] = useState(true);
  const [postsCategorized, setPostsCategorized] = useState({
    Painting: [],
    Drawing: [],
    Photography: [],
    Ceramics: [], 
    Sculpting: [],
    Printmaking: [],
    Graffiti: [],
    'Fashion Design': [],
    Filmmaking: [],
    'Digital Artistry': [],
  });

  useEffect(() => {
    const getPosts = () => {
      axios
        .get(`${API}/posts`)
        .then(response => {
          const allPosts = response.data;
          let updatedFilteredPosts = {};
          for (let category in postsCategorized) {
            const filteredPosts = allPosts.filter(
              post => post.category.toLowerCase() == category.toLowerCase()
            );
            updatedFilteredPosts[category] = filteredPosts;
          }
          setposts(response.data);
          setPostsCategorized(updatedFilteredPosts);

          function confirmFilteredData() {
            for (let category in postsCategorized) {
              if (category.length > 1) {
                setDataLoader(false);
              } else if (category.length < 1) {
                setDataLoader(true);
              }
            }
          }
          if (dataLoader === true) {
            confirmFilteredData();
          }
        })
        .catch(error => console.error('catch', error));
    };
    getPosts();
  }, []);

  useEffect(() => {
    checkToken();
    getCart();
  }, []);

  useEffect(() => {
    if (cartItems) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const getCart = () => {
    if (localStorage.getItem('cart')) {
      setCartItems(JSON.parse(localStorage.getItem('cart')));
    }
  };

  const addToCart = tool => {
    setCartItems([...cartItems, tool]);
  };

  const removeItem = i => {
    const updatedCart = [...cartItems];
    updatedCart.splice(i, 1);
    setCartItems(updatedCart);
  };

  const handleSignIn = authUser => {
    setUser(authUser);
  };

  const handleLogout = () => {
    setUser(undefined);
    axios.post(`${API}/auth/logout`);
    removeCookie('token');
  };
  
  function checkToken() {
    if (cookies.token !== undefined) {
      axios
        .post(
          `${API}/auth/token`,
          {cookie: cookies.token},
          {
            withCredentials: true,
          }
        )
        .then(res => {
          handleSignIn(res.data.user);
        })
        .catch(err => {
          setError(err);
          setTimeout(() => {
            setError();
          }, 3000);
        });
    }
  }

  return (
    <div className='App'>
      <header>
        <NavBar
          user={user}
          handleLogout={handleLogout}
          handleSignIn={handleSignIn}
          modal={modal}
          setModal={setModal}
          tab={tab}
          setTab={setTab}
          posts={posts}
          dataLoader={dataLoader}
          searchResults={searchResults}
          setSearchResults={setSearchResults}
        />
        <div>
          {/* <Box>
        {
            searchResults.length > 0 ? (
              <div>
                {
                  searchResults.map((result) => (
                    <div>
                      {result.name}
                    </div>
                  ))
                }
              </div>
            ) : (null)
          }
          </Box> */}
        </div>
        <div className='navbar'>
          <aside>
            {/* <Link to='/about' className='about-link'> About </Link> */}
            <button onClick={() => navigate('/about')} className='signup-btn'>
              {' '}
              About{' '}
            </button>
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
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <Landing
                modal={modal}
                setModal={setModal}
                posts={posts}
                ArtistsGraphic={ArtistsGraphic}
                postsCategorized={postsCategorized}
                dataLoader={dataLoader}
              />
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/post/:id' element={<Post />} />
          {/* create public profile view for outside viewers */}
          <Route path='/tools' element={<ToolsDetails />} />
          <Route path='/tools/:id' element={<ToolsUserDetails />} />
          <Route element={<ProtectedRoute user={user} />}>
            {/* <Route path='/home/:username' element={<Home user={user} />} /> */}
            <Route path='/:username/post/:id' element={<Post user={user} />} />
          <Route
            path='/home'
            element={
              <Home
                user={user}
                postsCategorized={postsCategorized}
                ArtistsGraphic={ArtistsGraphic}
                dataLoader={dataLoader}
                updateUser={handleSignIn}
              />}/>
            <Route
              path='/:username/post/new'
              element={<NewPost user={user} />}
            />
            <Route
              path='/:username/post/new'
              element={<NewPost user={user} />}
            />
            <Route
              path='/:username/profile'
              element={<Profile user={user} />}
            />
            <Route
              path='/:username/profile/edit'
              element={<ProfileEdit user={user} refreshUser={checkToken} />}
            />
            <Route
              path='/:username/tools'
              element={<ToolsUsers user={user} />}
            />
            <Route
              path='/:username/tools/new'
              element={<ToolsNewForm user={user} />}
            />

            <Route
              path='/:username/tools/:tools_id'
              element={<ToolsDetails addToCart={addToCart} />}
            />

            <Route
              path='/:username/tools/:tools_id/edit'
              element={<ToolsEditForm user={user} />}
            />
          </Route>
          <Route path='/post/:id' element={<Post />} />
          {/* create public profile view for outside viewers */}
          {/* <Route path='/tools' element={<Tools />} />
          <Route path='/tools/:tools_id' element={<ToolsUserDetails />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
