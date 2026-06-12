import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "mabidtech8787@gmail.com",
        "template_bg20fni",
        e.target,
        "cpq8zjnk-cr6ST_co",
      )
      .then(() => {
        alert("Message Sent!");
        setLoading(false);
      })
      .catch(() => {
        alert("Something went wrong!");
        setLoading(false);
      });

    setForm({ name: "", email: "", message: "" });
    e.target.reset();
  }

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#000000] text-white px-6 overflow-hidden"
    >
      {/* 🌌 PARTICLES BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 bg-[#fca311] rounded-full opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 5}s`,
              transform: `scale(${Math.random()})`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <div className="relative text-center mb-14 z-10">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-[#fca311]">Me</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Let’s build something amazing together
        </p>
      </div>

      {/* Glass Form */}
      <div className="relative max-w-2xl mx-auto z-10">
        {/* Glow */}
        <div className="absolute inset-0 bg-[#14213d] blur-3xl opacity-30 rounded-3xl"></div>

        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
          <form onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <input
              name="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-[#fca311]"
            />

            {/* Email */}
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-[#fca311]"
            />

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your Message"
              className="w-full bg-transparent border-b border-gray-600 py-3 outline-none focus:border-[#fca311]"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#fca311] text-black font-bold py-3 rounded-xl hover:scale-105 transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>

          {/* WhatsApp */}
          <a
            href="https://wa.me/923430878727"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-6 text-[#25D366] font-semibold hover:tracking-wider transition"
          >
            Chat on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
