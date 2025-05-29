// src/app/components/Experience.js
"use client";

import { motion } from "framer-motion";

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="relative z-10 max-w-4xl mx-auto space-y-6 text-gray-300"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <h2 className="md:text-3xl text-2xl font-semibold text-white uppercase">
        Experience
      </h2>
      <div>
        <h3 className="text-xl font-medium">Freelance Web Designer</h3>
        <p className="text-sm text-gray-400">2023 - Present</p>
        <p>
          Designed and developed custom web solutions for startups and small
          businesses.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-medium">Frontend Intern - Tech Org</h3>
        <p className="text-sm text-gray-400">2022 - 2023</p>
        <p>
          Contributed to scalable component development and user experience
          improvement.
        </p>
      </div>
    </motion.section>
  );
};

export default Experience;
