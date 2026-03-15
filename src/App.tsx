import Contact from "./components/contact";
import Navigation from "./components/navigation";
import Profile from "./components/profile";
import About from "./components/about";

function App() {
  return (
    <>
      <div className=" flex flex-col bg-[#333333] items-center gap-y-30">
        <div className="">
        {/*<Navigation />
          <Profile/>
          <Contact /> */} 
          <About />
        </div>{" "}
      </div>
    </>
  );
}

export default App;
