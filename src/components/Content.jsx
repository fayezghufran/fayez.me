import React from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import About from "./About";
import Tools from "./Tools";
import Contact from "./Contact";
import Footer from "./Footer";

const Content = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Projects/>
      <Tools/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Content;
