import { useState } from 'react';
import { assets } from '../../assets/assets';

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
    <nav className="text-black p-4 flex justify-between items-center sticky top-0 z-40">
      <img src={assets.bakery_logo} alt="Bakery Logo" className="h-10" />
      <div className="space-x-4">
        <a 
          href="#bakery-home"  
          className={linkClasses("home")}
          onClick={() => handleClick("home")}
        >
          Home
        </a>
        <a 
          href="#bakery-menu"  
          className={linkClasses("menu")}
          onClick={() => handleClick("menu")}
          >
            Menu
        </a>
        <a 
          href="#bakery-about" 
           className={linkClasses("about")}
          onClick={() => handleClick("about")}
          >
            About
        </a>
      </div>
    </nav>
  );
};

export default Navbar;