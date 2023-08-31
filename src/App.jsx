import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Landing from './pages/landing/Landing';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          {/* change to lowercase home if issue */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
