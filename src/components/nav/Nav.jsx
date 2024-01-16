import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { BiMessageSquare } from 'react-icons/bi'


const Nav = () => {

const [activeNav , setActiveNav] = useState('#')
  
  return (
    <>
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav==='#'  ? 'active' : ''}>Home </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Service</a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact </a>
    </nav>
    </>
  )
}

export default Nav
