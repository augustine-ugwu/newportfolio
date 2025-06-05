// src/app/components/About.js
"use client";

import { motion } from "framer-motion";
import {
  GithubIcon,
  TwitterIcon,
  Mail,
  LinkedinIcon,
  InstagramIcon,
} from "lucide-react";

const textFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const About = () => {
  const paragraphs = [
    `I'm Augustine, a front-end developer who blends clean and efficient code with creative problem-solving to build sleek, responsive interfaces. I specialise in transforming concepts into fast, functional websites using modern tools such as React, TypeScript, and Tailwind CSS. While I map out user flows in Figma and refine visuals in Photoshop and Illustrator, my core strength lies in translating those designs into smooth, interactive web experiences. From optimizing performance to implementing animations, I bridge the gap between design and development to deliver polished, user-friendly digital products.`,
  ];

  return (
    <motion.section
      id="about"
      className="relative z-10 max-w-6xl px-6 mx-auto text-white md:pt-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}>
      <motion.h2
        className="text-white text-2xl md:text-4xl font-medium tracking-tight mb-10 relative inline-block after:content-[''] after:block after:h-1 after:w-16 after:mt-3 after:bg-purple-500 text-center md:text-left"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontFamily: "Gambarino" }}>
        Meet Augustine
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="shrink-0">
          <img
            src="/images/profile_img.jpg"
            alt="Augustine Ugwu"
            className="w-40 h-40 md:w-56 md:h-56 object-cover rounded-full shadow-lg"
          />
        </motion.div>

        {/* Text + Social Links */}
        <div className="flex-1 space-y-6">
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              className="leading-relaxed text-lg md:text-xl text-white"
              custom={i}
              variants={textFade}>
              {text}
            </motion.p>
          ))}

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 pt-4">
            <a
              href="https://www.linkedin.com/in/augustine-ugwu-2b9243228/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              aria-label="LinkedInIcon">
              <LinkedinIcon size={24} />
            </a>
            <a
              href="https://github.com/augustine-ugwu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              aria-label="GitHubIcon">
              <GithubIcon size={24} />
            </a>
            <a
              href="https://x.com/mallamhillz?t=6W5Os90DgOUArjCu9oFp5g&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              aria-label="TwitterIcon">
              <TwitterIcon size={24} />
            </a>
            <a
              href="https://www.instagram.com/visualsby_ebuka?igsh=MWd5em9yeTRhNjRyOQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition"
              aria-label="InstagramIcon">
              <InstagramIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
