import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Route path='login' element={<Login/>}/>
     <Route path='register' element={<Register/>}/>
     <Route path='home' element={<Home/>}/>
    </>
  )
}

export default App
