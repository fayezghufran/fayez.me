import React, { useState, useEffect } from "react";
import { BiMessage, BiMoon, BiSun } from "react-icons/bi";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Tools", to: "tools" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#111111]/40 backdrop-blur-md border-b border-gray-600"
            : "bg-transparent"
        }
      `}
      data-aos="fade-down"
    >
      <div className="flex justify-between items-center px-4 py-4 lg:px-8">
        {/* Hamburger */}
        <div className="lg:hidden" data-aos="fade-right">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>

        {/* Links */}
        <ul
          className={`absolute lg:static left-0 w-full lg:w-auto lg:flex lg:flex-row flex-col gap-6 p-4 lg:p-0 transition-all duration-300
            ${
              isOpen
                ? "top-16 opacity-100 bg-[#111111]/90 backdrop-blur-md pointer-events-auto"
                : "top-[-400px] opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto lg:bg-transparent lg:backdrop-blur-0"
            }
          `}
        >
          {navItems.map((item, index) => (
            <li key={item.to} data-aos="fade-down" data-aos-delay={index * 100}>
              <ScrollLink
                to={item.to}
                smooth={true}
                offset={-80} // adjust for sticky navbar height
                duration={500}
                spy={true}
                activeClass="text-[#d6ae7b]" // active link color
                className="block px-4 py-3 cursor-pointer text-[18px] hover:text-[#d6ae7b] hover:-translate-y-1 transition-all duration-300 
"
                onClick={() => setIsOpen(false)} // close mobile menu after click
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden lg:flex">
          <a
            href="mailto:fayezghufran8573@gmail.com?subject=Let's%20Collaborate&body=Hi%20Fayez,%0AI'd%20love%20to%20discuss%20a%20project%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="flex items-center gap-2 px-5 py-2.5 text-lg bg-gradient-to-r from-[#eacda3] to-[#d6ae7b] text-black hover:from-[#d6ae7b] hover:to-[#eacda3] cursor-pointer rounded-2xl backdrop-blur-sm"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              Let’s Talk <BiMessage className="text-xl" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
