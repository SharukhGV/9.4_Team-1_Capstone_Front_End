import {useState, useEffect} from 'react'
import {Routes, Route, Navigate, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios'
import NavBar from './components/navbar/NavBar'
import Landing from './pages/landing/Landing'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
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
  const handleSignIn = authUser => {
    setUser(authUser)
  }
  const handleLogout = () => {
    setUser(undefined)
    axios.post(`${API}/auth/logout`, {
      withCredentials: true,
    })
  }
  useEffect(() => {
    function checkToken() {
      axios
        .post(`${API}/auth/token`, {
          withCredentials: true,
        })
        .then(res => {
          console.log(res, 'huh')
          handleSignIn(res.data.user[0])
        })
        .catch(err => {
          console.log(err)
          // setError(err.response.data.error)
          // setTimeout(()=>{setError()},3000)
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
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
