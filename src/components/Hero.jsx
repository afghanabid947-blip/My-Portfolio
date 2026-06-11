import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#000000] text-white px-6"
    >
      {/* Glow background effect */}
      <div className="absolute w-[500px] h-[500px] bg-[#14213d] blur-3xl opacity-40 rounded-full"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-center max-w-3xl"
      >
        {/* Badge */}
        <p className="text-[#fca311] uppercase tracking-widest text-sm mb-4">
          Frontend Developer
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm a <span className="text-[#fca311]">Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mt-5 text-lg leading-relaxed">
          I build modern, responsive and high-performance websites using React,
          Tailwind CSS and WordPress.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="bg-[#fca311] text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Hire Me
          </a>

          <a
            href="#projects"
            className="border border-[#fca311] text-[#fca311] px-8 py-3 rounded-full font-semibold hover:bg-[#fca311] hover:text-black transition"
          >
            View Projects
          </a>
        </div>

        {/* Small info */}
        <div className="mt-10 text-sm text-gray-400">
          Available for freelance work ✨
        </div>
      </motion.div>
    </section>
  );
}
