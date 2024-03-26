import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

import Service from '../Service/Service';
import Skills from '../Skills/Skills';
import About from '../About/About'
import Contact from '../Contact/Contact'
import ProjectsSection from '../Projects/ProjectsSection';
import './home.css';


export default function Home() {


  return (
    <div>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home_section">
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
              <Link to="/contact">Lets connect</Link>
            </div>
            <div className="right_side">
              <div className="box">
                <div className="border"></div>
                <img src="/assets/images/krn.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <ProjectsSection />
      <Skills />
      <Service />
      <Contact />
    </div>
  )
}
