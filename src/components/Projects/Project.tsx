import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import { StaticImage } from "gatsby-plugin-image";

const Project = ({
  id,
  title,
  info,
  url,
  image,
}: {
  id: number;
  title: string;
  info: string;
  url: string;
  image: string;
}) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Row key={id}>
      <Col lg={4} sm={12}>
        <Fade duration={1000} delay={500}>
          <div className="project-wrapper__text">
            <h3 className="project-wrapper__text-title">{title}</h3>
            <div>
              <p>{info}</p>
            </div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href={url || "#!"}
            >
              See Live
            </a>
          </div>
        </Fade>
      </Col>
      <Col lg={8} sm={12}>
        <Fade duration={1000} delay={1000}>
          <div className="project-wrapper__image">
            <a
              href={url || "#!"}
              target="_blank"
              aria-label="Project Link"
              rel="noopener noreferrer"
            >
              {/* <StaticImage src={image} alt="project image"  /> */}
            </a>
          </div>
        </Fade>
      </Col>
    </Row>
  );
};

export default Project;
