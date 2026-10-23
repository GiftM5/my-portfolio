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
      title: "Banking API System",
      description: "REST banking service with CRUD account endpoints and transaction handling, using validated request/response models and a database layer.",
      stack: ["Python", "FastAPI", "Pydantic", "SQLAlchemy", "SQLite"],
      link: "https://github.com/GiftM5/Banking-API-System",
    },
    {
      title: "Distributed Systems Infrastructure Design",
      description: "Two-module service that accepts requests offline and replays them through a message broker when connectivity returns, with scaling and failure analysis.",
      stack: ["Linux", "Nginx", "HAProxy", "Kafka", "Redis", "PostgreSQL", "Shell"],
      link: "https://github.com/GiftM5/Infrastructure-engineering-assignment",
    },
    {
      title: "Offline-First Government Service System",
      description: "Resilient service queueing for offices with unreliable internet. Six-tier architecture with provisioning scripts and technical notes covering scaling and failure scenarios.",
      stack: ["Java", "Spring Boot", "ActiveMQ", "Maven", "Docker"],
      link: "https://github.com/GiftM5/Offline-First-Government-Service-System",
    },
    {
      title: "Northfold E-commerce Product Page",
      description: "Responsive, accessible Shopify product page with product details, pricing and interactive options, optimised for mobile and desktop.",
      stack: ["HTML", "CSS", "JavaScript", "Shopify", "Git"],
      link: "https://github.com/GiftM5/northfold-product-page",
    },
  ];

  const standout = [
    ""
  ];

  const professionalExperience = [
    {
      period: "02/2026 - Present",
      title: "Software Engineering Intern, Computro Solutions",
      summary: "Develop and support backend and frontend applications, REST APIs and integrations. Assist with AWS deployments, testing, debugging, code reviews, unit testing and release workflows.",
    },
    {
      period: "10/2026",
      title: "Software Developer Trainee, Activate Academy",
      summary: "Customised Shopify themes with Liquid, HTML, CSS and JavaScript. Built AJAX cart updates, a free-shipping progress indicator and a recently viewed products feature.",
    },
    {
      period: "07/2025 - 11/2025",
      title: "Cloud Security Intern, CloudSec Network",
      summary: "Top student, promoted from Trainee to Intern. Supported AWS workloads (ECS Fargate, S3, CloudFront, IAM, CloudWatch) and provisioned infrastructure with Terraform.",
    },
  ];

  const volunteering = [
    {
      period: "03/2026 - Present",
      title: "Junior Data Engineer, Dubs Mathematics Programme",
      summary: "Support data requirements, ETL/ELT pipelines, SQL queries and data reliability troubleshooting.",
    },
    {
      period: "05/2025 - 12/2025",
      title: "Events Coordinator, WomenThinkCode_",
      summary: "Helped organise workshops, hackathons and community events promoting women's participation in technology.",
    },
  ];

  const education = [
    {
      period: "09/2024 - 12/2025",
      title: "Diploma in Software Engineering, WeThinkCode_",
      summary: "Intensive software engineering training in Python, Java, testing and agile collaboration.",
    },
  ];

  const journeySections = [
    { heading: "Professional Experience", items: professionalExperience },
    { heading: "Volunteering & Leadership", items: volunteering },
    { heading: "Education", items: education },
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
                        {journeySections.map((section) => (
                          <div key={section.heading} className="journey-section">
                            <h5 className="journey-heading">{section.heading}</h5>
                            <div className="learning-grid">
                              {section.items.map((item, index) => (
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
                          </div>
                        ))}
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
