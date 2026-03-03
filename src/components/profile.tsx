import profileImg from "../assets/profile.jpg";

function profile() {
    return(
    <>
    <div className="flex space-between bg-red-500 ">
        <div> MY name is Evans Ayensu Donkor </div>
        <div className="items-end rounded-[50%] h-80 w-80" >
        <img src={profileImg} className="h-[80%]  object-fill bg-green-500 "></img>
        </div>
    </div>
            
    </>
    );
}

export default profile;