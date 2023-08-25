import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';

function App() {

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Home' element={<Home />} />
          {/* change to lowercase home if issue */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
