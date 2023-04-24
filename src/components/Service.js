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
              <i className="fas fa-paint-brush"></i>
              <div className="text">Front-End</div>
              <p>
                Creating user interface with react
              </p>
            </div>
          </div>

          <div className="card">
            <div className="box">
            <i className="fa-solid fa-server"></i>
              <div className="text">Back-end</div>
              <p>
               working with servers and DBMS
              </p>
            </div>
          </div>

          <div className="card">
            <div className="box">
              <i className="fas fa-code"></i>
              <div className="text">Full Stack Development</div>
              <p>Working with both front-end and back-end </p>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}
