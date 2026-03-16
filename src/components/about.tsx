import profileImg from "../assets/profile.jpg";

const schools = [
  { name: "Indiana University - South Bend", year: "Jan 2026 - May 2027" },
  { name: "Ivy Tech Community College", year: "Jan 2024 - Dec 2025" },
];

{
  // const buttons = ["Projects", "Tech Skills", "Certificates"]
}
function about() {
  return (
    <>
      <section className="flex items-center justify-center mx-[5%] flex-col">
        {/*hero section*/}
        <div className="flex items-center gap-8 p-8">
          <div className="p-4 text-white space-y-9 font-['Inter',sans-serif] font-medium flex-1">
            <h1 className="text-4xl">
              Hi, I'm <span className="text-orange-500 font-bold">Evans</span>
            </h1>
            <div className="text-xl space-y-5">
              <p>
                I am a student at Indiana University - South Bend with a strong
                passion for technology and problem-solving.
              </p>
              <p>
                I enjoy learning about programming, data, and how technology can
                be used to solve real-world problems.
              </p>
              <p>
                My goal is to grow as a developer while contributing to
                meaningful technology that improves people's lives.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src={profileImg}
              className="ring-4 ring-orange-500 rounded-full w-64 h-64 object-cover"
            />
          </div>
        </div>

        {/* School section*/}
        <div className="text-white">
          {schools.map((school, index) => (
            <div>
              <h1 key={index}>{school.name}</h1>
              <p key={index}>{school.year}</p>
            </div>
          ))}
        </div>
        {/*Tech section and project */}
        <div className="flex h-100  mt-20  w-230 justify-center text-orange-500 ">
          <nav className="flex justify-center gap-[25%] p-2 text-xl font-bold h-20  w-[100%]">
            {" "}
            <button className="transition-colors duration-200  hover:border-white-500 hover:bg-white w-70 opacity-90 border-4 p-3  rounded-3xl cursor-pointer">
              Projects
            </button>
            <button className="transition-colors duration-200  hover:border-white-500 hover:bg-white w-70 opacity-90 border-4 p-3 rounded-3xl cursor-pointer">
              Tech Skills
            </button>
            <button className="transition-colors duration-200  hover:border-white-500 hover:bg-white w-70 opacity-90 border-4 p-3  rounded-3xl cursor-pointer">
              Certificates
            </button>{" "}
          </nav>

          <div> 

          </div>
        </div>
      </section>
    </>
  );
}

export default about;
