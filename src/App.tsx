import Navigation from "./components/navigation";
import Profile from "./components/profile";

function App() {
  return (
    <>
      <div className=" flex flex-col bg-[#333333] h-screen items-center gap-y-30">
          <Navigation />

        <Profile />
      </div>
    </>
  );
}

export default App;
