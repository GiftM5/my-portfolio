import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { CloudSecNetworck } from "./CloudSecNetworck";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // Other projects for tabs 2 and 3
  const otherProjects = [
    {
      title: "Java Spring Boot API",
      description: "RESTful API Development",
      imgUrl: projImg1,
    },
    {
      title: "Python Data Analysis",
      description: "Data Science & Analytics",
      imgUrl: projImg2,
    },
    {
      title: "React Portfolio",
      description: "Frontend Development",
      imgUrl: projImg3,
    },
    {
      title: "Database Design",
      description: "MySQL & PostgreSQL",
      imgUrl: projImg1,
    },
    {
      title: "DevOps Pipeline",
      description: "CI/CD Implementation",
      imgUrl: projImg2,
    },
    {
      title: "Mobile App",
      description: "Cross-platform Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Explore my journey through cloud security, software development, and technical projects. From CloudSec Network bootcamp to full-stack applications, each tab showcases different aspects of my technical expertise.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">CloudSec Network</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Software Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other Work</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <CloudSecNetworck />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          otherProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="text-center">
                        <h4>Additional Projects & Certifications</h4>
                        <p className="mb-4">This section will showcase additional certifications, courses, and personal projects as I continue my learning journey.</p>
                        <div className="coming-soon-placeholder">
                          <h5>Coming Soon:</h5>
                          <ul className="list-unstyled">
                            <li>• AWS Certifications</li>
                            <li>• Personal coding projects</li>
                            <li>• Open source contributions</li>
                            <li>• Technical blog posts</li>
                          </ul>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
