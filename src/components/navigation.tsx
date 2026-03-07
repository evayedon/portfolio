const nav = [
  { navbar: "#Home", abt: "Home" },
  { navbar: "#About", abt: "About" },
  { navbar: "#projects", abt: "Projects" },
  { navbar: "#contact", abt: "Contact" },
];

function Navigation() {
  return (
    <>
      <div className=" flex relative items-center justify-center space-x-[40%] border-double border-b-8 h-20  w-screen border-orange-500  ">
        <h1 className="text-[40px] text-white">Portfolio</h1>

        <nav>
          <div className="flex place-end text-[16px] text-orange-500 font-['Inter:Medium',sans-serif] font-medium">
            <ul className="flex-shrink cursor-pointer flex  relative gap-4 place-content-end">
              {nav.map((navi, index) => (
                <li
                  key={index}
                  className=" hover:text-blue-400  opacity-80 border-[2.5px] py-2 px-4 rounded-3xl transition-y-7 duration-200"
                >
                  <a href={navi.navbar} className="">
                    {navi.abt}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
