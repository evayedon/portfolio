import { motion } from "framer-motion";

const skillCategories = [
  {
    label: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "CSS", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["Python", "Django", "SQLite", "MongoDB"],
  },
  {
    label: "Tools & Other",
    skills: ["Git", "Docker", "C++"],
  },
];

export default function Skills() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <p className="text-orange-500 text-xs tracking-[0.2em] uppercase font-mono mb-2">
          // what I work with
        </p>
        <h2 className="text-3xl font-bold text-white">Tech Skills</h2>
      </motion.div>

      <div className="flex flex-col gap-10">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 font-mono">
              {category.label}
            </p>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 border border-orange-500/30 rounded-full bg-white/5 text-white text-sm font-medium cursor-default hover:border-orange-500 hover:bg-orange-500/10 transition-colors duration-200"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}