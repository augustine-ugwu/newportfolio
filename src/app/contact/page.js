"use client";

import ContactForm from "../components/ContactForm";
import CustomCursor from "../components/CustomCursor";
import GoBackButton from "../components/GoBackButton";

const ContactPage = () => {
  return (
    <>
      <CustomCursor />

      <main className="relative bg-black text-white font-[var(--font-geist-sans)] px-4 md:px-6 sm:pt-24 pt-10 pb-24 overflow-hidden min-h-screen">
        {/* Background Glow Spots */}
        <div className="absolute top-10 left-[-100px] w-[300px] h-[300px] bg-purple-500 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-10 right-[-150px] w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl rounded-full z-0" />
        <div className="absolute top-[40%] left-[50%] w-[300px] h-[300px] bg-pink-500 opacity-10 blur-2xl rounded-full z-0" />
        <div className="absolute bottom-[30%] left-[10%] w-[250px] h-[250px] bg-emerald-500 opacity-10 blur-2xl rounded-full z-0" />
        <div className="absolute top-[20%] right-[-10%] w-[350px] h-[350px] bg-yellow-400 opacity-10 blur-2xl rounded-full z-0" />

        {/* Page Title & Description */}
        <section className="relative z-10 max-w-4xl mx-auto text-center space-y-2">
          {/* Go Back Button */}
          <GoBackButton /> {/* ✅ Clean and reusable */}
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-widest">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Fill out the form
            below and I’ll get back to you as soon as possible.
          </p>
        </section>
        {/* Contact Form */}
        <section className="relative z-10 mt-6 max-w-3xl mx-auto">
          <ContactForm />
        </section>
      </main>
    </>
  );
};

export default ContactPage;
