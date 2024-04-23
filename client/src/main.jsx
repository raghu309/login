import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/Auth/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from './components/Auth/Signup.jsx'
import Home from './components/Home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/home" element={<Home />}/>
    </Routes>
  </BrowserRouter>
)
