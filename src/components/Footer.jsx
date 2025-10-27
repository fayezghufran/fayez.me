import React from "react";
import {
  BiLogoFacebook,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="mt-20 bg-[#111111] border-t border-gray-600 px-4 py-8">
      <div
        className="
          max-w-6xl mx-auto
          flex flex-col items-center gap-6
          sm:flex-col
          md:flex-row md:justify-between md:items-center
          text-center md:text-left
        "
      >
        {/* Left: copyright */}
        <p
          className="text-gray-400 text-sm order-3 md:order-1"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          &copy; {new Date().getFullYear()} Fayez Ghufran. All rights reserved.
        </p>

        {/* Center: social icons */}
        <div
          className="flex gap-4 text-gray-400 order-1 md:order-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a href="mailto:fayezghufran8573@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6ae7b]" aria-label="Gmail">
            <BiLogoGmail className="text-2xl" />
          </a>
          <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6ae7b]" aria-label="Facebook">
            <BiLogoFacebook className="text-2xl" />
          </a>
          <a href="https://github.com/fayezghufran" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6ae7b]" aria-label="GitHub">
            <BiLogoGithub className="text-2xl" />
          </a>
          <a href="https://www.instagram.com/fayez.ghufran" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6ae7b]" aria-label="Instagram">
            <BiLogoInstagram className="text-2xl" />
          </a>
          <a href="https://www.linkedin.com/in/fayez-ghufran" target="_blank" rel="noopener noreferrer" className="hover:text-[#d6ae7b]" aria-label="LinkedIn">
            <BiLogoLinkedin className="text-2xl" />
          </a>
        </div>

        {/* Right: small note */}
        <p
          className="text-gray-500 text-sm order-2 md:order-3"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Designed & Built with ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
