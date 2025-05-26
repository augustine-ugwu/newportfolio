// src/app/components/Hero.js
"use client";

import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa"; // Import icons

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 text-center space-y-6 justify-center items-center text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}>
      <h1 className="text-4xl  sm:text-6xl font-bold leading-tight tracking-tight">
        <span className="font-display">Augustine Ugwu</span>
      </h1>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        A Frontend Developer with over 3+ years of working experience. I design
        and develop user-friendly, interactive, and visually appealing websites
        and applications using the latest and most efficient technologies.
      </p>
      <span
        className="font-display text-4xl"
        style={{ fontFamily: "Gambarino" }}>
        This should be Gambarino
      </span>

      <div className="flex justify-center gap-6 mt-6 flex-wrap">
        <ScrollLink
          to="portfolio"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition">
          View Projects
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
          About Me
        </ScrollLink>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          aria-label="GitHub Profile"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition">
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linked Profile"
          className="text-gray-400 hover:text-white transition">
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
          className="text-gray-400 hover:text-white transition">
          <FaTwitter size={24} />
        </a>
        <a
          href="mailto:your.email@example.com"
          target="_blank"
          aria-label="Mail box"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition">
          <FaEnvelope size={24} />
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
