import React from "react";
import { GiMoebiusStar } from "react-icons/gi";

const About = () => {
  return (
    <section
      id="about"
      className="mt-16 sm:mt-20 md:mt-28 flex flex-col gap-10 px-4"
    >
      {/* Heading */}
      <div
        className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
        data-aos="fade-down"
      >
        <button
          className="flex items-center gap-2 px-3 py-1 border border-gray-600 text-gray-300 rounded-xl hover:bg-[#161616] transition mx-auto md:mx-0"
          data-aos="fade-right"
        >
          <GiMoebiusStar className="text-xl" /> About Me
        </button>
        <h1
          className="mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Full Stack Developer <br />
          Building{" "}
          <span className="bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] inline-block text-transparent bg-clip-text">
            Real-World Projects
          </span>{" "}
          with Passion.
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center md:items-start">
        {/* Left Column */}
        <div
          className="flex-1 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="mt-4 text-gray-400 text-base md:text-lg leading-relaxed">
            I’m a Full Stack Developer, actively building real-world projects
            using Java, React, and modern web technologies. As a recent Computer
            Science graduate trained at Jspider Hyderabad, I enjoy turning
            complex problems into user-friendly solutions. I’m eager to learn,
            explore emerging technologies, and create scalable, practical
            applications that make an impact.
          </p>

          <a
            href="https://drive.google.com/file/d/1wGokMDfZtgRtixEVtmx6_VqXdrlYmoMZ/preview"
            download
            className="inline-block mt-6 px-8 py-2.5 text-base md:text-lg bg-linear-to-r from-[#eacda3] to-[#d6ae7b] text-black hover:from-[#d6ae7b] hover:to-[#eacda3] rounded-2xl transition"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Download CV
          </a>
        </div>

        {/* Right Column */}
        <div
          className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 gap-6 text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div data-aos="fade-right" data-aos-delay="700">
            <p className="text-sm text-gray-400">Name</p>
            <h3 className="text-lg font-semibold">Fayez Ghufran</h3>
          </div>
          <div data-aos="fade-right" data-aos-delay="800">
            <p className="text-sm text-gray-400">Phone</p>
            <h3 className="text-lg font-semibold">+91 8299353776</h3>
          </div>
          <div data-aos="fade-right" data-aos-delay="900">
            <p className="text-sm text-gray-400">Email</p>
            <h3 className="text-lg font-semibold">
              fayezghufran8573 @gmail.com
            </h3>
          </div>
          <div data-aos="fade-right" data-aos-delay="1000">
            <p className="text-sm text-gray-400">Location</p>
            <h3 className="text-lg font-semibold">India</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
