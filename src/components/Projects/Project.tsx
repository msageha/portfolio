import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";

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
    <div key={id} className="flex flex-col md:flex-row items-center mb-12">
      <div className="md:w-1/2 md:pr-8">
        <Fade duration={1000} delay={500}>
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
            <p className="mb-6">{info}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              href={url || "#!"}
            >
              See Live
            </a>
          </div>
        </Fade>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0">
        <Fade duration={1000} delay={1000}>
          <div>
            <a
              href={url || "#!"}
              target="_blank"
              aria-label="Project Link"
              rel="noopener noreferrer"
            >
              <img src={image} alt="project" className="rounded-lg shadow-lg" />
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Project;
