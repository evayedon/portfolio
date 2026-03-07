import profileImg from "../assets/profile.jpg";

function profile() {
  return (
    <>
      <div className="flex justify-center space-x-10 items-center px-[10%]">
        <div className=" text-white  w-200 space-y-10 font-['Inter:Medium',sans-serif] font-medium">
          {" "}
          <h3 className="text-orange-500 text-5xl font-bold">
            Evans Ayensu Donkor
          </h3>
          <p className="text-3xl ">
            Computer Science student at Ivy Tech Community College with a
            passion for transforming innovative ideas into functional software
            solutions. Focused on full-stack development and algorithmic
            problem-solving.
          </p>{" "}
        </div>
        <div className=" place-items-end ">
          <img
            src={profileImg}
            className=" ring-7 ring-orange-500 h-[80%] w-[80%] rounded-[40%] "
          ></img>
        </div>
      </div>
    </>
  );
}

export default profile;
