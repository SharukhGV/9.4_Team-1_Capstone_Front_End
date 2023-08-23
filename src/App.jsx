import { Routes, Route } from 'react-router-dom';
import './App.css';
import Landing from './pages/landing/Landing';

function App() {

  return (
    <div className='App'>
      <main>
        <Routes>
          <Route path='/' element={<Landing />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
