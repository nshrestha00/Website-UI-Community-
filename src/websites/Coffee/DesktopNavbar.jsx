const DesktopNavbar = ({ activeLink, handleClick }) => {
    const linkClasses = (link) => `cursor-pointer ${activeLink === link ? "font-bold underline" : ""}`;
  
    return (
      <div className="hidden md:flex space-x-4 text-black">
         <a href="#coffee-about" className={linkClasses("about")} onClick={() => handleClick("about")}>
            About
          </a>
          <a href="#coffee-services" className={linkClasses("services")} onClick={() => handleClick("services")}>
            Services
          </a>
          <a href="#coffee-findus" className={linkClasses("findus")} onClick={() => handleClick("findus")}>
            FindUS
          </a>
          <a href="#coffee-menu" className={linkClasses("menu")} onClick={() => handleClick("menu")}>
            Menu
          </a>
      </div>
    );
  };
  
  export default DesktopNavbar;