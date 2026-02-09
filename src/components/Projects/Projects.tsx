import React from "react";
import { Fade } from "react-awesome-reveal";
import Title from "../Title/Title";
import Project from "./Project";

const Projects = () => {
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
