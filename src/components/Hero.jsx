import React from "react";
import { BiCategory, BiChat, BiDownload } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="mt-16 sm:mt-20 lg:mt-28 flex flex-col gap-10 px-4"
    >
      {/* Intro + Heading */}
      <div
        className="max-w-3xl mx-auto sm:mx-0 text-center sm:text-left"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <button
          className="flex items-center gap-2 px-3 py-1 border border-gray-600 text-gray-300 rounded-xl hover:bg-[#161616] transition mx-auto sm:mx-0"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <BiChat className="text-xl" /> Let’s meet!
        </button>

        <h1
          className="mt-6 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] inline-block text-transparent bg-clip-text"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          I'm Fayez Ghufran{" "}
          <span className="bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] inline-block text-transparent bg-clip-text">
            Full Stack Developer
          </span>
          .
        </h1>

        <p
          className="mt-4 text-gray-400 text-base sm:text-lg"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          I build modern web apps with React, Node.js, Spring Boot and more.
        </p>
      </div>

      {/* Action Buttons */}
      <div
        className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start sm:mx-0 mx-auto"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <ScrollLink
          to="projects" // The id of your Projects section
          smooth={true}
          duration={500}
          // offset={-80} // adjust for navbar height if needed
          // spy={true}
        >
          <button
            className="group w-full sm:w-auto flex items-center justify-center gap-2 
      px-6 py-3 text-base sm:text-lg border border-gray-600 text-gray-300 rounded-2xl 
      bg-transparent overflow-hidden relative transition-all duration-300 cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">
              My Works
            </span>
            <BiCategory className="text-xl transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </ScrollLink>
        <a
          href="https://drive.google.com/file/d/1e6a_xMXAhX1kDTz43-rv0Zc7SwdH30gd/preview"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <button
            className="group w-full sm:w-auto flex items-center justify-center gap-2 
    px-6 py-3 text-base sm:text-lg border border-gray-600 text-gray-300 rounded-2xl 
    bg-transparent overflow-hidden relative transition-all duration-300 cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay="700"
          >
            <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-1">
              Download CV
            </span>
            <BiDownload className="text-xl transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
