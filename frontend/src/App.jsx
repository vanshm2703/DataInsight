import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
     <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
