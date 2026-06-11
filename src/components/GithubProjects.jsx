import { motion } from "framer-motion";

const githubProjects = [
  {
    name: "Testimonial slider",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/blob/main/21%20)%20Testimonial%20Slider/index.html",
  },
  {
    name: "Acordion",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/tree/main/22%20)%20Accordian",
  },
  {
    name: "Calculator",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/tree/main/25_tip_Calculater",
  },
  {
    name: "Login Form",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/tree/main/28_Login_form",
  },
  {
    name: "Flip Card",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/tree/main/28_Login_form",
  },
  {
    name: "Stop Watch",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/tree/main/26_Stop_watch",
  },
  {
    name: "Atm machine",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/tree/main/28_Login_form/01%20How%20to%20user%20accept%20input",
  },
  {
    name: "Tabs Project",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/tree/main/31_TABS_PROJECT_NO_2",
  },
  {
    name: "Charecter Counter",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/tree/main/17%20)%20Character_counter",
  },
  {
    name: "Temperature Converter",
    link: "https://github.com/afghanabid947-blip/My_Js_Beginner_Projects/tree/main/06%20temperature%20convertion",
  },
  {
    name: "Landing Page",
    link: "https://github.com/afghanabid947-blip/My_All_Html_and_css_Projects/tree/main/Skybuilds",
  },
];

export default function GithubProjects() {
  return (
    <section className="py-20 bg-[#000000] text-white px-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          GitHub <span className="text-[#fca311]">Projects</span>
        </h2>
        <p className="text-gray-400 mt-3">Click to view my code on GitHub</p>
      </div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {githubProjects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.07 }}
            className="bg-[#14213d] border border-[#1f2a44] rounded-xl p-6 text-center shadow-lg hover:shadow-[#fca311]/30 transition block"
          >
            {/* Icon circle */}
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#fca311] text-black font-bold flex items-center justify-center">
              {project.name.charAt(0)}
            </div>

            {/* Title */}
            <p className="text-white font-semibold">{project.name}</p>

            {/* GitHub label */}
            <p className="text-gray-400 text-sm mt-2">View Code →</p>

            {/* Accent line */}
            <div className="w-12 h-1 bg-[#fca311] mx-auto mt-4 rounded"></div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
