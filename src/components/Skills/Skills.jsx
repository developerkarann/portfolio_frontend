import './skills.css'

export default function Skills() {
    return (
        <>
            <section className="skills" id="skills">
                <div className="max-width">
                    <h2 className="title">My Skills</h2>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">My Creative Skills & Expriences.</div>
                            <p>
                                specialize in developing web applications using powerful technologies:
                                MongoDB, Express.js, React.js, and Node.js. I have honed my skills in creating efficient, scalable, and user-friendly
                                web applications that meet the unique needs of each client <br /> <br />

                                My skills in React.js enable me to create highly interactive and responsive user interfaces that provide
                                an engaging user experience. Finally, my expertise in Node.js allows me to develop fast and reliable
                                server-side applications that can handle multiple concurrent requests.  <br /> <br />


                                My skills in MongoDB allows me to develop dynamic databases that can handle large amounts
                                of data . Additionally, I am good in using Express.js
                                to build RESTful API and robust web servers that can handle complex API requests and integrate with various front-end
                                frameworks. <br /> <br />

                                Overall, I am passionate about Web Development and eager to contribute my skills and knowledge to create
                                innovative and impactful web applications using the MERN stack. With a strong foundation in
                                web development and a willingness to learn and grow, I am confident that I will be an asset to
                                any team or project.
                            </p>
                        </div>
                    
                        <div className="column right">
                            {/* Frontend Card  */}
                            <div className="card">
                                <div className="box">
                                    <div className="text">
                                        <i className="fas fa-paint-brush"></i>
                                        <p> Front-End</p></div>
                                    <div className="skill_icons">
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/html.png" alt="" />
                                            <p>HTML</p>
                                        </div>
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/css.png" alt="" />
                                            <p>CSS</p>
                                        </div>
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/javascript.png" alt="" />
                                            <p>JavaScript</p>
                                        </div>
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/react.png" alt="" />
                                            <p>React.js</p>
                                        </div>
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/tailwind.png" alt="" />
                                            <p>TailwindCSS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Backend Card  */}
                            <div className="card">
                                <div className="box">
                                    <div className="text">
                                        <i className="fas fa-paint-brush"></i>
                                        <p> Backend-End</p></div>
                                    <div className="skill_icons">
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/node.png" alt="" />
                                            <p>Node.js</p>
                                        </div>
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/express.png" alt="" />
                                            <p>Express.js</p>
                                        </div>
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/mongodb.png" alt="" />
                                            <p>MongoDb Database</p>
                                        </div>
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/jwt.png" alt="" />
                                            <p>JWT Auth</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Database Card  */}
                            <div className="card">
                                <div className="box">
                                    <div className="text">
                                        <i className="fas fa-paint-brush"></i>
                                        <p> Tools</p></div>
                                    <div className="skill_icons">
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/git.png" alt="" />
                                            <p>Git</p>
                                        </div>
                                        
                                        <div className="skill_icon">
                                            <img src="/assets/images/icon/github.png" alt="" />
                                            <p>Github</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
