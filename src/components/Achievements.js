import { useState, useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { cloudSecData, getCurrentWeekStatus } from "../data/cloudSecData";

export const Achievements = () => {
  const [completedProjects, setCompletedProjects] = useState(0);
  const [totalHours, setTotalHours] = useState(0);
  const [technologiesUsed, setTechnologiesUsed] = useState(0);
  const [certificationProgress, setCertificationProgress] = useState(0);

  useEffect(() => {
    // Animate counters
    const weekStatus = getCurrentWeekStatus();
    
    // Count completed projects
    const completed = cloudSecData.weeks.filter(week => week.status === 'completed').length;
    animateCounter(setCompletedProjects, completed, 1000);
    
    // Estimate total hours (10 hours per week)
    const hours = completed * 10;
    animateCounter(setTotalHours, hours, 1500);
    
    // Count unique technologies
    const allTools = cloudSecData.weeks.flatMap(week => week.projectDetails.tools);
    const uniqueTools = [...new Set(allTools)].length;
    animateCounter(setTechnologiesUsed, uniqueTools, 2000);
    
    // Certification progress
    const progress = weekStatus.progressPercentage;
    animateCounter(setCertificationProgress, progress, 2500);
  }, []);

  const animateCounter = (setter, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setter(target);
        clearInterval(timer);
      } else {
        setter(Math.floor(start));
      }
    }, 16);
  };

  return (
    <Container>
      <Row className="align-items-center">
        <Col lg={12}>
          <div className="achievements-bx">
            <Row>
              <Col lg={12} className="text-center mb-4">
                <h3>From Code Enthusiast to Industry-Ready Developer</h3>
                <p>My journey from physics student to software engineer showcases my passion for problem-solving and continuous learning. With hands-on experience in Python and Java, plus certifications in cutting-edge technologies like AI and cloud security, I'm ready to bring fresh perspectives and solid technical skills to your development team.</p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={3} sm={6} className="mb-4">
                <div className="achievement-item">
                  <div className="achievement-number">10</div>
                  <div className="achievement-label">CloudSec Complete</div>
                  <div className="achievement-description">100% CloudSec Network Graduate</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="achievement-item">
                  <div className="achievement-number">1+</div>
                  <div className="achievement-label">Years at WeThinkCode_</div>
                  <div className="achievement-description">Intensive software engineering training</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="achievement-item">
                  <div className="achievement-number">6+</div>
                  <div className="achievement-label">Programming Languages</div>
                  <div className="achievement-description">Python, Java, JavaScript, SQL, C++</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="achievement-item">
                  <div className="achievement-number">5</div>
                  <div className="achievement-label">Major Certifications</div>
                  <div className="achievement-description">CS50, CloudSec, Standard Bank, Generative AI, Financial Literacy</div>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={12} className="text-center">
                <div className="skills-highlight">
                  <h5>Technical Skills & Expertise</h5>
                  <div className="skills-section">
                    <div className="skill-category">
                      <h6>Core Programming</h6>
                      <div className="skills-tags">
                        <span className="skill-tag primary">Python (Intermediate)</span>
                        <span className="skill-tag primary">Java</span>
                        <span className="skill-tag">JavaScript</span>
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">Flutter (Learning)</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h6>Development Practices</h6>
                      <div className="skills-tags">
                        <span className="skill-tag">Object-Oriented Programming</span>
                        <span className="skill-tag">Agile Development</span>
                        <span className="skill-tag">Software Testing</span>
                        <span className="skill-tag">Mobile Development</span>
                        <span className="skill-tag">DevOps</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h6>Specialized Knowledge</h6>
                      <div className="skills-tags">
                        <span className="skill-tag">AWS Cloud Security</span>
                        <span className="skill-tag">Generative AI</span>
                        <span className="skill-tag">RESTful APIs</span>
                        <span className="skill-tag">Spring Boot</span>
                        <span className="skill-tag">Flask & Django</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h6>Professional Skills</h6>
                      <div className="skills-tags">
                        <span className="skill-tag leadership">Technical Mentoring</span>
                        <span className="skill-tag leadership">Problem Solving</span>
                        <span className="skill-tag leadership">Team Collaboration</span>
                        <span className="skill-tag leadership">Continuous Learning</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
