import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const roles = ["Web Developer", "Web Designer", "WordPress Developer"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentRole = roles[index % roles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        // typing
        setText(currentRole.substring(0, text.length + 1));
        setSpeed(150);

        if (text === currentRole) {
          setIsDeleting(true);
          setSpeed(1000); // pause before deleting
        }
      } else {
        // deleting
        setText(currentRole.substring(0, text.length - 1));
        setSpeed(80);

        if (text === "") {
          setIsDeleting(false);
          setIndex((prev) => prev + 1);
          setSpeed(300);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed, roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-[#000000] text-white px-6 overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#14213d] blur-3xl opacity-40 rounded-full" />

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

        {/* Typing Text */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm a{" "}
          <span className="text-[#fca311] border-r-2 border-[#fca311] pr-2 animate-pulse">
            {text}
          </span>
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

        {/* Footer note */}
        <div className="mt-10 text-sm text-gray-400">
          Available for freelance work ✨
        </div>
      </motion.div>
    </section>
  );
}
