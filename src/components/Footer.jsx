import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#000000] text-white border-t border-[#14213d] overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 bg-[#14213d] opacity-20 blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
        {/* LEFT - Brand */}
        <div>
          <h1 className="text-3xl font-bold">
            My<span className="text-[#fca311]">Portfolio</span>
          </h1>

          <p className="text-gray-400 mt-4 leading-relaxed">
            I build modern, responsive and high-performance websites using
            React, Tailwind CSS and WordPress.
          </p>
        </div>

        {/* CENTER - Links (Glass Card) */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
          <h2 className="text-lg font-semibold mb-4 text-[#fca311]">
            Quick Links
          </h2>

          <ul className="space-y-3 text-gray-300">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#fca311] transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT - Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-[#fca311]">
            Connect With Me
          </h2>

          <div className="flex gap-4 text-2xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#14213d] rounded-full hover:bg-[#fca311] hover:text-black hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/abid-ullah-5137203aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#14213d] rounded-full hover:bg-[#fca311] hover:text-black hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#14213d] rounded-full hover:bg-[#fca311] hover:text-black hover:scale-110 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#14213d] rounded-full hover:bg-[#fca311] hover:text-black hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            Available for freelance work ✨
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#14213d] py-5 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} My Portfolio. Built with React & Tailwind
          CSS.
        </p>
      </div>
    </footer>
  );
}
