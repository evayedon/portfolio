import React from "react";
import pic from "../assets/profile.jpg";
import { useState, useEffect } from "react";

const greetings = ["Bonjour!", "Hola!", "こんにちは!", "你好!", "Hɛlo"];
const navigation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="">
      <nav className="flex px-[7%] text-white justify-between py-5 bg-[#333333]">
        <div>
          {/*<img src={pic} alt='logo'/>*/}
          <h1>helo</h1>
        </div>
        <div className="flex">
          <ul className="flex space-x-10 items-center">
            <li>
              <button className="">About</button>
            </li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      <div className="relative h-screen bg-[#333333]">
        <style>
          {`
          @keyframes gridMovement {
            0% { background-position: 0px 0px; }
            100% { background-position: 90px 90px; } 
          }
        `}
        </style>
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_3px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_3px)] bg-[size:50px_50px] animate-[gridMovement_2s_linear_infinite]">
          <div className="flex flex-col items-center justify-center h-[80%]">
            <div className="relative h-20 w-full flex justify-center items-center overflow-hidden mb-8">
              {greetings.map((greeting, index) => {
                let positionClass = "translate-y-full opacity-0";

                if (index === currentIndex) {
                  positionClass = "translate-y-0 opacity-100";
                } else if (
                  index === currentIndex - 1 ||
                  (currentIndex === 0 && index === greetings.length - 1)
                ) {
                  positionClass = "-translate-y-full opacity-0";
                }

                return (
                  <h1
                    key={greeting}
                    className={`absolute text-5xl md:text-6xl font-bold text-[#ff5f56] transition-all duration-700 ease-in-out tracking-wide ${positionClass}`}
                  >
                    {greeting}
                  </h1>
                );
              })}
            </div>
            <div className="flex items-center justify-center ">
              <div className=" max-w-8xl bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden border border-white/5 font-mono">
                <div className="flex items-center px-4 py-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>

                <div className="px-12 pb-6 pt-2 text-sm md:text-base ">
                  <pre className="text-gray-300 leading-relaxed">
                    <code>
                      {"{"}
                      <br />
                      {"  "}
                      <span className="text-gray-100">"about_me"</span>: {"{"}
                      <br />
                      {"    "}
                      <span className="text-gray-100">"name"</span>:{" "}
                      <span className="text-orange-400">"Evans Ayensu"</span>,
                      <br />
                      {"    "}
                      <span className="text-gray-100">
                        "career-in-progress"
                      </span>
                      :{" "}
                      <span className="text-orange-400">
                        "Software Development"
                      </span>
                      ,<br />
                      {"    "}
                      <span className="text-gray-100">
                        "current-career-focus"
                      </span>
                      :{" "}
                      <span className="text-orange-400">
                        "Fullstack Web Developer"
                      </span>
                      <br />
                      {"  "}
                      {"}"}
                      <br />
                      {"}"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default navigation;
