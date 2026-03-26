import { useEffect, useState } from "react";
import Navigation from "./components/navigation";
import Contact from "./components/contact";
import About from "./components/about";
import Projects from "./components/projects";
import HeroSection from "./components/hero";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col bg-[#0a0a0a] items-center">
      <div className="w-full bg-[radial-gradient(circle_at_20%_30%,rgba(255,0,90,0.2),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(0,200,255,0.15),transparent_40%)]">
        <Navigation activeSection={activeSection} />
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects"></section>
        <section id="contacts">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
