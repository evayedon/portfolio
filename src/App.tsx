import Navigation from "./components/navigation";
import Profile from "./components/profile";


function App() {
  return (
    <> 
      <div className="flex flex-col content-center bg-blue-300 min-h-screen max-w-screen content-box pr-100 pl-100">
        <Navigation/>
        <Profile />
      </div>     

    </>

  );
}

export default App;
