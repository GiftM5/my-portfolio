import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import {
  BsRocket,
  BsLaptop,
  BsPeople,
  BsPuzzle,
  BsLightningCharge,
  BsStar,
} from "react-icons/bs";

export const WhyHireMe = () => {
  const [activeCard, setActiveCard] = useState(null);

  const reasons = [
    {
      id: 1,
      title: "Strong Technical Foundation",
      icon: <BsRocket />,
      description:
        "Final-year Software Engineering student with proven expertise in Python and Java, backed by comprehensive training and multiple industry certifications.",
      details: [
        "WeThinkCode_ Software Engineering Diploma (Final Year)",
        "Intermediate Python developer with Java proficiency",
        "5 major certifications: CS50, CloudSec, Standard Bank, Generative AI, Financial Literacy",
        "Comprehensive coursework: OOP, Testing, Agile Development, Mobile Development, DevOps",
        "Real-world project experience with modern frameworks and cloud technologies",
      ],
    },
    {
      id: 2,
      title: "Ready for Modern Development",
      icon: <BsLaptop />,
      description:
        "Equipped with current industry skills including cloud security, AI awareness, and full-stack development capabilities.",
      details: [
        "Backend Development: Python (Flask, Django), Java (Spring Boot), RESTful APIs",
        "Cloud & Security: AWS services, CloudSec Network graduate, security best practices",
        "Emerging Technologies: Generative AI certified, exploring Flutter for mobile development",
        "Development Practices: Agile methodologies, testing strategies, DevOps integration",
        "Database & Tools: SQL, Git workflows, collaborative development",
      ],
    },
    {
      id: 3,
      title: "Leadership & Mentoring Experience",
      icon: <BsPeople />,
      description:
        "Currently mentoring bootcamp students and coordinating tech events, demonstrating leadership potential and communication skills.",
      details: [
        "Bootcamp Mentor: Guide new students through technical challenges",
        "Events Coordinator: Manage WomenThinkCode community events",
        "Team Collaboration: Experience working in diverse, dynamic teams",
        "Knowledge Transfer: Ability to explain complex concepts clearly",
      ],
    },
    {
      id: 4,
      title: "Problem-Solving Mindset",
      icon: <BsPuzzle />,
      description:
        "Demonstrated ability to tackle complex challenges through multiple certifications and real-world project implementations.",
      details: [
        "Analytical Thinking: Physics background enhances logical problem-solving",
        "Continuous Learning: Self-directed completion of multiple certifications",
        "Adaptability: Successfully balancing studies, mentoring, and skill development",
        "Innovation: Built face recognition systems and automated cloud solutions",
      ],
    },
    {
      id: 5,
      title: "Industry-Ready Skills",
      icon: <BsLightningCharge />,
      description:
        "Equipped with modern development practices and tools that companies need, from version control to cloud deployment.",
      details: [
        "DevOps: Git workflows, CI/CD pipelines, code reviews",
        "Security: JWT authentication, cloud security best practices",
        "Testing: Unit testing, debugging, performance optimization",
        "Documentation: Technical writing, API documentation, code comments",
      ],
    },
    {
      id: 6,
      title: "Well-Rounded Professional",
      icon: <BsStar />,
      description:
        "Passionate learner who balances technical excellence with personal interests, bringing both analytical thinking and creative problem-solving to teams.",
      details: [
        "Multilingual: English, Sesotho, IsiZulu, Xitsonga - diverse communication skills",
        "Strategic Thinking: Chess player with analytical mindset and patience",
        "Continuous Learning: Actively engages in coding challenges and personal projects",
        "Balanced Perspective: Enjoys series and relaxation, bringing fresh energy to work",
        "Passion-Driven: Deep-seated passion for exploration and expanding knowledge",
      ],
    },
  ];

  return (
    <section className="why-hire-me" id="why-hire-me">
      <Container>
        <Row>
          <Col size={12}>
            <div className="why-hire-me-bx">
              <h2>Why Hire Mpho Gift Mofokeng?</h2>
              <p>
                Here's what makes me the ideal junior developer for your team:
              </p>

              <Row>
                {reasons.map((reason) => (
                  <Col lg={4} md={6} className="mb-4" key={reason.id}>
                    <Card
                      className={`reason-card ${
                        activeCard === reason.id ? "active" : ""
                      }`}
                      onMouseEnter={() => setActiveCard(reason.id)}
                      onMouseLeave={() => setActiveCard(null)}
                       style={{ backgroundColor: '#1e1e2f', border: '1px solid rgba(255,255,255,0.1)' }}
                    >
                      <Card.Body>
                        <div className="reason-icon">{reason.icon}</div>
                        <Card.Title>{reason.title}</Card.Title>
                        <Card.Text className="reason-description">
                          {reason.description}
                        </Card.Text>

                        <div
                          className={`reason-details ${
                            activeCard === reason.id ? "show" : ""
                          }`}
                        >
                          <ul>
                            {reason.details.map((detail, index) => (
                              <li key={index}>{detail}</li>
                            ))}
                          </ul>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              <div className="hire-me-cta">
                <h3>Ready to contribute from day one!</h3>
                <p>
                  I bring technical skills, leadership experience, and a growth
                  mindset that will add immediate value to your development
                  team.
                </p>
                <div className="cta-buttons">
                  <a
                    href="https://github.com/GiftM5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button primary"
                  >
                    <ArrowRightCircle size={20} />
                    View My Code
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mpho-mofokeng-956b6b328/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button secondary"
                  >
                    <ArrowRightCircle size={20} />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
