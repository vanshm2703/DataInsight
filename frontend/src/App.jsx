import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import RetailerDashboard from './pages/retailer'

function App() {
  // Initialize darkMode as true
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/" element={<Landing/>} />
          <Route path="/retailer" element={<RetailerDashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;