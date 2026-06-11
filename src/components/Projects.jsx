import { motion } from "framer-motion";

const projects = [
  { name: "Gym Website", tech: "React + Tailwind" },
  { name: "E-commerce UI", tech: "React" },
  { name: "Portfolio Site", tech: "HTML + CSS" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#000000] text-white px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-[#fca311]">Projects</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Some of my recent work and practice projects
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#14213d] border border-[#1f2a44] p-6 rounded-xl shadow-lg hover:shadow-[#fca311]/20 transition"
          >
            <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>

            <p className="text-gray-300">{p.tech}</p>

            {/* Accent line */}
            <div className="w-12 h-1 bg-[#fca311] mt-4 rounded"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
