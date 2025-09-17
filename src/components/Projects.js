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

  // Software development projects with detailed information
  const softwareProjects = [
    {
      title: "Standard Bank Mobile App Enhancement",
      description: "Built Spring Boot application with JWT authentication and Python Lambda functions for face recognition in mobile banking.",
      technologies: ["Java", "Spring Boot", "Python", "AWS Lambda", "JWT", "Teradata", "SQL"],
      highlights: [
        "Implemented secure JWT authentication system",
        "Developed Python Lambda function for facial recognition",
        "Created SQL queries for data retrieval from Teradata",
        "Built Django application for personalized user data views"
      ],
      githubUrl: "https://github.com/GiftM5/JWT_Authentication", 
      type: "simulation"
    },
    {
      title: "Harvard CS50 Python Programming",
      description: "Completed Harvard's CS50 Introduction to Programming with Python, building multiple projects demonstrating algorithmic thinking.",
      technologies: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
      highlights: [
        "Mastered Python fundamentals and advanced concepts",
        "Implemented various algorithms and data structures",
        "Built command-line applications and utilities",
        "Earned official Harvard CS50 certification"
      ],
      githubUrl: "https://github.com/GiftM5", 
      type: "certification"
    },
    {
      title: "Flask RESTful API Development",
      description: "Developed robust backend APIs using Flask framework with database integration and authentication systems.",
      technologies: ["Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT", "RESTful APIs"],
      highlights: [
        "Built scalable RESTful API endpoints",
        "Implemented user authentication and authorization",
        "Integrated with PostgreSQL database using SQLAlchemy",
        "Created comprehensive API documentation"
      ],
      githubUrl: "https://github.com/GiftM5", 
      type: "personal"
    },
    {
      title: "Java Enterprise Applications",
      description: "Developed enterprise-level Java applications focusing on backend systems and business logic implementation.",
      technologies: ["Java", "Spring Framework", "Maven", "JUnit", "MySQL"],
      highlights: [
        "Built modular Java applications with Spring Framework",
        "Implemented comprehensive unit testing with JUnit",
        "Managed dependencies and build processes with Maven",
        "Designed efficient database schemas and queries"
      ],
      githubUrl: "https://github.com/GiftM5/forage-midas/tree/flow", 
      type: "academic"
    },
    {
      title: "Database Management Systems",
      description: "Designed and implemented complex database solutions with focus on performance optimization and data integrity.",
      technologies: ["SQL", "PostgreSQL", "MySQL", "Database Design", "Query Optimization"],
      highlights: [
        "Designed normalized database schemas",
        "Optimized complex SQL queries for performance",
        "Implemented data integrity constraints and triggers",
        "Created stored procedures and functions"
      ],
      githubUrl: null,
      type: "academic"
    },
    {
      title: "WeThinkCode_ Software Engineering Diploma",
      description: "Comprehensive software engineering education covering the full development lifecycle from design to deployment.",
      technologies: ["Python", "Java", "OOP", "Agile Development", "Software Testing", "Mobile Development", "DevOps"],
      highlights: [
        "Mastered Object-Oriented Programming principles and design patterns",
        "Implemented comprehensive testing strategies and test-driven development",
        "Developed mobile applications using modern development frameworks",
        "Applied Agile methodologies in collaborative team environments",
        "Integrated DevOps practices for continuous integration and deployment"
      ],
      githubUrl: null,
      type: "academic"
    },
    {
      title: "AI & Personal Development Projects",
      description: "Exploring artificial intelligence applications and engaging in coding challenges to expand technical expertise.",
      technologies: ["Generative AI", "Python", "Problem Solving", "Algorithm Design", "Personal Projects"],
      highlights: [
        "Earned Generative AI certification demonstrating commitment to emerging technologies",
        "Actively participate in coding challenges to sharpen problem-solving skills",
        "Develop personal projects exploring AI integration in software solutions",
        "Balance technical growth with personal interests like chess strategy"
      ],
      githubUrl: "https://github.com/GiftM5/Embraced",
      type: "personal"
    }
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
      title: "Workshop Facilitator and Community Outreach",
      description: "Facilitating Python workshops for women and Social Media & Event Promotion",
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
                      <Nav.Link eventKey="third">Learning Journey</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <CloudSecNetworck />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <div className="software-projects-section">
                        <Row>
                          {softwareProjects.map((project, index) => (
                            <Col lg={6} className="mb-4" key={index}>
                              <div className="software-project-card">
                                <div className="project-header">
                                  <h4>{project.title}</h4>
                                  <span className={`project-type ${project.type}`}>
                                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                                  </span>
                                </div>
                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                  <h6>Technologies Used:</h6>
                                  <div className="tech-tags">
                                    {project.technologies.map((tech, techIndex) => (
                                      <span key={techIndex} className="tech-tag">{tech}</span>
                                    ))}
                                  </div>
                                </div>

                                <div className="project-highlights">
                                  <h6>Key Achievements:</h6>
                                  <ul>
                                    {project.highlights.map((highlight, highlightIndex) => (
                                      <li key={highlightIndex}>{highlight}</li>
                                    ))}
                                  </ul>
                                </div>

                                {project.githubUrl && (
                                  <div className="project-actions">
                                    <a
                                      href={project.githubUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="github-link"
                                    >
                                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                      </svg>
                                      View on GitHub
                                    </a>
                                  </div>
                                )}
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <div className="learning-journey-section">
                        <div className="journey-intro">
                          <h3>My Learning Journey</h3>
                          <p>A focused path from academic foundation to software engineering expertise, driven by passion for technology and continuous growth.</p>
                        </div>

                        <div className="timeline">
                          <div className="timeline-item completed">
                            <div className="timeline-marker">🎓</div>
                            <div className="timeline-content">
                              <h4>2020-2024: Academic Foundation</h4>
                              <p><strong>Matric & University of Johannesburg (BSc In Physics)</strong></p>
                              <ul>
                                <li>Completed Matric with focus on science and mathematics</li>
                                <li>Studied BSc Physics, developing strong analytical and problem-solving skills</li>
                                <li>Built mathematical thinking and logical reasoning abilities</li>
                                <li>Learned to approach complex problems systematically</li>
                              </ul>
                            </div>
                          </div>

                          <div className="timeline-item completed">
                            <div className="timeline-marker">💻</div>
                            <div className="timeline-content">
                              <h4>Sep 2024-2025: WeThinkCode_ Journey</h4>
                              <p><strong>Diploma in Software Engineering</strong></p>
                              <ul>
                                <li>Intensive software engineering training in Python and Java</li>
                                <li>Comprehensive coursework: OOP, Testing, Agile Development, Systems Intergration,Mobile Development, DevOps</li>
                                <li>Built real-world applications and RESTful APIs</li>
                                <li>Developed collaborative coding and version control skills</li>
                              </ul>
                            </div>
                          </div>

                          <div className="timeline-item completed">
                            <div className="timeline-marker">✅</div>
                            <div className="timeline-content">
                              <h4>2025: Harvard CS50 Python</h4>
                              <p><strong>Introduction to Programming with Python</strong></p>
                              <ul>
                                <li>Earned official Harvard certification</li>
                                <li>Strengthened algorithmic thinking and data structures</li>
                                <li>Built command-line applications and utilities</li>
                                <li>Demonstrated self-directed learning capability</li>
                              </ul>
                            </div>
                          </div>

                          <div className="timeline-item completed">
                            <div className="timeline-marker">✅</div>
                            <div className="timeline-content">
                              <h4>2025: Standard Bank Simulation</h4>
                              <p><strong>Software Engineering Job Simulation</strong></p>
                              <ul>
                                <li>Built Spring Boot application with JWT authentication</li>
                                <li>Developed Python Lambda functions for face recognition</li>
                                <li>Created SQL queries for Teradata data retrieval</li>
                                <li>Gained real-world fintech development experience</li>
                              </ul>
                            </div>
                          </div>

                          <div className="timeline-item completed">
                            <div className="timeline-marker">🏆</div>
                            <div className="timeline-content">
                              <h4>2022: IMSAFER SA Training Program</h4>
                              <p><strong>Leadership & Safety Management Certification</strong></p>
                              <ul>
                                <li>Completed comprehensive leadership development program</li>
                                <li>Enhanced critical thinking and decision-making abilities</li>
                                <li>Built teamwork skills in dynamic environments</li>
                                <li>Developed safety management and risk assessment skills</li>
                              </ul>
                            </div>
                          </div>

                          <div className="timeline-item completed">
                            <div className="timeline-marker">👥</div>
                            <div className="timeline-content">
                              <h4>2025: Technical Mentoring & Leadership</h4>
                              <p><strong>WeThinkCode_ Bootcamp Mentor & WomenThinkCode Events Coordinator</strong></p>
                              <ul>
                                <li>Mentoring new students through their coding journey</li>
                                <li>Coordinating WomenThinkCode community events</li>
                                <li>Supporting students with technical challenges and problem-solving</li>
                                <li>Developing leadership and communication skills while giving back</li>
                              </ul>
                            </div>
                          </div>

                          <div className="timeline-item completed">
                            <div className="timeline-marker">🤖</div>
                            <div className="timeline-content">
                              <h4>2025: Generative AI Certification</h4>
                              <p><strong>AI & Machine Learning Specialization</strong></p>
                              <ul>
                                <li>Earned certification in Generative AI technologies</li>
                                <li>Learned prompt engineering and AI model interaction</li>
                                <li>Explored practical applications of AI in software development</li>
                                <li>Demonstrated commitment to staying current with emerging tech</li>
                              </ul>
                            </div>
                          </div>

                          <div className="timeline-item completed">
                            <div className="timeline-marker">🎉</div>
                            <div className="timeline-content">
                              <h4>2025: CloudSec Network Graduate</h4>
                              <p><strong>Cloud Security & Network Engineering Bootcamp</strong></p>
                              <ul>
                                <li>Completed all 10 weeks of intensive cloud security training</li>
                                <li>Mastered 10+ AWS services and cloud architecture</li>
                                <li>Built serverless applications and automated solutions</li>
                                <li>Earned expertise in cloud security best practices</li>
                              </ul>
                            </div>
                          </div>

                          <div className="timeline-item next">
                            <div className="timeline-marker">🚀</div>
                            <div className="timeline-content">
                              <h4>Next: Professional Growth & Exploration</h4>
                              <p><strong>Ready for Junior Developer Role</strong></p>
                              <ul>
                                <li>Seeking opportunities in full-stack development, mobile development, and Agile environments</li>
                                <li>Expanding AI knowledge and exploring Flutter for mobile development</li>
                                <li>Participating in coding challenges and building personal projects</li>
                                <li>Continuing to mentor others while enjoying chess and continuous learning</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="learning-philosophy">
                          <h4>What Drives Me</h4>
                          <Row>
                            <Col md={4}>
                              <div className="philosophy-card">
                                <h5>🎯 Problem-Solving Passion</h5>
                                <p>From physics equations to coding challenges, I love breaking down complex problems into manageable solutions. Chess strategy has sharpened this analytical thinking.</p>
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className="philosophy-card">
                                <h5>🤝 Learning Through Teaching</h5>
                                <p>Mentoring WeThinkCode_ students has taught me that explaining concepts to others deepens my own understanding and builds leadership skills.</p>
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className="philosophy-card">
                                <h5>🚀 Future-Focused Growth</h5>
                                <p>I'm excited about AI, Flutter, and emerging technologies. My curiosity drives me to explore new tools while mastering the fundamentals.</p>
                              </div>
                            </Col>
                          </Row>
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
