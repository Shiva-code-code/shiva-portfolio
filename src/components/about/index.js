import React from 'react';
import profile from '../../images/profile/profile.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showContainer: false,
        }
    }

    componentDidMount() {
        // Trigger animation after component mount
        setTimeout(() => {
            this.setState({ showContainer: true });
        }, 100);
    }

    render() {
        const { showContainer } = this.state;
        return (
            <div className={`container d-flex align-items-center justify-content-center animate__animated ${showContainer ? 'animate__fadeIn' : ''}`} id="about">
                <div className='row m-1'>
                    <div className='col'>
                        <h2>About Me</h2>
                    </div>
                    <div className='w-100'></div>
                    <div className='col-lg-3 mt-3 mb-3 col-xs-12'>
                        <center><img src={profile} alt="profile" style={{ width: "200px", height: "200px", borderRadius: "50%" }} /></center>
                    </div>

                    <div className='col-lg-7  p-3 border shadow rounded' style={{ textAlign: "left" }}>
                        <div className='row'>
                            <div className='col-lg-7 col-xs-12'>
                                <p>
                                    Hi there! 👋 I'm <strong>Shiva Kumar Hazari</strong>, a Full Stack Developer passionate about building scalable and efficient web applications. With practical experience in <strong>Java, Spring Boot, React</strong>, and <strong>RESTful APIs</strong>, I focus on crafting clean, maintainable code that drives real-world functionality.
                                    <br /><br />
                                    I’ve engineered production-grade applications leveraging <strong>Redis, Docker, AWS</strong>, and real-time features using <strong>WebSocket</strong> architecture. Whether it's backend logic or frontend interaction, I enjoy solving tough problems and optimizing performance every step of the way.
                                </p>
                            </div>

                            <div className='col-lg-4 mt-4 align-items-center justify-content-center'>
                                <label htmlFor='frontend'>Frontend (React, JavaScript, CSS)</label>
                                <div className="progress" id="frontend">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                </div>

                                <label htmlFor='backend'>Backend (Spring Boot, REST APIs)</label>
                                <div className="progress" id="backend">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "80%" }}></div>
                                </div>

                                <label htmlFor="database">Database (MySQL, PostgreSQL, MongoDB)</label>
                                <div className="progress" id="database">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{ width: "85%" }}></div>
                                </div>

                                <label htmlFor="cloud">Cloud & DevOps (AWS, Docker, Netlify, Vercel)</label>
                                <div className="progress" id="cloud">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;