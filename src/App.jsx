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

import './App.css';

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
            element={<Landing modal={modal} setModal={setModal} />}
          />
          <Route path='/home' element={<Home user={user} />} />
          <Route path='/post/:id' element={<Post />} />
          <Route element={<ProtectedRoute user={user} />}>
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
              element={<Profile user={user} />}
            />
            <Route
              path='/:username/profile/edit'
              element={<ProfileEdit user={user} refreshUser={checkToken} />}
            />
            <Route
              path='/:username/tools/'
              element={<ToolsDetails user={user} />}
            />
            <Route
              path='/:username/tools/new'
              element={<ToolsNewForm user={user} />}
            />

            <Route
              path='/:username//tools/:id'
              element={<ToolsUserDetails user={user} />}
            />

            <Route
              path='/:username/tools/:id/edit'
              element={<ToolsEditForm user={user} />}
            />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
