"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { label: "ABOUT", to: "about" },
    { label: "SERVICES", to: "services" },
    { label: "PORTFOLIO", to: "portfolio" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto p-6 md:p-10 md:px-20 flex justify-between items-center">
        {/* Logo / Name */}
        <ScrollLink
          to="hero"
          smooth={true}
          duration={500}
          offset={-80}
          className="text-2xl tracking-tight cursor-pointer"
          style={{ fontFamily: "Gambarino" }}>
          Augustine Ugwu
        </ScrollLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-12 tracking-widest">
          {navItems.map((item) => (
            <ScrollLink
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer text-md hover:text-gray-300 transition">
              {item.label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer border border-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-white hover:text-black transition">
            WORK WITH ME
          </ScrollLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md px-6 pb-20 pt-2 space-y-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.label}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={toggleMenu}
              className="block text-sm font-medium text-white hover:text-gray-300 transition cursor-pointer">
              {item.label}
            </ScrollLink>
          ))}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            onClick={toggleMenu}
            className="block bg-white text-black px-4 py-2 rounded-full text-center font-semibold mt-2 cursor-pointer">
            Work with Me
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
