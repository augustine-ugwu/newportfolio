"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaHandPointRight,
} from "react-icons/fa";

const services = [
  {
    title:
      "High-Performance, Responsive Websites Built with Modern Technologies — Delivered Within 7 Days.",
    price: "₦200,000 / project",
    icon: <FaCode size={28} />,
  },
  {
    title:
      "Conversion-Focused Landing Pages for Startups, Campaigns, and Product Launches.",
    price: "₦150,000 / project",
    icon: <FaPaintBrush size={28} />,
  },
  {
    title:
      "From Figma to Functional — I Convert Design Files Into Clean, Production-Ready Code.",
    price: "₦150,000 / project",
    icon: <FaMobileAlt size={28} />,
  },
  {
    title:
      "Refactor & Optimize Your Frontend Codebase for Better Speed, Maintainability, and UX.",
    price: "₦100,000 / project",
    icon: <FaCode size={28} />,
  },
];

const lineVariants = {
  hidden: { width: 0 },
  visible: { width: "100%", transition: { duration: 2 } },
};

const Services = () => {
  return (
    <motion.section
      id="services"
      className="max-w-4xl mx-auto md:pt-20 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}>
      {/* Section Heading with pointing hand */}
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
              <div className="flex items-center">
                <h3 className="text-3xl sm:text-5xl">{service.title}</h3>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="text-gray-300 text-sm max-w-3xl">
                <p className="text-white text-md font-light tracking-widest">
                  STARTING AT
                </p>{" "}
                <p className="text-white text-lg font-medium">
                  {service.price}
                </p>
              </div>
              <div className="text-right">
                <button className="rounded-full border border-white px-6 py-2 hover:bg-white hover:text-black transition text-sm font-semibold">
                  VIEW SERVICE
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
