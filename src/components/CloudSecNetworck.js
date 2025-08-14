// src/components/CloudSecNetworck.js
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export const CloudSecNetworck = () => {
  // Sample data — you can edit this later
  const weeks = [
    {
      title: "Week 1 - Introduction to Cloud Security",
      description: "Overview of cloud environments, shared responsibility model, and key security concepts.",
      screenshot: "https://via.placeholder.com/600x300?text=Week+1+Screenshot"
    },
    {
      title: "Week 2 - Network Fundamentals",
      description: "Understanding network layers, firewalls, and secure network design in the cloud.",
      screenshot: "https://via.placeholder.com/600x300?text=Week+2+Screenshot"
    },
    {
      title: "Week 3 - Identity & Access Management",
      description: "Implementing secure authentication, authorization, and identity management.",
      screenshot: "https://via.placeholder.com/600x300?text=Week+3+Screenshot"
    },
    // Add more weeks as needed up to Week 10
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">CloudSec Network Bootcamp</h2>
      <Accordion defaultActiveKey="0">
        {weeks.map((week, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{week.title}</Accordion.Header>
            <Accordion.Body>
              <p>{week.description}</p>
              <img 
                src={week.screenshot} 
                alt={week.title} 
                className="img-fluid rounded shadow-sm"
              />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};
