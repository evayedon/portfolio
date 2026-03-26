import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RightArrow from "../assets/arrow-right.png";

const list = [
  "A COLLAB INVITE",
  "AN EMAIL",
  "AN OPPORTUNITY",
  "A LINKEDIN CONNECTION",
];

const connect = [
  {
    media: "LinkedIn",
    description: "Connect with me professionally",
    link: "https://www.linkedin.com/in/evans-ayensu-donkor-730b30289",
  },
  {
    media: "GitHub",
    description: "Check out my repositories",
    link: "https://github.com/evayedon",
  },
  {
    media: "Email",
    description: "Let's talk business",
    link: "mailto:optimistdelt80@gmail.com",
  },
];

export function DisplayList() {
  const [next, setNext] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setNext((prev) => (prev + 1) % list.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={next}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.35 }}
      >
        {list[next]}
      </motion.div>
    </AnimatePresence>
  );
}

export function DisplayConnection() {
  return (
    <div className="bg-transparent w-full max-w-md">
      {connect.map((connection, index) => (
        <motion.a
          key={index}
          href={connection.link}
          target="_blank"
          rel="noreferrer"
          className="group text-white cursor-pointer block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover="hover"
        >
          <div className="flex items-center justify-between border-b-2 border-orange-500 my-4 px-2 pb-4 transition-colors duration-300 ease-out group-hover:border-white">
            <motion.div
              className="flex flex-col text-xl"
              variants={{ hover: { x: 4 } }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h1 className="font-bold transition-colors duration-300 group-hover:text-orange-500">
                {connection.media}
              </h1>
              <p className="text-gray-400 text-base">
                {connection.description}
              </p>
            </motion.div>

            <motion.div
              variants={{ hover: { x: 5, y: -5 } }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img src={RightArrow} alt="arrow" className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.a>
      ))}
    </div>
  );
}

const Contact = () => {
  return (
    <div className="flex flex-col items-center py-24 px-4">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center mb-12"
      >
        <p className="text-orange-500 text-xs tracking-[0.2em] uppercase font-mono mb-3">
          // get in touch
        </p>
        <h1 className="text-white text-3xl font-bold mb-4">MY CONTACT</h1>
        <div className="flex text-orange-500 text-xl items-center gap-2 overflow-hidden">
          <span className="text-white font-semibold">SHOOT ME</span>
          <div className="bg-white text-black rounded-lg py-1 px-3 min-w-[240px] flex justify-center overflow-hidden font-bold text-sm">
            <DisplayList />
          </div>
        </div>
      </motion.div>

      <DisplayConnection />

      {/* Share section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 flex flex-col items-center gap-2 w-full"
      >
        <h1 className="text-white text-xl font-bold">SPREAD THE WORD!</h1>
        <h2 className="text-orange-500 text-sm tracking-widest">
          INTERESTED? SHARE MY PORTFOLIO!
        </h2>
        <div className="flex justify-center gap-8 mt-6 pb-10 border-b border-white/20 w-screen text-gray-400 text-sm">
          {["Facebook", "Twitter", "LinkedIn"].map((s) => (
            <motion.span
              key={s}
              whileHover={{ color: "#f97316", y: -2 }}
              className="cursor-pointer transition-colors"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
