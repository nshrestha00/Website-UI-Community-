const MobileNavbar = ({ activeLink, handleClick, menuOpen, setMenuOpen }) => {
    const linkClasses = (link) => `cursor-pointer block py-2 text-black ${activeLink === link ? "font-bold underline" : ""}`;
  
    return (
      <div className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-white p-6 transition-transform ${menuOpen ? "block" : "hidden"}`}>
        <div className="flex justify-end mb-6">
          <div className="cursor-pointer text-black text-2xl" onClick={() => setMenuOpen(false)}>&times;</div>
        </div>
        <nav className="flex flex-col space-y-4">
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
        </nav>
      </div>
    );
  };
  
  export default MobileNavbar;