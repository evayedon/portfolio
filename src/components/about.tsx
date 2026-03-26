
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "../assets/profile.jpg";
import Projects from "./projects";
import Skills from "./skills";

const schools = [
  { name: "Indiana University – South Bend", year: "Jan 2026 – May 2027" },
  { name: "Ivy Tech Community College", year: "Jan 2024 – Dec 2025" },
];

const tabs = ["Projects", "Tech Skills", "Certificates"] as const;
type Tab = (typeof tabs)[number];

const certificates: { name: string; issuer: string; year: string }[] = [
  // Add real certs here
];

function CertificatesTab() {
  if (certificates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500 gap-3">
        <span className="text-4xl">🎓</span>
        <p className="text-sm tracking-widest uppercase">
          No certificates added yet
        </p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {certificates.map((c, i) => (
        <div
          key={i}
          className="border border-orange-500/30 rounded-xl p-4 text-white bg-white/5"
        >
          <p className="font-bold text-lg">{c.name}</p>
          <p className="text-orange-400 text-sm">{c.issuer}</p>
          <p className="text-gray-500 text-xs mt-1">{c.year}</p>
        </div>
      ))}
    </div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>("Projects");

  return (
    <section className="flex items-center justify-center mx-[5%] flex-col py-20">
      {/* Hero row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-10 p-8 flex-col md:flex-row"
      >
        {/* Text */}
        <div className="text-white space-y-6 font-medium flex-1 max-w-xl">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl"
          >
            Hi, I'm <span className="text-orange-500 font-bold">Evans</span>
          </motion.h1>

          <div className="text-lg space-y-4 text-gray-300 leading-relaxed">
            {[
              "I am a student at Indiana University – South Bend with a strong passion for technology and problem-solving.",
              "I enjoy learning about programming, data, and how technology can be used to solve real-world problems.",
              "My goal is to grow as a developer while contributing to meaningful technology that improves people's lives.",
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex-shrink-0 relative"
        >
          <img
            src={profileImg}
            className="ring-4 ring-orange-500 rounded-full w-56 h-56 md:w-64 md:h-64 object-cover shadow-xl shadow-orange-500/20"
            alt="Evans Ayensu Donkor"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border border-dashed border-orange-500/30 pointer-events-none"
          />
        </motion.div>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-2xl mb-14 space-y-3"
      >
        <p className="text-orange-500 text-xs tracking-[0.2em] uppercase font-mono mb-4">
          // Education
        </p>
        {schools.map((school, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className="flex justify-between items-center border-l-2 border-orange-500 pl-4 py-2 bg-white/5 rounded-r-lg"
          >
            <span className="text-white font-semibold text-sm">
              {school.name}
            </span>
            <span className="text-orange-400 text-xs font-mono ml-4 whitespace-nowrap">
              {school.year}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Tab switcher */}
      <div className="w-full">
        {/* Tab buttons */}
        <div className="flex justify-center gap-6 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileTap={{ scale: 0.95 }}
              className={`relative py-3 px-8 rounded-3xl border-[2.5px] text-base font-bold cursor-pointer transition-all duration-200 ${
                activeTab === tab
                  ? "bg-orange-500 border-orange-500 text-black"
                  : "border-orange-500 text-orange-500 hover:bg-white hover:text-black hover:border-white"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-3xl bg-orange-500 -z-10"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="p-4"
          >
            {activeTab === "Projects" && <Projects />}
            {activeTab === "Tech Skills" && <Skills />}
            {activeTab === "Certificates" && <CertificatesTab />}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
