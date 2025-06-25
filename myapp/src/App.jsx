import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Register from './components/Register' 
import { Routes, Route } from 'react-router-dom'  
import MyAppBar from './components/MyAppbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyAppBar />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
