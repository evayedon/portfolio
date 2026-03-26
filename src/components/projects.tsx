import { motion } from "framer-motion";
import codingImg from "../assets/coding.png";
import codeblockImg from "../assets/codeblock.jpg";

const projects = [
  {
    name: "Smart Parking System Simulator",
    type: "SYSTEM DEVELOPMENT",
    link: "",
    description:
      "Advanced Python application simulating smart parking solutions. Implements object-oriented principles and optimized algorithms for efficient parking management with real-time availability tracking.",
    image: codeblockImg,
  },
  {
    name: "Weather App",
    type: "WEB DEVELOPMENT",
    link: "",
    description:
      "Interactive weather application leveraging public APIs to deliver real-time meteorological data. Features include 5-day forecasts and location search with a responsive interface.",
    image: codingImg,
  },
  {
    name: "Game Store Management System",
    type: "SYSTEM DEVELOPMENT",
    link: "",
    description:
      "Full-featured store management system with inventory tracking, sales reporting, and customer management built with Python and SQLite.",
    image: codeblockImg,
  },
];

export default function Projects() {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-4">
      {projects.map((proj, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ y: -6, x: -3 }}
          className="relative border-2 border-orange-500 w-80 text-white flex flex-col rounded-2xl overflow-hidden bg-[#0f0f0f] shadow-lg shadow-orange-500/10 cursor-pointer group"
        >
          {/* Image */}
          {proj.image && (
            <div className="h-36 overflow-hidden">
              <motion.img
                src={proj.image}
                alt={proj.name}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
            </div>
          )}

          {/* Content */}
          <div className="p-5 flex flex-col gap-2 flex-1">
            <span className="text-orange-500 text-xs tracking-[0.15em] uppercase font-mono">
              {proj.type}
            </span>
            <h2 className="text-lg font-bold leading-snug">{proj.name}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {proj.description}
            </p>
          </div>

          {/* Arrow link */}
          {proj.link && (
            <a
              href={proj.link}
              target="_blank"
              rel="noreferrer"
              className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <motion.div
                whileHover={{ x: 3, y: -3 }}
                className="bg-orange-500 rounded-full p-1.5"
              >
                <svg
                  className="w-4 h-4 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 17L17 7M7 7h10v10"
                  />
                </svg>
              </motion.div>
            </a>
          )}

          {/* Hover glow overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
}
