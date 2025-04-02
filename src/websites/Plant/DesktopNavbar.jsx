const DesktopNavbar = ({ activeLink, handleClick }) => {
    const linkClasses = (link) => `cursor-pointer ${activeLink === link ? "font-bold underline" : ""}`;
  
    return (
      <div className="hidden md:flex space-x-4 text-black">
         <a href="#plant-about" className={linkClasses("about")} onClick={() => handleClick("about")}>
            About
          </a>
          <a href="#plant-services" className={linkClasses("services")} onClick={() => handleClick("services")}>
            Services
          </a>
          <a href="#plant-categories" className={linkClasses("categories")} onClick={() => handleClick("categories")}>
            Categories
          </a>
          <a href="#plant-contact" className={linkClasses("contact")} onClick={() => handleClick("contact")}>
            Contact
          </a>
          <a href="#plant-upcoming" className={linkClasses("upcoming")} onClick={() => handleClick("upcoming")}>
            Upcoming
          </a>
      </div>
    );
  };
  
  export default DesktopNavbar;