import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#000000] text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-12">
          About <span className="text-[#fca311]">Me</span>
        </h2>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
          {/* Profile Image */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-[#fca311] rounded-full blur-2xl opacity-40"></div>

            <img
              src="/Profile_img.jpeg"
              alt="Profile"
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-[#14213d] shadow-lg hover:shadow-[#fca311]/50 transition"
            />
          </motion.div>

          {/* Glass Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-xl p-8 rounded-2xl
            bg-white/5 backdrop-blur-xl border border-white/10
            shadow-[0_10px_40px_rgba(252,163,17,0.15)]"
          >
            {/* Glow background */}
            <div className="absolute inset-0 bg-[#14213d] opacity-20 blur-2xl rounded-2xl"></div>

            {/* Content */}
            <div className="relative z-10 text-left">
              <p className="text-gray-300 text-lg leading-relaxed">
                I am a passionate frontend developer skilled in{" "}
                <span className="text-[#fca311] font-semibold">Html </span>,
                <span className="text-[#fca311] font-semibold">CSS </span>,
                <span className="text-[#fca311] font-semibold">React</span>,{" "}
                <span className="text-[#fca311] font-semibold">
                  Tailwind CSS{" "}
                </span>
                ,{" "}
                <span className="text-[#fca311] font-semibold">Javascript</span>
                , and{" "}
                <span className="text-[#fca311] font-semibold">WordPress</span>.
                <br />
                <br />I build{" "}
                <span className="text-white font-semibold">
                  modern, responsive, and high-performance websites
                </span>{" "}
                with clean UI and smooth user experience.
              </p>

              {/* Accent line */}
              <div className="mt-6 w-20 h-1 bg-[#fca311] rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
