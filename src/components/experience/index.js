import React from 'react';
import googleLogo from '../../images/logos/google.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

class Experience extends React.Component {
    renderExperienceCard(logo, title, period, location, role, description) {
        return (
            <div className="col-lg-8 col-md-10 col-sm-12 mt-3">
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className='row'>
                            <div className='col-md-3 col-sm-4 text-center mb-2'>
                                <img src={logo} alt="logo" className='img-fluid' style={{ maxHeight: '100px' }} />
                            </div>
                            <div className='col-md-9 col-sm-8'>
                                <h4 className='card-title'>{title}</h4>
                                <hr />
                                <small style={{ display: "block", textAlign: "left" }} dangerouslySetInnerHTML={{ __html: period }}></small>
                                <small style={{ display: "block", textAlign: "left" }}>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-danger" /> {location} &nbsp;
                                    <FontAwesomeIcon icon={faBriefcase} className="text-success" /> {role}
                                </small>
                                <p className='card-text text-left'>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="container mt-5" id='experience'>
                <div className="row justify-content-center">
                    <div className='col-12 text-center'>
                        <h2>Experience</h2>
                    </div>

                    {this.renderExperienceCard(
                        googleLogo,
                        "Google (Open Source)",
                        "<b>From:</b> Apr 2025 &nbsp; <b>to:</b> Present",
                        "Remote",
                        "Contributor",
                        "Contributing to Google’s fhir-data-pipes project. Migrated legacy unit tests from JUnit 4 to JUnit 5. Collaborating with Google engineers via GitHub PRs and CI pipelines using Maven and GitHub Actions."
                    )}
                </div>
            </div>
        );
    }
}

export default Experience;
