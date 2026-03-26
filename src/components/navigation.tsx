import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
 // { label: "Project", href: "#projects" },
  { label: "Contact", href: "#contacts" },
];

interface NavigationProps {
  activeSection?: string;
}

/* ── Top bar ── */
function Navigation({ activeSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`flex items-center justify-between px-10 h-20 w-full sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-orange-500/60 bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg shadow-black/40"
          : "border-b-4 border-double border-orange-500"
      }`}
    >
      <a href="#home" onClick={(e) => scrollTo(e, "#home")}>
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl text-white cursor-pointer font-bold tracking-wide"
        >
          EVAYEDON
        </motion.h1>
      </a>

      <nav>
        <ul className="flex items-center gap-3 text-base text-orange-500 font-medium">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`relative py-2 px-4 rounded-3xl cursor-pointer transition-all duration-200 border-[2.5px] block ${
                    isActive
                      ? "bg-orange-500 text-black border-orange-500 font-bold"
                      : "opacity-90 hover:bg-white/85 hover:text-black border-current"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
