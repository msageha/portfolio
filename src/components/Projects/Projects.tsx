import React, { useContext, useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../Title/Title";
import Project from "./Project";
const Projects = () => {
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
    <section id="projects" className="bg-gray-900  text-white items-center mx-auto">
      <Title title="Projects" />
      <div className="m-20">
        <Project
          id={1}
          title="Project 1"
          info="This is a project about something"
          url="https://www.google.com"
          image="https://source.unsplash.com/random/400x200"
        />
      </div>
    </section>
  );
};

export default Projects;
