// src/app/components/Portfolio.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="relative z-10 max-w-4xl mx-auto space-y-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <h2 className="text-3xl font-semibold text-white">Projects</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:border-white/30 transition">
          <Image
            src="/project1.png"
            alt="Project 1"
            width={500}
            height={300}
            className="rounded-xl w-full h-auto object-cover"
          />
          <h3 className="mt-4 text-lg font-medium text-white">
            Product Showcase
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            An elegant site to highlight client products, built with React and
            Tailwind.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://yourprojectsite.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded-full bg-white text-black hover:bg-gray-100 transition">
              View Site
            </a>
            <a
              href="https://github.com/yourusername/project-repo"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium rounded-full border border-white text-white hover:bg-white hover:text-black transition">
              View Code
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
