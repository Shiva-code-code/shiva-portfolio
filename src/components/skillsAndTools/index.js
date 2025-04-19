import React from 'react';

const SkillIcon = ({ name, icon }) => (
  <div className="badge bg-light border shadow-sm d-flex align-items-center px-2 py-1 m-1">
    {icon && (
      <img
        src={`https://skillicons.dev/icons?i=${icon}&theme=light`}
        alt={name}
        style={{ width: '20px', height: '20px', marginRight: '5px' }}
      />
    )}
    <span>{name}</span>
  </div>
);

class SkillsAndTools extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showContainer: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ showContainer: true });
    }, 100);
  }

  render() {
    const { showContainer } = this.state;
    return (
      <div className={`container mt-5 ${showContainer ? 'fade-in' : ''}`} id="skills">
        <h2 className="text-center mb-4">Skills And Tools</h2>
        <div className="row justify-content-center">
          <div className="col-lg-5 border shadow p-4 rounded m-2">
            <h4>💻 Frontend</h4>
            <div className="d-flex flex-wrap">
              <SkillIcon name="HTML" icon="html" />
              <SkillIcon name="CSS" icon="css" />
              <SkillIcon name="JavaScript" icon="javascript" />
              <SkillIcon name="React.js" icon="react" />
              <SkillIcon name="Bootstrap" icon="bootstrap" />
            </div>

            <h4 className="mt-4">⚙️ Backend</h4>
            <div className="d-flex flex-wrap">
              <SkillIcon name="Java" icon="java" />
              <SkillIcon name="Spring Boot" icon="springboot" />
              <SkillIcon name="Spring Security" icon="spring" />
              <SkillIcon name="Hibernate" icon="hibernate" />
              <SkillIcon name="REST APIs" icon="" />
              <SkillIcon name="JPA" icon="" />
              <SkillIcon name="Microservices" icon="" />
              <SkillIcon name="Node.js" icon="nodejs" />
            </div>

            <h4 className="mt-4">🛢️ Databases</h4>
            <div className="d-flex flex-wrap">
              <SkillIcon name="MySQL" icon="mysql" />
              <SkillIcon name="MongoDB" icon="mongodb" />
              <SkillIcon name="PostgreSQL" icon="postgres" />
            </div>

            <h4 className="mt-4">☁️ Cloud & DevOps</h4>
            <div className="d-flex flex-wrap">
              <SkillIcon name="AWS (EC2, S3)" icon="aws" />
              <SkillIcon name="Vercel" icon="vercel" />
              <SkillIcon name="Netlify" icon="netlify" />
              <SkillIcon name="Ngrok" icon="" />
              <SkillIcon name="Docker" icon="docker" />
              <SkillIcon name="Kubernetes" icon="kubernetes" />
              <SkillIcon name="Maven" icon="maven" />
              <SkillIcon name="Gradle" icon="gradle" />
              <SkillIcon name="Git" icon="git" />
            </div>

            <h4 className="mt-4">🧪 Testing</h4>
            <div className="d-flex flex-wrap">
              <SkillIcon name="JUnit" icon="" />
              <SkillIcon name="Mockito" icon="" />
              <SkillIcon name="RestAssured" icon="" />
            </div>

            <h4 className="mt-4">📚 CS Fundamentals</h4>
            <div className="d-flex flex-wrap">
              <SkillIcon name="OS" icon="" />
              <SkillIcon name="OOP" icon="" />
              <SkillIcon name="DBMS" icon="" />
              <SkillIcon name="CN" icon="" />
              <SkillIcon name="DSA" icon="" />
            </div>
          </div>

          <div className="col-lg-3 border shadow p-4 rounded m-2">
            <h4>🛠️ Tools</h4>
            <div className="d-flex flex-wrap">
              <SkillIcon name="VS Code" icon="vscode" />
              <SkillIcon name="PowerShell" icon="powershell" />
              <SkillIcon name="Bash" icon="bash" />
              <SkillIcon name="GitHub" icon="github" />
              <SkillIcon name="Eclipse" icon="eclipse" />
              <SkillIcon name="Postman" icon="postman" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsAndTools;
