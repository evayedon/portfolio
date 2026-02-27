import profileImg from "../assets/profile.jpg";

function profile() {
    return(
        <>
            <section id="home" className="">
            <div className="">
                <div className="-">
                <h1>
                    <div className="">Evans Ayensu Donkor</div>
                    Hi, I'm <span className="text-green-200">Evans</span>
                </h1>
                <p className="">Aspiring Software Engineer</p>
                <p className="">
                    Computer Science student at Ivy Tech Community College,
                    passionate about building scalable applications and solving
                    complex problems through elegant code.
                </p>
                <div className="">
                    <a href="#projects" className="">
                    View My Work
                    </a>
                    <a href="#contact" className="">
                    Get In Touch
                    </a>
                </div>
                </div>
            </div>
            <div className="">
                <div className=""></div>
                <img
                src={profileImg}
                className=""
                alt="profile picture"
                width="200"
                />
            </div>
        </section>
        </>
    );
}

export default profile;