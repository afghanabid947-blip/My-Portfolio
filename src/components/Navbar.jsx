export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#000000]/80 backdrop-blur-md border-b border-[#14213d]">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-white">
          My<span className="text-[#fca311]">Portfolio</span>
        </h1>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a
            href="#home"
            className="text-white hover:text-[#fca311] transition"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-white hover:text-[#fca311] transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-white hover:text-[#fca311] transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-white hover:text-[#fca311] transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="text-white hover:text-[#fca311] transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Button (optional placeholder) */}
        <button className="md:hidden text-white text-2xl">☰</button>
      </div>
    </header>
  );
}
