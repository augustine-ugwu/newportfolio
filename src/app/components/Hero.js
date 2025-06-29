"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const roles = ["a Frontend Developer", "a Web Designer", "a Visual Developer"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="relative z-10 max-w-4xl mx-auto space-y-2 justify-center items-center text-white px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}>
      <motion.p
        className="uppercase text-sm tracking-widest text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}>
        DESIGNS THAT SPEAK. CODE THAT DELIVERS. EXPERIENCES THAT LAST.
      </motion.p>

      <motion.h1
        className="text-4xl font-medium sm:text-5xl leading-tight tracking-tight flex flex-wrap items-center gap-2"
        style={{ fontFamily: "Gambarino" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}>
        Augustine Ugwu is&nbsp;
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-purple-600 inline-block role-glow">
            {roles[index]},
          </motion.span>
        </AnimatePresence>
      </motion.h1>

      <motion.div
        className="text-4xl font-medium sm:text-5xl flex items-center gap-2 md:pl-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{ fontFamily: "Gambarino" }}>
        based in Abuja, Nigeria.
        <motion.span
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-purple-600">
          ↴
        </motion.span>
      </motion.div>

      <motion.div
        className="flex items-center justify-between gap-6 mt-16 flex-wrap w-full max-w-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}>
        {/* Recommended by */}
        <div className="md:flex items-center gap-4">
          <span className="text-white text-sm tracking-widest uppercase">
            Recommended by
          </span>
          <div className="flex items-center -space-x-2">
            {[
              "/images/headshot2.jpg",
              "/images/headshot3.jpg",
              "/images/headshot4.jpg",
              "/images/headshot5.jpg",
              "/images/headshot6.jpg",
              "/images/headshot8.jpg",
            ]
              .slice(0, 5)
              .map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Recommender ${index + 1}`}
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            {/* +3 bubble */}
            <div className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium border-2 border-white">
              +3
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block text-white">|</div>

        {/* WORK WITH ME button */}
        <Link
          href="/contact"
          className="cursor-pointer bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition-all duration-300">
          {" "}
          WORK WITH ME
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
