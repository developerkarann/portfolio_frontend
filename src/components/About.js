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
              <img src={profile} alt="" />
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
                Pursuing Bachelor Of Commerce from Hindu College Moradabad with a focus on web development
                and have gained experience in various technologies such as
                HTML, CSS, JavaScript, React.js, MongoDB, Express.js, and Node.js.. <br/>
                I am excited to leverage my knowledge and skills to create robust and
                responsive web applications using the MERN stack. I'm having a strong foundation in web development concepts and technologies,
                and I am enthusiastic about learning new skills and staying up-to-date with the latest trends
                in the industry. <br/>
                As a fresher, I am committed to working collaboratively with other developers and designers
                to deliver high-quality web applications that meet the unique needs of each client.
                I am a quick learner, and I am always willing to go the extra mile to ensure that the
                project is completed on time and to the highest standards.

              </p>
              <a href="/https://drive.google.com/file/d/14d2k17F83G5u5zj4LZlGuxSGv6IySgwV/view?usp=share_link" download="">Download CV</a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
