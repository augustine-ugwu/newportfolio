"use client";

import { useState, useEffect } from "react";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaHandPointRight,
} from "react-icons/fa";
import { HiOutlineXMark } from "react-icons/hi2";

const services = [
  {
    title:
      "High-Performance, Responsive Websites Built with Modern Technologies.",
    price: "Flexible pricing based on project scope.",
    icon: <FaCode size={28} />,
    deliverables: [
      "Mobile-first, responsive website",
      "SEO Optimization",
      "Accessibility compliance",
      "Up to 5 custom pages",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    timeline: "7 days",
  },
  {
    title:
      "Conversion-Focused Landing Pages for Startups, Campaigns, and Product Launches.",
    price: "Flexible pricing based on project scope.",
    icon: <FaPaintBrush size={28} />,
    deliverables: [
      "Single-page design + build",
      "Analytics integration",
      "A/B testing setup",
      "Copywriting support",
    ],
    techStack: ["React", "Tailwind CSS", "Vite", "Netlify"],
    timeline: "3-5 days",
  },
  {
    title:
      "From Figma to Functional: I Convert Design Files Into Clean, Production-Ready Code.",
    price: "Flexible pricing based on project scope.",
    icon: <FaMobileAlt size={28} />,
    deliverables: [
      "Pixel-perfect conversion",
      "Responsive layout",
      "Component-based structure",
      "Reusable styles & tokens",
    ],
    techStack: ["React", "Tailwind CSS", "TypeScript", "Figma"],
    timeline: "5-7 days",
  },
  {
    title:
      "Refactor & Optimize Your Frontend Codebase for Better Speed, Maintainability, and UX.",
    price: "Flexible pricing based on project scope.",
    icon: <FaCode size={28} />,
    deliverables: [
      "Code cleanup & restructuring",
      "Performance optimization",
      "UI consistency improvements",
      "Best practices applied",
    ],
    techStack: ["React", "Lighthouse", "ESLint", "Prettier"],
    timeline: "4-6 days",
  },
];

const lineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 2 } },
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedService(null);
      }
    };

    if (selectedService) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedService]);

  return (
    <motion.section
      id="services"
      className="max-w-4xl mx-auto md:pt-20 text-white relative z-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <div className="mb-6 relative">
        <div className="flex items-center gap-4 text-lg tracking-widest uppercase">
          <FaHandPointRight className="text-4xl text-white animate-bounce-left" />
          <span>WHAT I DO</span>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-10">
        {services.map((service, index) => (
          <div key={index} className="space-y-6">
            <motion.div
              className="h-[1px] bg-white"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <h3 className="text-3xl sm:text-5xl">{service.title}</h3>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="text-gray-300 text-sm max-w-3xl">
                <p className="text-white text-md font-light tracking-widest uppercase">
                  Open to part-time / contract roles
                </p>
                {/* <p className="text-white text-lg font-medium">
                  {service.price}
                </p> */}
              </div>
              <div className="text-right">
                <button
                  onClick={() => setSelectedService(service)}
                  className="rounded-full border border-white px-6 py-2 hover:bg-white hover:text-black transition text-sm font-semibold"
                >
                  VIEW SERVICE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4 pt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="bg-[#121212] relative rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-4"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-300 hover:text-red-500 transition duration-200 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-[#121212]"
                aria-label="Close modal"
              >
                <HiOutlineXMark className="w-6 h-6" />
              </button>

              <h2 className="text-2xl font-semibold text-white mb-1">
                {selectedService.title}
              </h2>
              <p className="text-sm text-gray-400">{selectedService.price}</p>

              <div className="space-y-2">
                <h3 className="text-white font-semibold text-sm">
                  Deliverables:
                </h3>
                <ul className="text-gray-300 list-disc pl-5 text-sm">
                  {selectedService.deliverables.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <h3 className="text-white font-semibold text-sm pt-2">
                  Tech Stack:
                </h3>
                <ul className="flex flex-wrap gap-2 text-sm text-gray-300">
                  {selectedService.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="px-2 py-1 bg-gray-800 rounded-full text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-white pt-2">
                  <span className="font-medium">Timeline:</span>{" "}
                  {selectedService.timeline}
                </p>

                <div className="pt-4">
                  <Link href="/contact">
                    <div className="inline-block rounded-full border border-white px-4 py-2 hover:bg-white hover:text-black transition text-sm font-semibold">
                      CONTACT FOR MORE INFO
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Services;
