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
    link: "optimistdelt80@gmail.com",
  },
];

// function to display the list infor
export function DisplayList() {
  const [next, setNext] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      if (next < list.length) {
        setNext(next + 1); // go to next
      } else {
        setNext(0);
      }
    }, 2500);
    return () => clearInterval(id); // clear interval
  });

  return (
    <>
      <div className="">{list[next]}</div> {/*animate to wiggle*/}
    </>
  );
}

// map each of the connection and display each of the component
export function DisplayConnection() {
  return (
    <div>
      {connect.map((connection, index) => (
        <div
          key={index}
          className=" group text-white cursor-pointer  transition-all"
        >
          {" "}
          {/* group all hovering effect together using "group" and use group-hover*/}
          <a href={connection.link} />
          <div className="flex items-center justify-between border-b-2 border-orange-500 my-4 px-2 pb-4 transition-all group-hover:border-white duration-300 ease-out">
            <div className=" flex flex-col text-xl transition-all group-hover:text-orange-500 duration-300 ease-out">
              <h1 className="font-bold"> {connection.media}</h1>
              <p>{connection.description}</p>
            </div>

            <div className="transition-all duration-300 ease-out group-hover:-translate-y-3 group-hover:translate-x-2">
              <img className="" src={RightArrow} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const contact = () => {
  return (
    <>
      <div className="flex flex-col items-center  ">
        <div className="pt-20  w-150 mb-20">
          <div className="flex flex-col items-center h-30">
            <h1 className="text-white text-2xl font-bold ">MY CONTACT</h1>

            <div className="flex text-orange-500 text-xl items-center p-2 ">
              <h2 className="py-1 px-2"> SHOOT ME</h2>
              <h2 className="bg-white rounded-lg py-1 px-2 ">
                <DisplayList />
              </h2>
            </div>
          </div>
          <DisplayConnection />
        </div>
        <h1 className="text-white text-2xl font-bold mb-2">SPREAD THE WORD!</h1>
        <h1 className="text-orange-500"> INTERESTED? SHARE MY PORTFOLIO!</h1>
        <p className="flex justify-center gap-5 pb-10 text-gray-400 my-15 border-white border-b-2 through w-screen">
          <span >Facebook</span> <span>Twitter</span>
          <span>LinkedIn</span>
        </p>
      </div>
      <div className=""></div>
    </>
  );
};

export default contact;
