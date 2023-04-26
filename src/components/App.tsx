import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Career from "./Career/Career";
import Research from "./Research/Research";
import Projects from "./Projects/Projects";
import SNS from "./SNS/SNS";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Career />
      <Research />
      {/* <Projects /> */}
      <SNS />
      <Footer />
    </>
  );
}

export default App;
