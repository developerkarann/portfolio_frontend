import React from 'react'
import { Link } from 'react-router-dom'
// import { Typewriter } from 'react-simple-typewriter'
import './navbar.css'

export default function Navbar() {

  const burger = () => {
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
            <Link to="/"> Karan Pal <span> </span> </Link>
          </div>
          <ul className="menu">
            <li onClick={burger}><Link to="/" className="menu-btn">Home</Link></li>
            <li onClick={burger}><Link to="/about" className="menu-btn">About</Link></li>
            <li onClick={burger}><Link to="/service" className="menu-btn">Service</Link></li>
            <li onClick={burger}><Link to="/skills" className="menu-btn">Skills</Link></li>
            <li onClick={burger}><Link to="/projects" className="menu-btn">Projects</Link></li>
            <li onClick={burger}><Link to="/contact" className="menu-btn">Contact</Link></li>
            <li onClick={burger}><Link to="/certifications" className="menu-btn">Certifications</Link></li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars" onClick={burger}> </i>
          </div>
        </div>
      </nav>
    </>
  )
}
