// src/components/CloudSecNetworck.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal, Badge } from "react-bootstrap";
import { cloudSecData, getCurrentWeekStatus } from "../data/cloudSecData";
import 'bootstrap/dist/css/bootstrap.min.css';

export const CloudSecNetworck = ({ selectedWeek, onWeekSelect }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedWeekData, setSelectedWeekData] = useState(null);
  const weekStatus = getCurrentWeekStatus();


  const handleWeekClick = (week) => {
    setSelectedWeekData(week);
    setShowModal(true);
    if (onWeekSelect) {
      onWeekSelect(week);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      completed: { variant: "success", text: "Completed" },
      "in-progress": { variant: "warning", text: "In Progress" },
      upcoming: { variant: "secondary", text: "Upcoming" }
    };
    const config = statusConfig[status] || statusConfig.upcoming;
    return <Badge bg={config.variant}>{config.text}</Badge>;
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3 className="text-center mb-4">CloudSec Network Cloud Engineering Projects</h3>
          <p className="text-center mb-3">
            A comprehensive 10-week journey through cloud security and network engineering.
            Click on any week to explore the projects, learnings, and achievements.
          </p>

          {/* Progress Indicator */}
          <div className="text-center mb-5">
            <div className="d-flex justify-content-center align-items-center mb-3">
              <Badge bg="success" className="me-2">Week {weekStatus.currentWeek} of {weekStatus.totalWeeks}</Badge>
              <Badge bg="info">{weekStatus.progressPercentage}% Complete</Badge>
            </div>
            <div className="progress mx-auto" style={{ maxWidth: '400px', height: '8px' }}>
              <div
                className="progress-bar bg-gradient"
                role="progressbar"
                style={{
                  width: `${weekStatus.progressPercentage}%`,
                  background: 'linear-gradient(90deg, #AA367C, #4A2FBD)'
                }}
                aria-valuenow={weekStatus.progressPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <small className="text-muted mt-2 d-block">
              {weekStatus.completedWeeks} weeks completed • {weekStatus.totalWeeks - weekStatus.currentWeek} weeks remaining
            </small>
          </div>
        </Col>
      </Row>

      <Row>
        {cloudSecData.weeks.map((week) => (
          <Col md={6} lg={4} key={week.id} className="mb-4">
            <Card
              className="h-100 cloudsec-week-card"
              style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
              onClick={() => handleWeekClick(week)}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h6 className="mb-0">Week {week.id}</h6>
                {getStatusBadge(week.status)}
              </Card.Header>
              <Card.Body>
                <Card.Title className="h6">{week.topic}</Card.Title>
                <Card.Text className="small text-muted">
                  {week.description.substring(0, 100)}...
                </Card.Text>
                <div className="mt-auto">
                  <small className="text-muted">
                    Tools: {week.projectDetails.tools.slice(0, 2).join(', ')}
                    {week.projectDetails.tools.length > 2 && '...'}
                  </small>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Detailed Week Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedWeekData?.title} {selectedWeekData && getStatusBadge(selectedWeekData.status)}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedWeekData && (
            <div>
              <h5>Project Overview</h5>
              <p>{selectedWeekData.description}</p>

              <h6>Objectives</h6>
              <ul>
                {selectedWeekData.projectDetails.objectives.map((obj, index) => (
                  <li key={index}>{obj}</li>
                ))}
              </ul>

              {selectedWeekData.projectDetails.projectSteps && (
                <div className="project-steps">
                  <h6>Step-by-Step Process</h6>
                  <ul>
                    {selectedWeekData.projectDetails.projectSteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedWeekData.projectDetails.keyLearnings.length > 0 && (
                <>
                  <h6>Key Learnings</h6>
                  <ul>
                    {selectedWeekData.projectDetails.keyLearnings.map((learning, index) => (
                      <li key={index}>{learning}</li>
                    ))}
                  </ul>
                </>
              )}

              <h6>Practical Work Completed</h6>
              <p>{selectedWeekData.projectDetails.practicalWork}</p>

              {selectedWeekData.projectDetails.challenges && (
                <div className="challenge-outcome">
                  <h6>Challenges & Solutions</h6>
                  <p>{selectedWeekData.projectDetails.challenges}</p>
                </div>
              )}

              {selectedWeekData.projectDetails.outcome && (
                <div className="challenge-outcome">
                  <h6>Project Outcome</h6>
                  <p>{selectedWeekData.projectDetails.outcome}</p>
                </div>
              )}

              <div className="tools-section">
                <h6>Tools & Technologies Used</h6>
                <div className="mb-3">
                  {selectedWeekData.projectDetails.tools.map((tool, index) => (
                    <Badge key={index} className="me-2 mb-1">{tool}</Badge>
                  ))}
                </div>
              </div>

              {selectedWeekData.screenshots.length > 0 && (
                <div className="screenshot-section">
                  <h6>Screenshots & Documentation</h6>
                  {selectedWeekData.screenshots.map((screenshot, index) => (
                    <div key={index} className="screenshot-item">
                      <h6>{screenshot.title}</h6>
                      <img
                        src={screenshot.url}
                        alt={screenshot.title}
                        className="img-fluid rounded shadow-sm mb-2"
                        style={{ maxHeight: '300px', objectFit: 'cover' }}
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/600x300?text=${encodeURIComponent(screenshot.title)}`;
                        }}
                      />
                      <p className="small text-muted">{screenshot.description}</p>
                    </div>
                  ))}
                </div>
              )}

              <h6>Personal Notes & Reflections</h6>
              <p className="fst-italic">{selectedWeekData.notes}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};
