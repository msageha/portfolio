import React from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Career from "./Career/Career";
import Research from "./Research/Research";
import SNS from "./SNS/SNS";
import Footer from "./Footer/Footer";
import Wave from "./Wave/wave";

function App() {
  return (
    <>
      <Hero />
      <Wave bgColor="bg-gray-900" waveRGB="203,213,225" />
      <About />
      <Wave bgColor="bg-slate-300" waveRGB="17,24,39" />
      <Career />
      <Wave bgColor="bg-gray-900" waveRGB="203,213,225" />
      <Research />
      <Wave bgColor="bg-slate-300" waveRGB="17,24,39" />
      <SNS />
      <Footer />
    </>
  );
}

export default App;
