const MobileNavbar = ({ activeLink, handleClick, menuOpen, setMenuOpen }) => {
    const linkClasses = (link) => `cursor-pointer block py-2 text-black ${activeLink === link ? "font-bold underline" : ""}`;
  
    return (
      <div className={`md:hidden fixed top-0 right-0 w-2/3 h-full bg-white p-6 transition-transform ${menuOpen ? "block" : "hidden"}`}>
        <div className="flex justify-end mb-6">
          <div className="cursor-pointer text-black text-2xl" onClick={() => setMenuOpen(false)}>&times;</div>
        </div>
        <nav className="flex flex-col space-y-4">
        <a href="#paw-home" className={linkClasses("home")} onClick={() => handleClick("home")}>
          Home
        </a>
        <a href="#paw-breed" className={linkClasses("breed")} onClick={() => handleClick("breed")}>
         Breed
        </a>
        <a href="#paw-accessories" className={linkClasses("accessories")} onClick={() => handleClick("accessories")}>
          Accessories
        </a>
        <a href="#paw-blog" className={linkClasses("blog")} onClick={() => handleClick("blog")}>
          Blog
        </a>
        <a href="#paw-contact" className={linkClasses("contact")} onClick={() => handleClick("contact")}>
          Contact
        </a>
        </nav>
      </div>
    );
  };
  
  export default MobileNavbar;