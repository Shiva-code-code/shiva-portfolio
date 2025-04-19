import React from 'react';
import mark from '../../images/projects/markdownpreviewer.png';
import twist from '../../images/projects/Student-community.png';
// Placeholder images for new projects (replace with actual images if available)
import railway from '../../images/projects/railway.png';
import crypto from '../../images/projects/crypto.png';
import lms from '../../images/projects/lms.png';

class Projects extends React.Component {
    renderProjectCard(title, image, link, techStack) {
        return (
            <div className='col-lg-4 col-md-6 m-2 border rounded p-3 shadow'>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={title} className="img-fluid shadow rounded mb-2" />
                </a>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h4 className='mt-2' style={{ textAlign: "center" }}>{title}</h4>
                </a>
                <p className="text-muted" style={{ fontSize: '14px', textAlign: 'center' }}>{techStack}</p>
            </div>
        );
    }

    render() {
        return (
            <>
                <div className="container" id="projects">
                    <div className="row m-1 justify-content-center">
                        <div className="col mt-5">
                            <h2>Recent Projects</h2>
                        </div>
                        <div className="w-100"></div>

                        {this.renderProjectCard(
                            'Student Community (Full Stack)',
                            twist,
                            'https://studentcommunity.vercel.app',
                            'React.js, Node.js, Express, MongoDB, Vercel'
                        )}

                        {this.renderProjectCard(
                            'Markdown Previewer',
                            mark,
                            'https://taher-1822001.github.io/Markdown-Previewer/',
                            'React.js, GitHub Pages'
                        )}

                        {this.renderProjectCard(
                            'Railway Seat Booking System',
                            railway,
                            'https://railway-seat-booking-system.vercel.app/',
                            'Next.js, Node.js, PostgreSQL, JWT, AWS EC2, Vercel'
                        )}

                        {this.renderProjectCard(
                            'CryptoWeather Nexus',
                            crypto,
                            'https://crypto-weather-nexus-hs6v.vercel.app/',
                            'Node.js, Express, WebSocket, React, Redux Toolkit'
                        )}

                        {this.renderProjectCard(
                            'Online Learning Management System',
                            lms,
                            'https://github.com/shiva-code-code/online-lms',
                            'Spring Boot, React, MySQL, Redis, AWS, Docker'
                        )}
                    </div>
                </div>
            </>
        );
    }
}

export default Projects;
