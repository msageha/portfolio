import React from "react";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section id="hero" className="bg-gray-900 h-screen">
      <div className="absolute inset-0 flex items-center text-center justify-center flex-col mx-10">
        <Fade duration={1000} delay={300}>
          <h1 className="text-white mb-8 font-extrabold text-4xl md:text-6xl lg:text-7xl">
            {"This is a portfolio about"}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {"Mizuki Sango"}
            </span>
            <br />
          </h1>
        </Fade>

        <Fade duration={1000} delay={1000}>
          <Link to="about" smooth duration={600}>
            <button className="text-blue-400 text-xl md:text-3xl lg:text-4xl hover:text-primary-600 focus:text-primary-600 focus:outline-none">
              {"About me..."}
            </button>
          </Link>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
