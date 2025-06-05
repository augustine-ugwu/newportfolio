// src/app/components/Portfolio.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="relative max-w-4xl mx-auto space-y-4 md:pt-20"
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
              className="rounded-xl w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <h3 className="mt-4 text-lg font-medium text-white">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 font-medium mb-4">
              {project.description}
            </p>
            <div className="grid grid-cols-12 items-center gap-4">
              {/* View Site Button (3/12 columns) */}
              {project.liveLink && (
                <div className="col-span-12 sm:col-span-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center cursor-pointer px-4 py-2 text-sm font-medium rounded-full bg-white text-black hover:bg-gray-100 transition">
                    View Site
                  </a>
                </div>
              )}

              {/* Tech Stack (9/12 columns) */}
              {project.stack && (
                <div className="col-span-12 sm:col-span-9 flex flex-wrap gap-3">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`text-sm font-bold ${
                        tech === "#React.js"
                          ? "text-blue-400"
                          : tech === "#Tailwind CSS"
                          ? "text-cyan-400"
                          : tech === "#Vite"
                          ? "text-purple-400"
                          : tech === "#Next.js"
                          ? "text-indigo-400"
                          : tech === "#Express.js"
                          ? "text-green-400"
                          : tech === "#Node.js"
                          ? "text-lime-400"
                          : tech === "#MongoDB"
                          ? "text-emerald-400"
                          : tech === "#MUI"
                          ? "text-sky-400"
                          : tech === "#TensorFlow.js"
                          ? "text-yellow-400"
                          : tech === "#Vue.js"
                          ? "text-green-300"
                          : "text-gray-400"
                      }`}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
