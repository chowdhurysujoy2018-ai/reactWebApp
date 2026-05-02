import React, { useEffect, useState } from "react";
import { NavLink, Link } from 'react-router-dom'
import Button from '../Button'
import headerLogo from '../../assets/images/logo.png'

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // ✅ If page scrolls even 1px, set true
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`py-1 fixed z-50 top-0 left-0 w-full transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
        <div className='custom-container flex justify-between gap-2 items-center'>
            <Link to="/"><img src={headerLogo} alt="header logo" className="max-h-[90px]" /></Link>      
            <div className='flex-1 flex items-center justify-end gap-x-10'>
                <nav className='flex gap-x-10'>
                  <NavLink to="/">Home</NavLink>
                  <NavLink to="/services">Services</NavLink>
                  <NavLink to="/solutions">Solutions</NavLink>
                  <NavLink to="/about">About</NavLink>
                  <NavLink to="/careers">Careers</NavLink>
                  <NavLink to="/contact">Contact</NavLink>
                </nav>
               <Button buttonText="Schedule a Meeting" className="px-[10px] py-[6px] bg-[#1d4d16] rounded-[5px] text-[#fff]"/>
            </div>
        </div>
    </header>
  )
}
export default Layout