const MobileNavbar = ({ activeLink, handleClick, menuOpen, setMenuOpen }) => {
    const linkClasses = (link) => `cursor-pointer block py-2 text-white ${activeLink === link ? "font-bold underline" : ""}`;
  
    return (
      <div className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-black p-6 transition-transform ${menuOpen ? "block" : "hidden"}`}>
        <div className="flex justify-end mb-6">
          <div className="cursor-pointer text-white text-2xl" onClick={() => setMenuOpen(false)}>&times;</div>
        </div>
        <nav className="flex flex-col space-y-4">
          <a href="#fitness-home" className={linkClasses("home")} onClick={() => handleClick("home")}>
            Home
          </a>
          <a href="#fitness-about" className={linkClasses("about")} onClick={() => handleClick("about")}>
            About
          </a>
          <a href="#fitness-review" className={linkClasses("review")} onClick={() => handleClick("review")}>
            Review
          </a>
          <a href="#fitness-services" className={linkClasses("services")} onClick={() => handleClick("services")}>
            Services
          </a>
          <a href="#fitness-contact" className={linkClasses("contact")} onClick={() => handleClick("contact")}>
            Contact
          </a>
        </nav>
      </div>
    );
  };
  
  export default MobileNavbar;    