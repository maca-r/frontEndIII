import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Home.jsx'
import Faqs from './Faqs.jsx'
import About from './About.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="faqs/:id" element={<Faqs/>}/>
      <Route path="about" element={<About/>}/>
    </Routes>
  </BrowserRouter>
</React.StrictMode>

)
