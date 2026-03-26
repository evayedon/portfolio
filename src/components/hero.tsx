import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Navigation from "./navigation";

const greetings = ["Bonjour!", "Hola!", "こんにちは!", "你好!", "Hɛlo!"];

/* ── Hero / greeting section ── */
function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-screen bg-[#111]">
      {/* Animated grid */}
      <style>{`
        @keyframes gridMovement {
          0%   { background-position: 0px 0px; }
          100% { background-position: 60px 60px; }
        }
      `}</style>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_3px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_3px)] bg-[size:50px_50px] animate-[gridMovement_2s_linear_infinite]" />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,43,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative flex flex-col items-center justify-center h-[85%] gap-10">
        {/* Greeting */}
        <div className="relative h-20 w-full flex justify-center items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h1
              key={greetings[currentIndex]}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -60, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute text-5xl md:text-6xl font-bold text-[#ff5f56] tracking-wide"
            >
              {greetings[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Terminal card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-white/5 font-mono max-w-lg w-[90vw]"
        >
          <div className="flex items-center px-4 py-3 gap-2 bg-white/5 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          <div className="px-10 py-6 text-sm md:text-base">
            <pre className="text-gray-300 leading-relaxed">
              <code>
                {"{\n"}
                {"  "}
                <span className="text-gray-100">"name"</span>
                {": "}
                <span className="text-orange-400 font-bold">
                  "Evans Ayensu Donkor"
                </span>
                {",\n"}
                {"  "}
                <span className="text-gray-100">"career"</span>
                {": "}
                <span className="text-orange-400">"Software Development"</span>
                {",\n"}
                {"  "}
                <span className="text-gray-100">"focus"</span>
                {": "}
                <span className="text-orange-400">
                  "Fullstack Web Developer"
                </span>
                {"\n}"}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-gray-500 text-xs tracking-widest uppercase"
        >
          <div className="w-px h-10 bg-gradient-to-b from-orange-500 to-transparent" />
          scroll
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
/* ── Default export ── 
function NavBar({ activeSection }: NavigationProps) {
  return (
    <>
      <Navigation activeSection={activeSection} />
      <HeroSection />
    </>
  );
} */
