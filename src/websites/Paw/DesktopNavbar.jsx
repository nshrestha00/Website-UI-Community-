const DesktopNavbar = ({ activeLink, handleClick }) => {
    const linkClasses = (link) => `cursor-pointer ${activeLink === link ? "font-bold underline" : ""}`;
  
    return (
      <div className="hidden md:flex space-x-4 text-black">
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
      </div>
    );
  };
  
  export default DesktopNavbar;