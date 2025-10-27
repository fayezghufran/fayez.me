import React from "react";
import profileImage from "../assets/50eaqi50eaqi50eac.png";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const Profile = () => {
  return (
    <div
      className="
      bg-[#161616]
      lg:w-[300px] w-full
      border border-gray-600
      rounded-3xl
      lg:sticky lg:top-6 h-fit
    "
      data-aos="fade-right"
    >
      <div className="p-6 flex flex-col items-center text-center">
        <h2
          className="text-3xl font-bold mb-3"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Fayez Ghufran
        </h2>
        <img
          src={profileImage}
          alt="Profile"
          className="rounded-3xl h-60 w-60 object-cover mb-4"
          data-aos="zoom-in"
          data-aos-delay="200"
        />

        <p
          className="text-sm text-gray-400"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Specialization:
        </p>
        <h3
          className="text-lg font-semibold"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Full Stack Developer
        </h3>

        <p
          className="text-sm text-gray-400 mt-4"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Based in:
        </p>
        <h3
          className="text-lg font-semibold"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          India
        </h3>

        {/* Social Icons */}
        <div
          className="flex gap-3 mt-4"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <a
            href="mailto:fayezghufran8573@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGmail className="border border-gray-600 rounded-xl p-2 text-4xl transition-all duration-300 hover:bg-[#d6ae7b] hover:text-white hover:scale-110 hover:shadow-lg" />
          </a>

          <a
            href="https://www.instagram.com/fayez.ghufran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoInstagram className="border border-gray-600 rounded-xl p-2 text-4xl transition-all duration-300 hover:bg-[#d6ae7b] hover:text-white hover:scale-110 hover:shadow-lg" />
          </a>

          <a
            href="https://github.com/fayezghufran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoGithub className="border border-gray-600 rounded-xl p-2 text-4xl transition-all duration-300 hover:bg-[#d6ae7b] hover:text-white hover:scale-110 hover:shadow-lg" />
          </a>

          <a
            href="https://www.linkedin.com/in/fayez-ghufran"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoLinkedin className="border border-gray-600 rounded-xl p-2 text-4xl transition-all duration-300 hover:bg-[#d6ae7b] hover:text-white hover:scale-110 hover:shadow-lg" />
          </a>

          <a
            href="https://www.facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebook className="border border-gray-600 rounded-xl p-2 text-4xl transition-all duration-300 hover:bg-[#d6ae7b] hover:text-white hover:scale-110 hover:shadow-lg" />
          </a>
        </div>

        {/* Button */}
        <a
          href="mailto:fayezghufran8573@gmail.com?subject=Let's%20Collaborate&body=Hi%20Fayez,%0AI'd%20love%20to%20discuss%20a%20project%20with%20you!"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-6 px-8 py-2.5 text-lg bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] text-black hover:from-[#d6ae7b] hover:to-[#eacda3] cursor-pointer rounded-2xl">
            Let’s Work Together
          </button>
        </a>
      </div>
    </div>
  );
};

export default Profile;
