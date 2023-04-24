import React from 'react'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'

export default function Home() {


  return (
    <>
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello , my name is</div>
            <div className="text-2">Karan Pal</div>
            <div className="text-3">And I'm a <span className="typing">
              <Typewriter
                words={['JavaScript Developer', 'MERN Stack Developer', 'React Developer', 'Node Developer']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            </div>
            <Link to="/contact">Hire me</Link>
          </div>
        </div>
      </section>
    </>
  )
}
