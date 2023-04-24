import React from 'react'

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
                                I have a strong foundation in HTML, CSS, Bootstrap and JavaScript
                                , and have experience using server-side technologies such as PHP.
                                I have also gained familiarity with DBMS(MySQL) and react.js
                                through coursework and personal projects. I am eager to continue
                                learning and expanding my skillset, I am confident that my skills
                                and determination will make me a valuable asset to any team. <br />
                            </p>

                            <p className="certiInfo">
                                And i have completed Web Development Training course and got a
                                certificate from internshala trainings where i learned both
                                front-end and back-end web technologies .
                            </p>
                            <a rel="noreferrer" href="https://drive.google.com/file/d/1rKKISBzyMv7G6noNQNjHyu77llc-3oeW/view?usp=share_link" target="_blank">  Certificate <i className="fa-solid fa-award"></i></a>
                        </div>
                        <div className="column right">
                            <div className="bars">
                                <div className="info">
                                    <span>HTML</span>
                                    <span>90%</span>
                                </div>
                                <div className="lines html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>75%</span>
                                </div>
                                <div className="lines css"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>JavaScript</span>
                                    <span>65%</span>
                                </div>
                                <div className="lines javascript"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>PHP</span>
                                    <span>70%</span>
                                </div>
                                <div className="lines php"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>mySQL</span>
                                    <span>80%</span>
                                </div>
                                <div className="lines mysql"></div>
                            </div>

                            <div className="bars">
                                <div className="info">
                                    <span>Bootstrap</span>
                                    <span>80%</span>
                                </div>
                                <div className="lines Bootstrap"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>Photoshop</span>
                                    <span>90%</span>
                                </div>
                                <div className="lines photoshop"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
