import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

import Service from './Service';
import Skills from '../components/Skills';
import About from '../components/About'
import Contact from '../components/Contact'
import Projects from '../components/Projects';


export default function Home() {


  return (
    <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello , my self</div>
            <div className="text-2">Karan Pal</div>
            <div className="text-3">And I'm a <Typewriter
              words={['JavaScript Developer', 'MERN Stack Developer', 'React Developer', 'Node Developer']}
              loop={5}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            /> <span className="typing"> </span>
            </div>
            <Link to="/contact">Hire me</Link>
          </div>
        </div>
      </section>

      <About/>
      <Service/>
      <Skills/>
      <Projects/>
      <Contact/>
      
    </>
  )
}
