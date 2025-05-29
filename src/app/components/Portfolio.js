// src/app/components/Portfolio.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="relative z-10 max-w-4xl mx-auto space-y-4 md:py-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <h2 className="md:text-3xl text-2xl font-semibold text-white">
        PORTFOLIO
      </h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-white/30 transition">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={300}
              className="rounded-xl w-full h-auto object-cover"
            />
            <h3 className="mt-4 text-lg font-medium text-white">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-3 flex-wrap">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer px-4 py-2 text-sm font-medium rounded-full bg-white text-black hover:bg-gray-100 transition">
                  View Site
                </a>
              )}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer px-4 py-2 text-sm font-medium rounded-full border border-white text-white hover:bg-white hover:text-black transition">
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
