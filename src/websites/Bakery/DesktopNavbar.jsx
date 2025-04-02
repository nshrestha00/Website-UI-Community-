const DesktopNavbar = ({ activeLink, handleClick }) => {
    const linkClasses = (link) => `cursor-pointer ${activeLink === link ? "font-bold underline" : ""}`;
  
    return (
      <div className="hidden md:flex space-x-4 text-black">
        <a href="#bakery-home" className={linkClasses("home")} onClick={() => handleClick("home")}>
          Home
        </a>
        <a href="#bakery-menu" className={linkClasses("menu")} onClick={() => handleClick("menu")}>
          Menu
        </a>
        <a href="#bakery-about" className={linkClasses("about")} onClick={() => handleClick("about")}>
          About
        </a>
      </div>
    );
  };
  
  export default DesktopNavbar;