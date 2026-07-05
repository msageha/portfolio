import React from "react";
import { Fade } from "react-awesome-reveal";

const Title = ({ title }: { title: string }) => (
  <Fade duration={1000} delay={300}>
    <h2 className="mb-10 text-center font-bold text-3xl md:text-5xl lg:text-6xl">{title}</h2>
  </Fade>
);

export default Title;
