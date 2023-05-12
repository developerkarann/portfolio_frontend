import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

export default function Navbar() {
  
  const burger = ()=>{
    const menu = document.querySelector('.menu');
    const i = document.querySelector('.fa-bars');
    menu.classList.toggle('active');
    i.classList.toggle('active');
  }

  return (
    <>
       <nav className="navbar">
      <div className="max-width">
        <div className="logo" id="">
          <Link to="/"> 
          <Typewriter
                words={['Karan Pal.',]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={2000}
              />
          <span> </span> </Link>
        </div>
        <ul className="menu">
          <li><Link to="/" className="menu-btn">Home</Link></li>
          <li><Link to="/about" className="menu-btn">About</Link></li>
          <li><Link to="/service" className="menu-btn">Service</Link></li>
          <li><Link to="/skills" className="menu-btn">Skills</Link></li>
          <li><Link to="/projects" className="menu-btn">Projects</Link></li>
          <li><Link to="/contact" className="menu-btn">Contact</Link></li>
        </ul>
        <div className="menu-btn">
          <i className="fas fa-bars" onClick={burger}> </i>
        </div>
      </div>
    </nav>
    </>
  )
}
