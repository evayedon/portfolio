import profileImg from "../assets/profile.jpg";

function about() {
  return (
    <>
      <div className="flex items-center  justify-between ">
        <div className=" text-white w-100 space-y-10 font-['Inter:Medium',sans-serif] font-medium">
          {" "}
          <h1 className=" text-4xl">
            Hi, I'm <span className="text-orange-500  font-bold">Evans</span>
          </h1>
          <p className="text-3xl "></p>
        </div>
        <div className="">
          <img
            src={profileImg}
            className=" ring-7 ring-orange-500 h-100 w-80 rounded-[50%] "
          ></img>
        </div>
      </div>
    </>
  );
}

export default about;
