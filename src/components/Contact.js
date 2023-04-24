import React from 'react'

export default function Contact() {
  return (
  <>
   <section className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact Me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get In Touch</div>
            <p>
              Here are my details which can help you to connect with me!
            </p>
            <div className="icons">
              <div className="row">
                <i className="fas fa-user"></i>
                <div className="info">
                  <div className="head">Name</div>
                  <div className="sub-title">Karan Pal</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-map-marker-alt"></i>
                <div className="info">
                  <div className="head">Address</div>
                  <div className="sub-title">Bilari, Moradabad Up , India</div>
                </div>
              </div>
              <div className="row">
                <i className="fas fa-envelope"></i>
                <div className="info">
                  <div className="head">Email</div>
                  <div className="sub-title">karanpal03040@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          <div className="column right">
            <div className="text">Message Me</div>
            <form action="/portfolio/index.php" method="post">
              <div className="fields">
                <div className="field name">
                  <input type="text" placeholder="Name" name="name" required />
                </div>
                <div className="field email">
                  <input type="email" placeholder="E-mail" name="email" />
                </div>
              </div>
              <div className="field sub">
                <input type="text" placeholder="Subject" name="subject" />
              </div>
              <div className="field textarea">
                <textarea
                  cols="30"
                  rows="10"
                  placeholder="Describe Project..."
                  name="description"
                  required
                ></textarea>
              </div>
              <div className="button">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}
