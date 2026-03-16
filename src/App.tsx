import Contact from "./components/contact";
import Navigation from "./components/navigation";
import About from "./components/about";
import Project from "./components/projects";

function App() {
  return (
    <>
      <div className=" flex flex-col bg-[#333333] items-center gap-y-30">
        <div className="">
          <Navigation/>
          <Contact />
          <About />
          <Project/>
        </div>
      </div>
    </>
  );
}

export default App;
