import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './about.css'


export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About Me</h2>
          <div className="about-content">
            <div className="column left">
              <img src="/assets/images/picture.jpg" alt="" />
            </div>
            <div className="column right">
              <div className="text">
                I'm Karan Pal and I'm a <span className="typing-2">
                  <Typewriter
                    words={['JavaScript Developer', 'MERN Stack Developer', 'React JS Developer', 'Node JS Developer']}
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

                🚀 Full Stack Web Developer with expertise in MERN stack technologies.<br/>

                During a dynamic 6-month internship, I honed my skills in React.js, Node.js, MongoDB, and Express.js, becoming proficient in both frontend and backend development.

                🎨 On the frontend, I excel in crafting captivating user experiences with HTML, CSS, Tailwind CSS, JavaScript, and Redux Toolkit.

                ⚙️ On the backend, I thrive in building robust server-side solutions with Node.js, Express.js, and MongoDB database.

                Passionate about creating seamless, scalable web applications, I bring creativity, problem-solving skills, and a dedication to clean, efficient code to every project I undertake. Let's bring your ideas to life!

              </p>
              <a href="https://drive.google.com/file/d/1975wmbgZcHaqtJjSsF2_16sbfhq2oFI4/view?usp=sharing" target='_blank' >Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
