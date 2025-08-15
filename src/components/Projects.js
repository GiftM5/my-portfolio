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

  // Software development projects
  const softwareProjects = [
    {
      title: "Standard Bank Mobile App Enhancement",
      description: "Spring Boot & Python Lambda Functions",
      imgUrl: projImg1,
    },
    {
      title: "Flask API Development",
      description: "Backend Systems & RESTful APIs",
      imgUrl: projImg2,
    },
    {
      title: "Harvard CS50 Python Projects",
      description: "Problem-solving & Algorithm Implementation",
      imgUrl: projImg3,
    },
    {
      title: "Django Web Application",
      description: "Full-stack Development with Database Integration",
      imgUrl: projImg1,
    },
    {
      title: "SQL Database Queries",
      description: "Teradata Data Retrieval & Analysis",
      imgUrl: projImg2,
    },
    {
      title: "Authentication System",
      description: "JSON Web Tokens & Security Implementation",
      imgUrl: projImg3,
    },
  ];

  // Leadership and other projects
  const leadershipProjects = [
    {
      title: "WeThinkCode_ Bootcamp Mentoring",
      description: "Student Support & Technical Guidance",
      imgUrl: projImg1,
    },
    {
      title: "WomenThinkCode Events Coordination",
      description: "Event Planning & Community Engagement",
      imgUrl: projImg2,
    },
    {
      title: "IMSAFER SA Leadership Training",
      description: "Safety Management & Team Leadership",
      imgUrl: projImg3,
    },
    {
      title: "Financial Literacy Course",
      description: "Momentum Financial Planning & Management",
      imgUrl: projImg1,
    },
    {
      title: "Physics & Chemistry Studies",
      description: "University of Johannesburg - BSc Physics",
      imgUrl: projImg2,
    },
    {
      title: "Community Outreach",
      description: "Social Media & Event Promotion",
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
                      <Nav.Link eventKey="second">Software Development</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Current Focus & Goals</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <CloudSecNetworck />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          softwareProjects.map((project, index) => {
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
                      <div className="current-focus-section">
                        <Row>
                          <Col lg={6} className="mb-4">
                            <div className="focus-card">
                              <h4>🎯 Currently Working On</h4>
                              <ul className="focus-list">
                                <li><strong>Final Year Project:</strong> Completing WeThinkCode_ Diploma in Software Engineering</li>
                                <li><strong>Mastering AI Fundamentals and Cybersecurity:</strong> Learning prompt engineerig to further better my skills </li>
                                <li><strong>CloudSec Mastery:</strong> Advancing cloud security skills (Week 10/10 complete)</li>
                                <li><strong>Event Coordination and Technical Mentoring:</strong> I am volunteering as a mentor at WeThinkCode_ and Leading WomenThinkCode community events</li>
                              </ul>
                            </div>
                          </Col>
                          <Col lg={6} className="mb-4">
                            <div className="focus-card">
                              <h4>🚀 Seeking Opportunities</h4>
                              <ul className="focus-list">
                                <li><strong>Junior Developer Role:</strong> full stack development/Agile development focus</li>
                                <li><strong>Graduate Program:</strong> Software engineering or cloud security track</li>
                                <li><strong>Internship:</strong> Hands-on experience in fintech or cloud platforms</li>
                                <li><strong>Open Source:</strong> Contributing to Projects that will change the next generation.</li>
                              </ul>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg={12}>
                            <div className="focus-card highlight-card">
                              <h4>💡 What I Bring to Your Team</h4>
                              <Row>
                                <Col md={4}>
                                  <h6>Technical Foundation</h6>
                                  <p> Hands on experience with real time world project like JWT auth authentication using springboot,OOP and problem solving skills.</p>
                                </Col>
                                <Col md={4}>
                                  <h6>Leadership Experience</h6>
                                  <p>Mentoring bootcamp students and coordinating tech events - I can work independently and collaborate effectively</p>
                                </Col>
                                <Col md={4}>
                                  <h6>Growth Mindset</h6>
                                  <p>Self-driven learner completing CloudSec bootcamp while studying - I adapt quickly and take initiative</p>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
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
