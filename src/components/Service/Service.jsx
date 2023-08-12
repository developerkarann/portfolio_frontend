import React from 'react'

export default function Service() {
  return (
    <>
      <section className="services" id="service">
        <div className="max-width">
          <h2 className="title">My Services</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                {/* <i className="fas fa-paint-brush"></i> */}
                <img src="/assets/images/services/1.png" alt="" />
                <div className="text">Front-End</div>
                <p>
                  As a frontend developer, I have extensive knowledge and experience in creating visually appealing and functional user interfaces for websites and applications. I am skilled in using programming languages such as HTML, CSS, and JavaScript, as well as libraries like React.js to create interactive and responsive designs.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                {/* <i className="fa-solid fa-server"></i> */}
                <img src="/assets/images/services/2.png" alt="" />
                <div className="text">Back-end</div>
                <p>
                  I have extensive knowledge and experience in creating the server-side logic of websites and applications. I am skilled in using programming languages such as PHP and JavaScript, as well as frameworks like Node.js.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="box">
                {/* <i className="fas fa-code"></i> */}
                <img src="/assets/images/services/3.png" alt="" />
                <div className="text">Full Stack Development</div>
                <p>As a MERN stack developer, I have extensive knowledge and experience in building full-stack web applications using the MERN technology stack, which includes MongoDB, Express.js, React, and Node.js. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
