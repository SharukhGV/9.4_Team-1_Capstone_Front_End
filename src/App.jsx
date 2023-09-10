import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import axios from 'axios'
import './App.css'
import NavBar from './components/navbar/NavBar'
import Landing from './pages/landing/Landing'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
const API = import.meta.env.VITE_REACT_APP_API_URL
function App() {
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
      console.log('what')
      // const cookieValue = document.cookie
      //   .split('; ')
      //   .find(row => row.startsWith('checkToken='))
      //   .split('=')[1]
      if (true) {
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
      }else {
        setUser()
      }
    }
    checkToken()
  }, [])
  return (
    <div className='App'>
      <NavBar user={user} handleLogout={handleLogout} handleSignIn={handleSignIn}/>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
