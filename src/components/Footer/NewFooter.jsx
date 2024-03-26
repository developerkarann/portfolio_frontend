import React from 'react'
import './newfooter.css'

export default function NewFooter() {
    return (
        <>
            <section id="footer" style={{ padding: '0' }} >
                <div class="main-footer">
                    <div class="logoinfo" data-aos="fade-up">

                        <div class="contact-details">
                            <h1>Contact Me</h1>
                            <div className="logobox">
                                <a href="tel:+918869012507"> <i class="fa-solid fa-phone"></i> +91 8869012507</a>
                                <a href="mailto:karanpal03040@gmail.com"><i class="fa-solid fa-envelope"></i> karanpal03040@gmail.com</a>
                                <a href="/"><i class="fa-solid fa-house"></i> 
                                 Moradabad, Uttar Pradesh, India
                                </a>
                            </div>

                        </div>
                    </div>
                    <div class="com " data-aos="fade-up">
                        <h1>Quick Links</h1>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Me</a></li>
                            <li><a href="/contact">Contact Me</a></li>
                            <li><a href="/service">My Services</a></li>
                            <li><a href="/skills">My Skills</a></li>
                            <li><a href="/projectst">My Projects</a></li>
                            <li><a href="/certifications">My Certifications</a></li>
                        </ul>
                    </div>
                    <div class="info" data-aos="fade-up">
                        <h1>Social Media</h1>
                        <div class="sociallogos">
                            <div className="logobox">
                                <a href="https://www.linkedin.com/in/karan-pal-developer/" target='_blank'> <i class="fa-brands fa-linkedin"></i> Linkedin</a>
                                <a href="https://twitter.com/developerKarann" target='_blank'> <i class="fa-brands fa-twitter"></i> Twitter</a>
                                <a href="https://github.com/developerkarann" target='_blank'> <i class="fa-brands fa-github"></i> Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <footer>© Karan Pal 2024 All Rights Reserved</footer>
            </section >

        </>
    )
}
