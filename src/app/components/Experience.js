// src/app/components/Experience.js
"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Fullstack Developer - Demand Point Skills and Services",
    period: "2024 - Present",
    description:
      "Initially joined on a contract to design their mobile app UI, then earned a full-time position as a fullstack developer. Currently building and maintaining scalable web applications using modern tech stacks.",
  },
  {
    role: "Front End Developer - Pollcraft, Nigeria",
    period: "Oct 2022 - Feb 2023",
    description:
      "Worked closely with stakeholders to align on design strategies and best practices. Delivered iterations in an Agile workflow and tested web-based functionality for voter engagement. Actively researched emerging web trends for future implementation.",
  },
  {
    role: "Web Developer - Mercado, Kano",
    period: "Nov 2019 - Aug 2022",
    description:
      "Collaborated with designers and project managers to ensure efficient and timely project delivery. Improved performance and reduced downtime by 10% through systematic optimizations. Troubleshot and maintained key client websites using modern technologies.",
  },
  {
    role: "Intern - Aptech, Kano",
    period: "Sep 2018 - Aug 2019",
    description:
      "Built UI components using JavaScript, HTML5, and CSS3. Managed multiple tasks with minimal supervision and documented changes for team knowledge sharing.",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="relative max-w-4xl mx-auto space-y-10 text-gray-300 pt-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}>
      <h2 className="text-3xl md:text-3xl font-semibold text-white uppercase mb-6 pb-2">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.02,
              backgroundColor: "rgba(128, 90, 213, 0.1)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="border-l-4 border-purple-500 pl-4 py-4 px-3 rounded-md hover:shadow-lg cursor-pointer duration-200">
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
            <p className="text-gray-300 leading-relaxed">{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
