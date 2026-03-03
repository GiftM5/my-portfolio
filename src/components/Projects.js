import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { cloudSecData } from "../data/cloudSecData";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const hardestWeekIds = [7, 8, 9, 10];

  const cloudSecHighlights = hardestWeekIds
    .map((id) => cloudSecData.weeks.find((week) => week.id === id))
    .filter(Boolean)
    .map((week) => ({
      id: week.id,
      title: week.title,
      topic: week.topic,
      description: week.description,
      tools: week.projectDetails.tools.slice(0, 4),
      screenshot: week.screenshots[0]?.url,
    }));

  const softwareProjects = [
    {
      title: "Jwt Authentication System",
      description: "Built secure backend features with JWT auth and integrated Python Lambda for identity workflows.",
      stack: ["Java", "Spring Boot", "Python", "AWS Lambda", "JWT", "SQL"],
      link: "https://github.com/GiftM5/JWT_Authentication",
    },
    {
      title: "Flask REST API",
      description: "Created RESTful services with authentication and database integration for real-world backend use cases.",
      stack: ["Python", "Flask", "PostgreSQL", "SQLAlchemy", "JWT"],
      link: "https://github.com/GiftM5",
    },
    {
      title: "Offline-First Distributed Government Service System",
      description: "This project simulates how government offices in areas with unreliable internet can continue to provide services without stopping operations, and later synchronize data safely with a central government system",
      stack: ["Java", "Distributed Systems", "Data Structures"],
      link: "https://github.com/GiftM5/Offline-First-Government-Service-System",
    },
  ];

  const standout = [
    "CloudSec Internship: Cloud Security Engineer",
    "Recognized as Top Student",
    "Technical Mentor at WeThinkCode_",
  ];

  const learningMilestones = [
    {
      period: "2025",
      title: "CloudSec Internship",
      summary: "Worked as a Cloud Security Engineer intern, delivering practical security tasks and earning top student recognition.",
    },
    {
      period: "2024 - 2025",
      title: "WeThinkCode_",
      summary: "Intensive software engineering training in Python, Java, testing, and agile collaboration.",
    },
    {
      period: "2025",
      title: "Technical Mentoring",
      summary: "Supported peers with debugging, architecture guidance, and consistency in coding practices.",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <h2>Selected Projects</h2>
                  <p>Focused highlights that show depth in cloud security, engineering execution, and leadership.</p>

                  <div className="standout-row">
                    {standout.map((item) => (
                      <span key={item} className="standout-pill">
                        {item}
                      </span>
                    ))}
                  </div>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">CloudSec</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Software</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Journey</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {cloudSecHighlights.map((week, index) => (
                            <Col lg={6} className="mb-4" key={week.id}>
                              <article
                                className="simple-project-card project-reveal"
                                style={{ animationDelay: `${index * 0.12}s` }}
                              >
                                <h4>{week.title}</h4>
                                <p className="cloudsec-topic">{week.topic}</p>
                                <p>{week.description}</p>
                                {week.screenshot && (
                                  <img
                                    src={`${process.env.PUBLIC_URL}${week.screenshot}`}
                                    alt={week.title}
                                    className="cloudsec-preview"
                                  />
                                )}
                                <div className="simple-tech-tags">
                                  {week.tools.map((tool) => (
                                    <span key={tool}>{tool}</span>
                                  ))}
                                </div>
                              </article>
                            </Col>
                          ))}
                        </Row>
                        <div className="project-actions-row">
                          <a
                            href="https://github.com/GiftM5"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="simple-project-link"
                          >
                            View Full CloudSec Work
                          </a>
                        </div>
                      </Tab.Pane>

                      <Tab.Pane eventKey="second">
                        <Row>
                          {softwareProjects.map((project, index) => (
                            <Col lg={4} className="mb-4" key={project.title}>
                              <article
                                className="simple-project-card project-reveal"
                                style={{ animationDelay: `${index * 0.12}s` }}
                              >
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <div className="simple-tech-tags">
                                  {project.stack.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                  ))}
                                </div>
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="simple-project-link"
                                >
                                  View Code
                                </a>
                              </article>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <div className="learning-grid">
                          {learningMilestones.map((item, index) => (
                            <article
                              className="learning-card project-reveal"
                              key={item.title}
                              style={{ animationDelay: `${index * 0.12}s` }}
                            >
                              <span>{item.period}</span>
                              <h4>{item.title}</h4>
                              <p>{item.summary}</p>
                            </article>
                          ))}
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
