import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'


export default function ProjectsSection() {
    const ProjectsData = [
        {
            title: 'Gyaanta - Ed-Tech App',
            tech: 'React.js, Node.js, Express.js, MongoDb',
            description: "Gyaanta! is a real world project. It's an education website that offers a wide range of courses and interactive learning experiences. Whether you're a student or just curious to learn new things, Gyaanta has you covered.",
            img: '/assets/images/projects/gyaanta.png',
            link: 'http://gyaanta.com',
            github: 'https://github.com/jainsarwang/ProjectBright',
        },
        {
            title: 'MySpotify - Music App',
            tech: ' HTML, CSS,  JavaScript',
            description: "MySpotify is a music streaming website which provide sevaral playlist accrouding to the mood by them user can listen songs without dowanload them and without any intruption. This is project is build in pure HTMl, CSS and JavaScript",
            img: '/assets/images/projects/spotify.png',
            link: 'https://karanpal03040.github.io/myspotify',
            github: 'https://github.com/karanpal03040/myspotify',
        },
        {
            title: 'FavFood',
            tech: 'React.js, Node.js, Express.js, MongoDb, Bootstrap ',
            description: "FavFood is a E-commerce food devluvering website where diffirent varity of fast food. You have to login or creat account to order any food",
            img: '/assets/images/projects/FavFood.png',
            link: 'https://favfoodie.netlify.app',
            github: 'https://github.com/karanpal03040/favfoodf_frontend',
        },
        {
            title: 'Magic Notes',
            tech: ' React.js, Node.js, Express.js, MongoDb',
            description: '/assets/images/projects/notes.png',
            description: "Gyaanta! It's an education website that offers a wide range of courses and interactive learning experiences. Whether you're a student or just curious to learn new things, Gyaanta has you covered.",
            img: '/assets/images/projects/notes.png',
            link: 'https://karanpal03040.github.io/notes',
            github: 'https://github.com/karanpal03040/notes',
        },
        {
            title: 'CRUD App',
            tech: 'React.js, Node.js, Express.js, MongoDb ',
            description: "Gyaanta! It's an education website that offers a wide range of courses and interactive learning experiences. Whether you're a student or just curious to learn new things, Gyaanta has you covered.",
            img: '/assets/images/projects/CRUD.png',
            link: 'https://crudio.netlify.app',
            github: 'https://github.com/karanpal03040/crud_frontend',
        },
    ]
    return (
        <>

            <section className="projects" id="projects">
                <div className="max-width">
                    <h2 className="title">My Projects</h2>

                    <div class="container">
                        {

                            ProjectsData.map((value, index) => {
                                return (
                                    <div id="card">
                                        <div class="slide slide1">
                                            <div class="content">
                                                <div class="icon">
                                                    {/* <i class="fa fa-user-circle" aria-hidden="true"></i> */}
                                                    <img src={value.img} alt="" />
                                                    <div className="github"><Link to={value.github} target='_blank' ><i class="fa-brands fa-github"></i> </Link></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="slide slide2">
                                            <div class="content">
                                                <h2>
                                                   {value.title}
                                                </h2>
                                                <p className='desc'>{value.description}</p>
                                                <p className='technology'>{value.tech}</p>
                                               <p><Link className='live_link'  to={value.link}  target='_blank'>{value.link}</Link></p> 
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
