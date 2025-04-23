// src/app/components/About.js
"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="relative z-10 max-w-4xl mx-auto space-y-4 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-semibold text-white">About Me</h2>
      <p>
        I'm a frontend developer with a love for design, animation, and user
        experience. My work bridges technical precision and creative flair,
        building websites that feel as good as they look.
      </p>
      <p>
        I specialize in React, Next.js, Tailwind, and motion design. I'm also
        proficient with Figma, Photoshop, and After Effects.
      </p>
    </motion.section>
  );
};

export default About;
