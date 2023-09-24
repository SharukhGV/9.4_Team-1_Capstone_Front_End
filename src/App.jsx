import {useState, useEffect} from 'react';
import {Routes, Route, Navigate, Outlet} from 'react-router-dom';
import {useCookies} from 'react-cookie';
import axios from 'axios';

import NavBar from './components/navbar/NavBar';
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
import PostPreview from './components/posts/PostPreview';
import About from './pages/about/About';

import ArtistsGraphic from './assets/artistsgraphic.jpg';

import './App.css';
import ToolsUsers from './components/tools/ToolsUsers';

const API = import.meta.env.VITE_REACT_APP_API_URL;

const ProtectedRoute = ({user, redirectPath = '/'}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

function App() {
  const [modal, setModal] = useState(false);
  const [tab, setTab] = useState(false);
  const [user, setUser] = useState(undefined);
  const [cookies, removeCookie] = useCookies();
  const [error, setError] = useState();
  const [userHobbyInterest, setUserHobbyInterest] = useState(''); 
  const [userCurrentHobby, setUserCurrentHobby] = useState(''); 
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [posts, setposts] = useState([]);
  const [currentPost, setCurrentPost] = useState(0);

  useEffect(() => {
    const getPosts = () => {
    axios.get(`${API}/posts`)
    .then((response) => {
      const allPosts = response.data;
      const theVisiblePosts = [
        allPosts[(currentPost - 1 + allPosts.length) % allPosts.length],
        allPosts[currentPost],
        allPosts[(currentPost + 1) % allPosts.length],
        allPosts[(currentPost + 2) % allPosts.length],
        allPosts[(currentPost + 3) % allPosts.length],
      ];
      setVisiblePosts(theVisiblePosts);
      setposts(response.data);
    })
    .catch(error => console.error('catch', error))
  }
  getPosts();
}, [currentPost, API]);

  useEffect(() => {
    checkToken();
  }, []);

  const handleSignIn = authUser => {
    setUser(authUser);
  };

  const handleLogout = () => {
    setUser(undefined);
    axios.post(`${API}/auth/logout`);
    removeCookie('token');
  };
  function checkToken() {
    if(cookies.token){
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
        // console.log(err);
        setError(err);
        setTimeout(() => {
          setError();
        }, 3000);
      });
    }
  }

  function prevSlide() {
    setCurrentPost(prevPost =>
      prevPost === 0 ? posts.length - 1 : prevPost - 1
    );
  } 

  function nextSlide() {
    setCurrentPost(prevPost =>
      prevPost === posts.length - 1 ? 0 : prevPost + 1
    );
  } 

  return (
    <div className='App'>
      <NavBar
        user={user}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        modal={modal}
        setModal={setModal}
        tab={tab}
        setTab={setTab}
      />
      <main>
        <Routes>
          <Route
            path='/'
            element={<Landing modal={modal} setModal={setModal} posts={posts} visiblePosts={visiblePosts} setCurrentPost={setCurrentPost} ArtistsGraphic={ArtistsGraphic} prevSlide={prevSlide} nextSlide={nextSlide} />}
          />
          <Route path='/about' element={<About />} />
          <Route path='/home' element={<Home user={user} userHobbyInterest={userHobbyInterest} setUserHobbyInterest={setUserHobbyInterest} setUserCurrentHobby={setUserCurrentHobby} userCurrentHobby={userCurrentHobby} ArtistsGraphic={ArtistsGraphic} prevSlide={prevSlide} nextSlide={nextSlide} />} />
          <Route path='/post/:id' element={<Post />} />
          {/* create public profile view for outside viewers */}
          <Route path='/tools' element={<ToolsDetails />} />
          <Route path='/tools/:id' element={<ToolsUserDetails />} />
          <Route element={<ProtectedRoute user={user} />}>
          {/* <Route path='/home/:username' element={<Home user={user} />} /> */}
            <Route path='/:username/post/:id' element={<Post user={user} />} />
            <Route
              path='/:username/post/new'
              element={<NewPost user={user} />}
            />
            <Route
              path='/:username/post/preview'
              element={<PostPreview user={user} />}
            />
            <Route
              path='/:username/post/new'
              element={<NewPost user={user} />}
            />
            <Route
              path='/:username/profile'
              element={<Profile user={user} userCurrentHobby={userCurrentHobby} userHobbyInterest={userHobbyInterest} />}
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
              element={<ToolsUserDetails user={user} />}
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
