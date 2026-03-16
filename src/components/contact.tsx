import { useEffect, useState } from "react";
import Navigation from "./navigation";
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
      setNext((prev) => (prev + 1) % list.length); // no out of bounds, no missing dep
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return <div>{list[next]}</div>;
}

export function DisplayConnection() {
  return (
    <div>
      {connect.map((connection, index) => (
        <a
          key={index}
          href={connection.link}
          target="_blank"
          rel="noreferrer"
          className="group text-white cursor-pointer block"
        >
          <div className="flex items-center justify-between border-b-2 border-orange-500 my-4 px-2 pb-4 transition-all group-hover:border-white duration-300 ease-out">
            <div className="flex flex-col text-xl transition-all group-hover:text-orange-500 duration-300 ease-out">
              <h1 className="font-bold">{connection.media}</h1>
              <p>{connection.description}</p>
            </div>
            <div className="transition-all duration-300 ease-out group-hover:-translate-y-3 group-hover:translate-x-2">
              <img src={RightArrow} alt="arrow" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

const Contact = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="pt-20 w-full max-w-xl mb-20">
          {" "}
          <div className="flex flex-col items-center">
            <h1 className="text-white text-2xl font-bold">MY CONTACT</h1>
            <div className="flex text-orange-500 text-xl items-center p-2">
              <h2 className="py-1 px-2">SHOOT ME</h2>
              <h2 className="bg-white rounded-lg py-1 px-2">
                <DisplayList />
              </h2>
            </div>
          </div>
          <DisplayConnection />
        </div>

        <h1 className="text-white text-2xl font-bold mb-2">SPREAD THE WORD!</h1>
        <h1 className="text-orange-500">INTERESTED? SHARE MY PORTFOLIO!</h1>
        <p className="flex justify-center gap-5 pb-10 text-gray-400 mt-15 border-b-2 border-white w-screen">
          {" "}
          <span>Facebook</span>
          <span>Twitter</span>
          <span>LinkedIn</span>
        </p>
      </div>
    </>
  );
};

export default Contact;
