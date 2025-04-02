const DesktopNavbar = ({ activeLink, handleClick }) => {
    const linkClasses = (link) => `cursor-pointer ${activeLink === link ? "font-bold underline" : ""}`;
  
    return (
      <div className="hidden md:flex space-x-4 text-white">
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
      </div>
    );
  };
  
  export default DesktopNavbar;