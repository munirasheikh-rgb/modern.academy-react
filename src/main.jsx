import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/set.css"
import "./styles/layout.css"
import "./styles/responsive.css"
import './index.css'
import App from './App.jsx'
import {BrowserRouter,Routes, Route}from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
  </StrictMode>,
)
