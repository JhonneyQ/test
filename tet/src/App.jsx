import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Client from './client/outlet';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes >
        <Route path="/" element={<Client />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
