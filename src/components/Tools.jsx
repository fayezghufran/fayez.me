import React from "react";
import { GiMoebiusStar } from "react-icons/gi";
import Image1 from "../assets/icons8-html-96.png";
import Image2 from "../assets/icons8-css-96.png";
import Image3 from "../assets/icons8-java-96.png";
import Image4 from "../assets/icons8-react-96.png";
import Image5 from "../assets/icons8-javascript-96.png";
import Image6 from "../assets/icons8-sql-96.png";
import Image7 from "../assets/icons8-tailwind-css-96.png";
import Image8 from "../assets/icons8-github-96.png";
import Image9 from "../assets/icons8-git-96.png";
import Image10 from "../assets/icons8-spring-boot-96.png";
import Image11 from "../assets/icons8-api-96.png";

const Tools = () => {
  const tools = [
    { img: Image1, title: "HTML" },
    { img: Image2, title: "CSS" },
    { img: Image5, title: "JavaScript" },
    { img: Image4, title: "React JS" },
    { img: Image7, title: "Tailwind CSS" },
    { img: Image3, title: "Java" },
    { img: Image10, title: "Spring Boot" },
    { img: Image6, title: "SQL" },
    { img: Image11, title: "API" },
    { img: Image9, title: "Git" },
    { img: Image8, title: "GitHub" },
  ];

  return (
    <section id="tools" className="mt-20 md:mt-28 flex flex-col gap-10 px-4">
      {/* Heading */}
      <div
        className="max-w-2xl"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <button
          className="flex items-center gap-2 px-3 py-1 border border-gray-600 text-gray-300 rounded-xl hover:bg-[#161616] transition"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <GiMoebiusStar className="text-xl" /> Tools
        </button>
        <h1
          className="mt-6 text-4xl md:text-5xl font-bold leading-tight"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          My Tech <span className="bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] inline-block text-transparent bg-clip-text">Stack</span>
        </h1>
        <p
          className="mt-4 text-gray-400 text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          A few of the technologies and tools I've been working with recently to
          bring ideas to life.
        </p>
      </div>

      {/* Tools Grid */}
      <div
  className="
    grid 
    grid-cols-2 
    sm:grid-cols-3 
    md:grid-cols-4 
    lg:grid-cols-5 
    gap-6 
    justify-items-center
  "
>
  {tools.map((tool, index) => (
    <div
      key={index}
      className="
        group
        border border-gray-600 
        px-6 py-6 
        rounded-3xl 
        flex flex-col 
        items-center 
        transition-all duration-300 ease-in-out
        w-full max-w-[150px]
        hover:bg-[#111111] hover:scale-105 hover:shadow-lg hover:border-[#d6ae7b]
      "
      data-aos="zoom-in"
      data-aos-delay={500 + index * 100} // staggered animation
    >
      <img
        src={tool.img}
        alt={tool.title}
        className="
          h-16 w-16 object-contain 
          transition-transform duration-300 
          group-hover:-translate-y-1
        "
      />
      <h2
        className="
          text-md font-semibold mt-3 text-center 
          transition-transform duration-300 
          group-hover:-translate-y-1
        "
      >
        {tool.title}
      </h2>
    </div>
  ))}
</div>

    </section>
  );
};

export default Tools;
