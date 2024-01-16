import React, { useState } from 'react'
import "./navbar.css";
import { Link } from 'react-scroll';
import logo from "../../assets/logo-dark.png";
import { IoIosCall } from "react-icons/io";
import { AiOutlineMenu } from "react-icons/ai";
import { MenuItems } from './MenuItems';


function Navbar() {
  const menuItems = MenuItems;
  const [open, setopen] = useState(false);
  const [activeNav, setActiveNav] = useState(menuItems.url)
  // const [activeClass, setActiveClass] = useState(menuItems.cName)

  const handleOpen = () => {
    setopen(!open)
  }
  // const handleActiveNav = () => {
  //   setActiveNav(menuItems.url)
  // }


  return (
    <header className='navbar_main'>
      <nav className='NavbarItems'>
        <div className='nav_logosection'>
          <img src={logo} alt="logo" />
          {/* <div className='nav_menudiv'>
                    <AiOutlineMenu className='nev_menu' onClick={() => setopen(!open)} />
                </div> */}
          <div className="menu-icons" onClick={() => setopen(!open)}>
            <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
        {/* <div className={open ? "nav_listsection active" : "nav_listsection"}> */}
        <ul className={open ? "nav-menu active" : "nav-menu"}>

          <li className='nav_item'>
            <Link
              activeClass="active"
              // className='scroll_link'
              to="/"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setActiveNav('#home')} 
              className={activeNav === '#home' ? 'active' : ''}
              >Activities</Link></li>

          <li className='nav_item'>
            <Link
              activeClass="active"
              className='scroll_link'
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setActiveNav('#about')} 
              // className={activeNav === '#about' ? 'active' : ''}
              >About</Link></li>

          {/* <li className='nav_item'>
            <Link
              activeClass="#active"
              className='scroll_link'
              to="experience"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setActiveNav('#about')} 
              // className={activeNav === '#' ? 'active' : ''}
              >Experience</Link></li> */}

          <li className='nav_item'>
            <Link
              activeClass="active"
              className='scroll_link'
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setActiveNav('#service')} 
              // className={activeNav === '#service' ? 'active' : ''}
              >Our Projects</Link></li>

        


          <li className='nav_item'>
            <Link
              activeClass="active"
              className='scroll_link'
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setActiveNav('#contact')} 
              // className={activeNav === '#contact' ? 'active' : ''}
              >Contact Us</Link></li>
              
          <li className='nav_item'>
            <Link
              activeClass="active"
              className='scroll_link'
              to="process"
              spy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={() => setActiveNav('#process')} 
              // className={activeNav === '#process' ? 'active' : ''}
              >Process</Link></li>


          {/* <li className='nav_item'><a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a></li>
          <li className='nav_item'><a href="#service" onClick={() => setActiveNav('#service')} className={activeNav === '#service' ? 'active' : ''}>Service </a></li>
          <li className='nav_item'><a href={"/"}>Team</a></li>
          <li className='nav_item'><a href={"/"}>Price</a></li>
          <li className='nav_item'><a href={"/"}>Contact</a></li> */}
          {/* <li className='nav_item'><a href={"/"}> <span className='phn_cls'> <IoIosCall />123456789</span></a></li> */}

        </ul>
        {/* </div> */}
      </nav>
    </header>



    // <nav  className="NavbarItems">
    //   <h1 className="navbar-logo"><img src={logo} alt="logo" /></h1>
    //   <div className="menu-icons" onClick={() => setopen(!open)}>
    //     <i className={open ? "fas fa-times" : "fas fa-bars"}></i>
    //   </div>
    //   <ul className={open ? "nav-menu active" : "nav-menu"}>
    //     {MenuItems.map((item, index) => {
    //       return (

    //         <li key={index} className={item.cName}><a href={item.url} onClick={()=>{setActiveNav(item.url)}} className={activeNav === item.url ? 'active' : ''} > <i className={item.icon}></i> {item.title}</a></li>

    //       )
    //     })}

    //     {/* <button>Sign Up</button> */}
    //   </ul>
    // </nav>
  );


}

export default Navbar