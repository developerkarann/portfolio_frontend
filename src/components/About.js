import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import profile from '../img/picture.jpg'

export default function About() {
  return (
    <>
    <section className="about" id="about">
      <div className="max-width">
        <h2 className="title">About Me</h2>
        <div className="about-content">
          <div className="column left">
            <img src={profile}alt="" />
          </div>
          <div className="column right">
            <div className="text">
              I'm Karan Pal and I'm a <span className="typing-2"> 
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
            <p>
              Hello! I am pursuing graduation with Commerce. I am excited to
              begin my career as a full stack web developer and have been
              actively learning and building projects on my own to gain
              experience in front-end and back-end development. and am excited
              to apply my passion for web development to real-world projects and
              challenges. I am a quick learner and am committed to delivering
              high-quality work.
            </p>
            <a href="/Resume.pdf" download="">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
