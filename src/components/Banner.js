import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Myportfoliopic.jpg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const fullName = "Mpho Gift Mofokeng";
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 45 : 85;
    let timeoutId;

    if (!isDeleting && typedName.length < fullName.length) {
      timeoutId = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && typedName.length === fullName.length) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, 1500);
    } else if (isDeleting && typedName.length > 0) {
      timeoutId = setTimeout(() => {
        setTypedName(fullName.slice(0, typedName.length - 1));
      }, typingSpeed);
    } else if (isDeleting && typedName.length === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
      }, 300);
    }

    return () => clearTimeout(timeoutId);
  }, [typedName, isDeleting, fullName]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                  <span className="tagline">Welcome to my portfolio</span>
                  <h1>
                    Hi, I&apos;m <span className="typed-name">{typedName}</span>
                  </h1>
                  <p>
                    Junior software engineer focused on Python, Java, and secure backend systems.
                    I build practical projects and keep shipping while learning fast.
                  </p>
                  <div className="banner-actions">
                    <a href="mailto:mofokeng_mpho@icloud.com" className="banner-cta-link">
                      <button>
                        Let&apos;s Connect <ArrowRightCircle size={25} />
                      </button>
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="banner-cta-link">
                      <button className="banner-secondary-btn">View Resume</button>
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility partialVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Mpho Gift Mofokeng" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
