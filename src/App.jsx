import {useState, useEffect} from 'react'
import {Routes, Route, Navigate, useNavigate, Outlet} from 'react-router-dom';
import {useCookies} from 'react-cookie'
import axios from 'axios'
import NavBar from './components/navbar/NavBar'
import Landing from './pages/landing/Landing'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import ProfileEdit from './pages/profile/ProfileEdit'
import './App.css'
const API = import.meta.env.VITE_REACT_APP_API_URL

const ProtectedRoute = ({user, redirectPath = '/'}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}

function App() {
  const [modal, setModal] = useState(false);
  const [user, setUser] = useState(undefined)
  const [cookies,removeCookie] = useCookies()
  const [error,setError] = useState()
  const handleSignIn = authUser => {
    setUser(authUser)
  }
  const handleLogout = () => {
    setUser(undefined)
    removeCookie('token')
  }
  useEffect(() => {
    function checkToken() {
      axios
        .post(`${API}/auth/token`, {cookie:cookies.token}, {
          withCredentials: true,
        })
        .then(res => {
          handleSignIn(res.data.user)
        })
        .catch(err => {
          console.log(err)
          setError(err)
          setTimeout(()=>{setError()},3000)
        })
    }
    checkToken()
  }, [])
  return (
    <div className='App'>
      <NavBar
        user={user}
        handleLogout={handleLogout}
        handleSignIn={handleSignIn}
        modal={modal}
        setModal={setModal}
      />
      <main>
        <Routes>
          <Route path='/' element={<Landing modal={modal} setModal={setModal} />} />
          <Route path='/home' element={<Home />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route
              path='/:username/profile'
              element={<Profile user={user} />}
            />
            <Route
              path='/:username/profile/edit'
              element={<ProfileEdit user={user}/>}/>
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
