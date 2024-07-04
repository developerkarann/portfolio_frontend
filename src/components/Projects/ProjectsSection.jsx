import React from 'react'
import './projects.css'
import { Link } from 'react-router-dom'


export default function ProjectsSection() {
    const ProjectsData = [
        {
            title: 'Gyaanta - Ed-Tech App',
            description: "Gyaanta! is a startup's website. It's an education website that offers a wide range of courses and interactive learning experiences. Whether you're a student or just curious to learn new things, Gyaanta has you covered.",
            img: '/assets/images/projects/gyaanta.png',
            link: 'https://gyaanta.netlify.app/',
            github: 'https://github.com/jainsarwang/ProjectBright',
            tech: 'mern'
        },
        {
            title: 'Vedic Store E-commerce',
            description: "Vedic store is an full stack e-commerce website which sells various product such as cloths, books, spiritual product and idols. Features: created product catalog, Shopping Cart, Payment page with three stages such as shipping details, confirm order and payment, other features like search and filtering.",
            img: '/assets/images/projects/vedicstore.png',
            link: 'https://vedicstore.vercel.app',
            github: 'https://github.com/developerkarann/VedicStore',
            tech: 'mern'
        },
        {
            title: 'Writo.tech',
            description: "Writo is an educational website which provide various certification course.Created backend server and form input for the website in node.js with the help of express.js. ",
            img: '/assets/images/projects/writo.png',
            link: 'https://writo.tech/',
            github: 'https://writo.tech/',
            tech: 'mern'
        },
        {
            title: 'ZapChat - Realtime Chat App',
            tech: ' React.js, Node.js, Express.js, MongoDb',
            description: "",
            img: '/assets/images/projects/zapchat.png',
            link: 'https://zapchat-karandev.vercel.app',
            github: 'https://github.com/developerkarann/ZapChat_realtime-chat-application',
            tech: 'mern'
        },
        {
            title: 'MySpotify - Music App',
            description: "MySpotify is a music streaming website which provide sevaral playlist accrouding to the mood by them user can listen songs without dowanload them and without any intruption. This project is build in HTMl, CSS and JavaScript",
            img: '/assets/images/projects/spotify.png',
            link: 'https://developerkarann.github.io/myspotify',
            github: 'https://github.com/developerkarann/myspotify',
        },
        {
            title: 'Magic Notes',
            tech: ' React.js, Node.js, Express.js, MongoDb',
            description: "Gyaanta! It's an education website that offers a wide range of courses and interactive learning experiences. Whether you're a student or just curious to learn new things, Gyaanta has you covered.",
            img: '/assets/images/projects/notes.png',
            link: 'https://developerkarann.github.io/notes',
            github: 'https://github.com/developerkarann/notes',
        },

    ]
    return (
        <>

            <section className="projects" id="projects">
                <div className="max-width">
                    <h2 className="title">My Projects</h2>

                    <div className="container">
                        {

                            ProjectsData.map((value, index) => {
                                return (

                                    <div id="card" key={index}>
                                        <div className="cardHead">
                                            <div className="logo">
                                                <img src={value.img} alt="" />
                                            </div>
                                        </div>
                                        <div className="cardBody">
                                            <h2>
                                                {value.title}
                                            </h2>
                                            {/* <p className='desc'>{value.description}</p> */}
                                            {
                                                value.tech === 'mern' ?
                                                    <div className='technology'>
                                                        <img src="/assets/images/icon/react.png" alt="" />
                                                        <img src="/assets/images/icon/node.png" alt="" />
                                                        <img src="/assets/images/icon/express.png" alt="" />
                                                        <img src="/assets/images/icon/mongodb.png" alt="" />
                                                    </div> :
                                                    <div className='technology'>
                                                        <img src="/assets/images/icon/html.png" alt="" />
                                                        <img src="/assets/images/icon/css.png" alt="" />
                                                        <img src="/assets/images/icon/javascript.png" alt="" />
                                                    </div>
                                            }
                                            <div className="live_links">
                                                <a href={value.github} target='_blank'> <i className="fa-solid fa-code"></i> Github </a>
                                                <a href={value.link} target='_blank'> <i className="fa-solid fa-eye"></i> Live Preview</a>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>



                </div>
            </section>
        </>
    )
}