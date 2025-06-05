"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = "service_stexi9q";
    const templateId = "template_q264q0d";
    const publicKey = "dYfZlwXbe1ibgn7rt";

    const templateParams = {
      title: "Contact Form Message",
      from_name: form.name,
      reply_to: form.email,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      message: form.message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        toast.success("Message sent successfully! 🚀");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            required
            placeholder="e.g. John Doe"
            className="w-full px-4 py-3 rounded-lg bg-black/30 text-white border border-white/10 focus:ring-1 focus:ring-white outline-none transition duration-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            required
            placeholder="e.g. john@example.com"
            className="w-full px-4 py-3 rounded-lg bg-black/30 text-white border border-white/10 focus:ring-1 focus:ring-white outline-none transition duration-300"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="6"
          required
          placeholder="Tell me more about your project..."
          className="w-full px-4 py-3 rounded-lg bg-black/30 text-white border border-white/10 focus:ring-1 focus:ring-white outline-none transition duration-300 resize-none"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 hover:shadow-purple-500/30">
          {loading ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
