import React from 'react'
import spotify from '../img/spotify.png'
import notesImg from '../img/notes.png'
import FavFood from '../img/FavFood.png'
import crudImg from '../img/CRUD.png'
import MyFileSharing from '../img/MyFileSharing.png'
import { Link } from 'react-router-dom'
export default function Projects() {
    return (
        <>
            <section className="projects" id="projects">
                <div className="max-width">
                    <h2 className="title">My Projects</h2>
                    <div className="project-content">
                        <div className="card">
                            <div className="box">
                                {/* <i className="fas fa-paint-brush"></i> */}
                                <img alt='' src={FavFood} />
                                <div className="text">FavFood - E-Commerce Food App</div>
                                <p>
                                    Tech used - <i>MERN Stack</i>
                                </p>
                                <div className='live-demo'>
                                    <Link to='https://favfoodie.netlify.app/' target='_blank' className='btn'>Live Demo</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                {/* <i className="fas fa-paint-brush"></i> */}
                                <img alt='' src={MyFileSharing} />
                                <div className="text">MyFileSharing - File Sharing Application</div>
                                <p>
                                    Tech used - <i>MERN Stack, Bootstrap</i>
                                </p>
                                <div className='live-demo'>
                                    <Link to='https://myfilesharing.netlify.app/' target='_blank' className='btn'>Live Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="project-content">

                        <div className="card">
                            <div className="box">
                                {/* <i className="fas fa-paint-brush"></i> */}
                                <img alt='' src={crudImg} />
                                <div className="text">CrudIo - CRUD Application</div>
                                <p>
                                    Tech used - <i>MERN Stack, Bootstrap</i>
                                </p>
                                <div className='live-demo'>
                                    <Link to='https://crudio.netlify.app/' target='_blank' className='btn'>Live Demo</Link>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="box">
                                {/* <i className="fas fa-paint-brush"></i> */}
                                <img alt='' src={notesImg} />
                                <div className="text">Magic Notes - Notes Taking App</div>
                                <p>
                                    Tech used - <i>HTML, CSS, JavaScript, Bootstrap</i>
                                </p>
                                <div className='live-demo'>
                                    <Link to='https://karanpal03040.github.io/notes/' target='_blank' className='btn'>Live Demo</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="project-content">
                        <div className="card">
                            <div className="box">
                                {/* <i className="fas fa-paint-brush"></i> */}
                                <img alt='' src={spotify} />
                                <div className="text">MySpotify - Music Streaming App</div>
                                <p>
                                    Tech used - <i>HTML, CSS, JavaScript</i>
                                </p>
                                <div className='live-demo'>
                                    <Link to='https://karanpal03040.github.io/myspotify/' target='_blank' className='btn'>Live Demo</Link>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
        </>
    )
}
