import React, { useState } from "react";
import { BiChat, BiLinkExternal, BiSend } from "react-icons/bi";
import Image1 from "../assets/printify.png";
import Image2 from "../assets/softedge.png";
import Image3 from "../assets/academy.png";
import Image4 from "../assets/health.png";
import Image5 from "../assets/artha.png";
import Image6 from "../assets/ExpenseManagement.png";
import { IoIosArrowDropright } from "react-icons/io";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Expenditure Management App",
      description:
        "A full-stack app to manage and split expenses with features for tracking, editing, and calculating dues, built using React and Spring Boot.",
      tech: ["React", "Tailwind CSS", "Spring Boot", "MySQL"],
      img: Image6,
      link: "https://drive.google.com/file/d/1I-6v3SxjhWhmzgR4rGr0a6upPeVig0GD/view?usp=sharing",
    },
    {
      title: "Printify",
      description:
        "A replica of the Printify website, recreated to mirror the design and functionality of the original platform.",
      tech: ["React JS", "Tailwind CSS"],
      img: Image1,
      link: "https://printify-hazel.vercel.app/",
    },
    {
      title: "SoftEdge",
      description:
        "SoftEdge is a modern, responsive website built with React and Tailwind CSS. It offers a clean and minimalistic design, perfect for showcasing business services with smooth navigation and a user-friendly interface.",
      tech: ["React JS", "Tailwind CSS"],
      img: Image2,
      link: "https://soft-edge-gamma.vercel.app/",
    },
    {
      title: "Academy Catalog",
      description:
        " The application integrates with an external API for fetching the data and features infinite scroll and search functionality to provide a smooth user experience.",
      tech: ["React JS", "Tailwind CSS", "Node JS"],
      img: Image3,
      link: "https://academy-catalog.vercel.app/",
    },
    {
      title: "Healthcare Appointment Portal",
      description:
        "Developed a web app for booking doctor appointments using HTML and Tailwind CSS.Designed a responsive UI with smooth user flows for patients and doctors.",
      tech: ["React JS", "Tailwind CSS"],
      img: Image4,
      link: "https://medical-web-mu.vercel.app/",
    },
    {
      title: "Artha Clone",
      description:
        "A replica of the Artha website, recreated to mirror the design and functionality of the original platform.",
      tech: ["React JS", "Tailwind CSS"],
      img: Image5,
      link: "https://artha-clone.vercel.app/",
    },
  ];

  // Show 4 by default; show all if "View More" clicked
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section id="projects" className="mt-20 md:mt-28 px-4 flex flex-col gap-10">
      {/* Intro */}
      <div className="max-w-2xl" data-aos="fade-down">
        <button
          className="flex items-center gap-2 px-3 py-1 border border-gray-600 text-gray-300 rounded-xl hover:bg-[#161616] transition"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <BiChat className="text-xl" /> Projects
        </button>
        <h1
          className="mt-6 text-4xl md:text-6xl font-bold leading-tight"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          Checkout{" "}
          <span className="bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] inline-block text-transparent bg-clip-text">
            My Projects
          </span>
        </h1>
        <p
          className="mt-4 text-gray-400 text-lg"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          These are some of the projects I’ve built while learning and growing
          as a Full Stack Developer.
        </p>
      </div>

      {/* Project Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {visibleProjects.map((proj, idx) => (
          <div
            key={idx}
            className="border border-gray-600 p-6 rounded-3xl flex flex-col justify-between bg-transparent hover:bg-[#111111] transition"
            data-aos="fade-up"
            data-aos-delay={500 + idx * 100}
          >
            <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
              <h2 className="text-2xl font-semibold">{proj.title}</h2>
              <a
                href={proj.link}
                target="_blank"
                className="flex items-center gap-2 px-3 py-1 text-sm sm:text-base bg-linear-to-r from-[#eacda3] to-[#d6ae7b] text-black hover:from-[#d6ae7b] hover:to-[#eacda3] rounded-2xl transition"
              >
                Open <BiLinkExternal className="text-xl" />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-3">
              {proj.tech.map((t, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-3 py-1 border border-gray-600 text-gray-300 rounded-xl hover:bg-[#161616] transition text-sm"
                  data-aos="fade-right"
                  data-aos-delay={600 + i * 100}
                >
                  {t}
                </span>
              ))}
            </div>

            <p
              className="text-gray-400 mb-4"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              {proj.description}
            </p>

            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-52 object-cover rounded-xl"
              data-aos="zoom-in"
              data-aos-delay="800"
            />
          </div>
        ))}
      </div>

      {/* View More Button */}
      {projects.length > 4 && (
        <div data-aos="zoom-in" data-aos-delay="1000">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-2.5 text-lg bg-linear-to-r from-[#eacda3] to-[#d6ae7b] text-black hover:from-[#d6ae7b] hover:to-[#eacda3] cursor-pointer rounded-2xl flex items-center justify-center gap-2"
          >
            {showAll ? "Show Less" : "View More"} <IoIosArrowDropright />
          </button>
        </div>
      )}
    </section>
  );
};

export default Projects;
