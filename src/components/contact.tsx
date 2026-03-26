{
  /*import { useEffect, useState } from "react";
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
      {/* Header *}
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

      {/* Share section *}
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



*/
}

import { useState } from "react";
import { motion } from "framer-motion";
import RightArrow from "../assets/arrow-right.png";

const contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_APIKEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      style={{ fontFamily: "Syne" }}
      className=" min-h-screen text-white overflow-x-hidden flex justify-center  items-center justify-between gap-10"
    >
      <div className=" pr-20 ">
        <motion.h1
          style={{ fontWeight: 800 }}
          className=" text-2xl md:text-5xl mb-4"
        >
          Shoot me<br></br>
          <span className="text-orange-500"> a message</span>
        </motion.h1>
        <motion.p className="text-sm md:w-100 text-gray-500 text-gray-500 font-bold">
          Whether it's a collab invite, an opportunity, or just a connection —
          I'm always open to talking.
        </motion.p>
        {[
          {
            connect: "LinkedIn",
            description: "Let's connect professionally",
            link: "https://www.linkedin.com/in/evans-ayensu-donkor-730b30289",
          },
          {
            connect: "GitHub",
            description: "Check out my repository",
            link: "https://github.com/evayedon",
          },
        ].map((connection, index) => (
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
            <div className="flex items-center justify-between border-b-1 border-orange-500 my-4  pb-4   ease-in-out">
              <motion.div
                className="flex flex-col text-lg font-bold"
                variants={{ hover: { x: 6 } }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                <h1 className=" group-hover:text-orange-500">
                  {connection.connect}
                </h1>
                <p className="text-gray-400 text-sm">
                  {connection.description}
                </p>
              </motion.div>

              <motion.div
                variants={{ hover: { x: 6, y: -5 } }}
                transition={{ delay: 0.1, duration: 0.2 }}
              >
                <img src={RightArrow} alt="arrow" className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="flex items-center justify-center md:w[30%] ">
        <div className="max-w-2xl w-full text-orange-500">
          <motion.h1
            className="text-2xl md:text-7xl font-light leading-none mb-12 tracking-tight text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            GET IN TOUCH
          </motion.h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <label htmlFor="name" className="text-gray-400 text-lg">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-500  transition-colors"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label htmlFor="email" className="text-gray-400 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-500  transition-colors"
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label htmlFor="message" className="text-gray-400 text-lg">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="w-full mt-2 p-4 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-orange-500 transition-colors"
                required
              ></textarea>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <button
                type="submit"
                className=" text-orange-500 font-light py-4 px-8 rounded-lg hover:bg-white/85 transition-colors text-lg border-3"
              >
                Submit
              </button>
            </motion.div>
          </form>
          <span>{result}</span>
        </div>
      </div>
    </div>
  );
};

export default contact;
