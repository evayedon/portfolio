import Contact from "./components/contact";
import Navigation from "./components/navigation";
import Profile from "./components/profile";

function App() {
  return (
    <>
      <div className=" flex flex-col bg-[#333333] items-center gap-y-30">
        <div className="">
          <Navigation />
          <Contact />
        </div>{" "}
      </div>
    </>
  );
}

export default App;
