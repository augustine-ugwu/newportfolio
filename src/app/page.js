"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Services from "./components/Services";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="relative overflow-hidden min-h-screen px-6 pt-44 pb-32 space-y-40 font-[var(--font-geist-sans)] bg-black text-white">
        {/* Blur Glow Spots */}
        <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-10 right-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-pink-500 opacity-10 blur-2xl rounded-full z-0" />
        <div className="absolute bottom-[30%] left-[10%] w-[250px] h-[250px] bg-emerald-500 opacity-10 blur-2xl rounded-full z-0" />
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-yellow-400 opacity-10 blur-2xl rounded-full z-0" />

        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Experience />
        <Footer />
      </main>
    </>
  );
}
