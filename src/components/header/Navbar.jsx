import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import NotFound from '../../pages/NotFound'
import Services from '../../pages/Services'
import Solutions from '../../pages/Solutions'
import Careers from '../../pages/Careers'
import Contact from '../../pages/Contact'
import Layout from './Layout'
import Footer from '../Footer'

const Navbar = () => {
  return (
    <BrowserRouter>
        <Layout />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/solutions' element={<Solutions />} />
            <Route path='/about' element={<About />} />
            <Route path='/careers' element={<Careers />} /> 
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default Navbar