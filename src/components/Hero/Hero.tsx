import React, { useContext, useState, useEffect } from "react";
import Button from "react-scroll";
import { Link } from "react-scroll";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
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
    <>
      <section id="hero" className="bg-gray-900 h-screen">
        <div className="absolute inset-0 flex items-center text-center justify-center">
          <div className="">
            <Fade duration={1000} delay={500}>
              <h1 className="text-white mb-8 font-extrabold text-3xl md:text-5xl lg:text-6xl">
                {"This is a portfolio about"}
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                  {"Mizuki Sango"}
                </span>
                <br />
              </h1>
            </Fade>

            <Fade duration={1000} delay={1000}>
              <Link to="about" smooth duration={1000}>
                <button className="font-medium text-xl border-2 border-blue-600 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-600 hover:text-blue-200">
                  {"Know more..."}
                </button>
              </Link>
            </Fade>
          </div>
        </div>
      </section>
      <svg className="bg-slate-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#111827"
          d="M0,32L48,80C96,128,192,224,288,224C384,224,480,128,576,112C672,96,768,160,864,154.7C960,149,1056,75,1152,90.7C1248,107,1344,213,1392,266.7L1440,320L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
};

export default Hero;
