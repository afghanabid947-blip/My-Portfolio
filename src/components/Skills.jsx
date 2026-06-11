export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "WordPress",
  ];

  return (
    <section id="skills" className="py-20 bg-[#000000] text-white px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My <span className="text-[#fca311]">Skills</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Technologies I use to build modern websites
        </p>
      </div>

      {/* Skills Grid */}
      <div className="flex flex-wrap justify-center gap-5 max-w-4xl mx-auto">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-[#14213d] border border-[#1f2a44] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#fca311] hover:text-black hover:scale-105 transition duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Decorative line */}
      <div className="mt-12 flex justify-center">
        <div className="w-24 h-1 bg-[#fca311] rounded-full"></div>
      </div>
    </section>
  );
}
