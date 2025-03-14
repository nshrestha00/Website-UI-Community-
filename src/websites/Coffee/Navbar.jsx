import { useState } from "react";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleClick = (link) => {
    setActiveLink(link);
  };

  const linkClasses = (link) =>
    `cursor-pointer ${
      activeLink === link ? "font-bold underline" : ""
    }`;

  return (
    <nav className="text-black p-4 flex justify-between items-center sticky top-0 z-40 bg-white">
      <img src={assets.coffee_logo} alt="Coffee Logo" className="h-10" />
      <div className="space-x-4">
        <a
          href="#coffee-about"
          className={linkClasses("about")}
          onClick={() => handleClick("about")}
        >
          About
        </a>
        <a
          href="#coffee-services"
          className={linkClasses("services")}
          onClick={() => handleClick("services")}
        >
          Services
        </a>
        <a
          href="#coffee-findus"
          className={linkClasses("findus")}
          onClick={() => handleClick("findus")}
        >
          FindUs
        </a>
        <a
          href="#coffee-menu"
          className={linkClasses("menu")}
          onClick={() => handleClick("menu")}
        >
          Menu
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
