import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // 🔒 HARD FIX: prevent scroll + prevent horizontal overflow
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-[#14213d]">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          {/* LOGO */}
          <h1 className="text-xl md:text-2xl font-bold text-white">
            Abid<span className="text-[#fca311]">ullah</span>
          </h1>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="text-white hover:text-[#fca311]">
              Home
            </a>
            <a href="#about" className="text-white hover:text-[#fca311]">
              About
            </a>
            <a href="#skills" className="text-white hover:text-[#fca311]">
              Skills
            </a>
            <a href="#projects" className="text-white hover:text-[#fca311]">
              Projects
            </a>
            <a href="#contact" className="text-white hover:text-[#fca311]">
              Contact
            </a>
          </nav>

          {/* HAMBURGER */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* OVERLAY (FIXED OVERFLOW ISSUE HERE) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* SIDEBAR (IMPORTANT FIX: use translate-x-0 / translate-x-[100%]) */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 max-w-[80vw] bg-[#0f172a] border-l border-[#14213d] z-50
        transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "translate-x-[100%]"}`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-5">
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        {/* LINKS */}
        <nav className="flex flex-col items-center gap-8 mt-10 text-lg font-medium">
          <a
            onClick={() => setMenuOpen(false)}
            href="#home"
            className="text-white hover:text-[#fca311]"
          >
            Home
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#about"
            className="text-white hover:text-[#fca311]"
          >
            About
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#skills"
            className="text-white hover:text-[#fca311]"
          >
            Skills
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#projects"
            className="text-white hover:text-[#fca311]"
          >
            Projects
          </a>
          <a
            onClick={() => setMenuOpen(false)}
            href="#contact"
            className="text-white hover:text-[#fca311]"
          >
            Contact
          </a>

          <a
            onClick={() => setMenuOpen(false)}
            href="#contact"
            className="mt-4 bg-[#fca311] text-black px-6 py-2 rounded-full font-semibold"
          >
            Hire Me
          </a>
        </nav>
      </aside>
    </>
  );
}
