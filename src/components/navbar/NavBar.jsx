import {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import craftopiaLogo from '../../assets/Craftopia-Circular-Logo.svg'
import Auth from '../../components/auth/Auth'

export default function NavBar({user, handleLogout, handleSignIn}) {
  const [searchText, setSearchText] = useState('')

  function handleSearchInput(event) {
    console.log(searchText)
    setSearchText(event.target.value)
  }
  return (
    <div className='navbar'>
        <div>
          <Link to='/'>
            <img src={craftopiaLogo} alt='circ-logo' className='navbar-logo' />
          </Link>
          <Link to='/home'>
            <button className='explore-btn'>Explore</button>
          </Link>
          <input
            type='text'
            placeholder='Search...'
            value={searchText}
            onChange={handleSearchInput}
          />
          <Auth
            authUser={user}
            craftopiaLogo={craftopiaLogo}
            handleLogout={handleLogout}
            handleSignIn={handleSignIn}
          />
          
        </div>
    </div>
  )
}
