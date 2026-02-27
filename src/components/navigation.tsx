function Navigation() {
  return (
    <>
      <nav>
        <div className="text-[16px] text-black font-['Inter:Medium',sans-serif] font-medium">
          <ul className="flex-shrink cursor-pointer flex  relative size-full k gap-3 place-content-end">
            <li>
              <a href="#home" className="hover:text-blue-400 opacity-80">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-400 opacity-80">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-blue-400 opacity-80">Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-blue-400 opacity-80">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-400 opacity-80">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
    );
}

export default Navigation;