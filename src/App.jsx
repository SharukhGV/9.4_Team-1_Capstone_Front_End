import craftopiaLogo from './assets/Craftopia-Circular-Logo.svg';
import ArtistsGraphic from './assets/artistsgraphic.jpg';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Auth from './components/auth/Auth';
//import Home from './pages/home'; //FAILS TO IMPORT ??!!

function App() {

  return (
    <div className='App'>
      <Auth craftopiaLogo={craftopiaLogo} />
      <header>
        <div className='header-branding'>
        <img className='home-logo' src={craftopiaLogo} alt='craftopia logo' />
        <h2> Ignite Your Creativity, Equip Your Creativity </h2>
        <h4> Explore Gear & Community to Cultivate Inspired Artistry </h4>
        </div>
        <img src={ArtistsGraphic} className='artists-graphic' />
      </header>
      <main>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}




        </Routes>
      </main>
    </div>
  )
}

export default App
