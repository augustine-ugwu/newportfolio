"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

const testimonials = [
  {
    quote:
      "Working with Augustine was a seamless experience. He turned our vision into a beautiful, functional product.",
    name: "Sarah Adeyemi",
    info: "Client · Jan 2024 · Nigeria",
    image: "/images/headshot2.jpg",
  },
  {
    quote:
      "Reliable, creative, and always professional. Our brand's website traffic grew noticeably after launch.",
    name: "James Okocha",
    info: "Client · Nov 2023 · Nigeria",
    image: "/images/headshot3.jpg",
  },
  {
    quote:
      "Augustine is a rare mix of developer and designer. He truly gets user experience.",
    name: "Fatima Bello",
    info: "Client · Aug 2023 · Nigeria",
    image: "/images/headshot4.jpg",
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(-1);

  const next = () => {
    setDirection(-1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(1);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, []);

  const getIndex = (offset) =>
    (current + offset + testimonials.length) % testimonials.length;

  const variants = {
    enter: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir < 0 ? -300 : 300,
      opacity: 0,
      scale: 0.9,
      position: "absolute",
    }),
  };

  return (
    <section
      id="testimonials"
      className="max-w-6xl mx-auto md:px-6  text-gray-200 relative">
      <h2 className="text-4xl font-semibold text-center mb-16 text-white uppercase ">
        Testimonials
      </h2>

      <div className="relative flex items-center justify-center overflow-hidden">
        {/* Previous card preview */}
        <motion.div
          key={`prev-${getIndex(1)}`}
          className="hidden md:block absolute left-4 w-1/3 max-w-sm pointer-events-none opacity-40 scale-95 transition-all duration-300"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}>
          <TestimonialCard testimonial={testimonials[getIndex(1)]} faint />
        </motion.div>

        {/* Current card */}
        <div className="w-full md:w-1/3 relative h-[400px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
              className="absolute w-full h-full">
              <TestimonialCard testimonial={testimonials[current]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next card preview */}
        <motion.div
          key={`next-${getIndex(-1)}`}
          className="hidden md:block absolute right-4 w-1/3 max-w-sm pointer-events-none opacity-40 scale-95 transition-all duration-300"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}>
          <TestimonialCard testimonial={testimonials[getIndex(-1)]} faint />
        </motion.div>

        {/* Navigation arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 w-full px-6 flex justify-between z-30">
          <button
            onClick={prev}
            className="bg-black p-2 rounded-full transition">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={next}
            className="bg-black p-2 rounded-full transition">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-24 gap-10 md:gap-18">
        <h2
          className="text-3xl md:text-6xl font-medium text-center text-white"
          style={{ fontFamily: "Gambarino" }}>
          Let's Collaborate
        </h2>

        {/* WORK WITH ME button */}
        <Link
          href="/contact"
          className="cursor-pointer text-sm bg-white text-black px-8 py-4 rounded-full font-extrabold hover:bg-gray-200 transition-all duration-300">
          WORK WITH ME
        </Link>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial, faint = false }) => (
  <div
    className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl px-8 py-10 shadow-xl text-center transition-all duration-300 ${
      faint ? "opacity-40 scale-95" : ""
    }`}>
    <Quote className="w-8 h-8 text-white mx-auto mb-4" />
    <p className="text-xl text-gray-300 italic leading-relaxed mb-6">
      “{testimonial.quote}”
    </p>
    <div className="flex items-center justify-center gap-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div className="text-left">
        <p className="font-semibold text-white">{testimonial.name}</p>
        <p className="text-sm text-gray-400">{testimonial.info}</p>
      </div>
    </div>
  </div>
);

export default Testimonial;
