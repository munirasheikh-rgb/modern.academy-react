import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Academics from './components/pages/Academics'
import Portal from './components/pages/Portal'
import Contacts from './components/pages/Contacts'
import Events from './components/pages/portal/Events'
import Login from './components/pages/portal/Login'
import Dashboard from './components/pages/portal/Dashboard'
import Profile from './components/pages/portal/profile'
import Results from './components/pages/portal/Result'
function App() {
  

  return (
 <>
<Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academics" element={<Academics />} />
      <Route path="/contacts" element={<Contacts />} />

      <Route path="/portal" element={<Login />} />

      <Route path="/portal" element={<Portal/>} />
        <Route path="dashboard" element={<Dashboard/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="results" element={<Results/>} />
        <Route path="event" element={<Events/>} />
      <Route/>  
    </Routes>
  
 
 <Footer />
 
 </>
  )
      
}
export default App
