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
                <h3>Ready for Junior Developer Role</h3>
                <p>Final-year WeThinkCode_ student with proven technical skills and real-world project experience</p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col md={3} sm={6} className="mb-4">
                <div className="achievement-item">
                  <div className="achievement-number">{completedProjects}</div>
                  <div className="achievement-label">CloudSec Projects</div>
                  <div className="achievement-description">Hands-on cloud security projects</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="achievement-item">
                  <div className="achievement-number">3+</div>
                  <div className="achievement-label">Years Experience</div>
                  <div className="achievement-description">WeThinkCode_ + Real Projects</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="achievement-item">
                  <div className="achievement-number">5+</div>
                  <div className="achievement-label">Tech Stack</div>
                  <div className="achievement-description">Python, Flask, Java, Django, SQL</div>
                </div>
              </Col>
              <Col md={3} sm={6} className="mb-4">
                <div className="achievement-item">
                  <div className="achievement-number">100%</div>
                  <div className="achievement-label">Ready to Contribute</div>
                  <div className="achievement-description">Final year + mentoring experience</div>
                </div>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col lg={12} className="text-center">
                <div className="skills-highlight">
                  <h5>Core Technical Skills - Junior Developer Ready</h5>
                  <div className="skills-section">
                    <div className="skill-category">
                      <h6>Backend Development</h6>
                      <div className="skills-tags">
                        <span className="skill-tag primary">Python</span>
                        <span className="skill-tag primary">Flask</span>
                        <span className="skill-tag">Java</span>
                        <span className="skill-tag">Django</span>
                        <span className="skill-tag">RESTful APIs</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h6>Database & Tools</h6>
                      <div className="skills-tags">
                        <span className="skill-tag">SQL</span>
                        <span className="skill-tag">Teradata</span>
                        <span className="skill-tag">Git</span>
                        <span className="skill-tag">JSON Web Tokens</span>
                        <span className="skill-tag">Version Control</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h6>Cloud & Security</h6>
                      <div className="skills-tags">
                        <span className="skill-tag">AWS Services</span>
                        <span className="skill-tag">Cloud Security</span>
                        <span className="skill-tag">Lambda Functions</span>
                        <span className="skill-tag">Spring Boot</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h6>Soft Skills</h6>
                      <div className="skills-tags">
                        <span className="skill-tag leadership">Mentoring</span>
                        <span className="skill-tag leadership">Problem Solving</span>
                        <span className="skill-tag leadership">Team Collaboration</span>
                        <span className="skill-tag leadership">Event Management</span>
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
