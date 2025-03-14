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
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-40">
      <img src={assets.fitness_logo} alt="Fitness Logo" className="h-10" />
      <div className="space-x-4">
        <a 
          href="#fitness-home" 
           className={linkClasses("home")}
          onClick={() => handleClick("home")}
          >
          Home
        </a>
        <a 
          href="#fitness-about" 
           className={linkClasses("about")}
          onClick={() => handleClick("about")}
          >
            About
        </a>
        <a 
          href="#fitness-review" 
           className={linkClasses("review")}
          onClick={() => handleClick("review")}
          >
            Review
        </a>
        <a 
          href="#fitness-services" 
           className={linkClasses("services")}
          onClick={() => handleClick("services")}
          >
            Services
        </a>
        <a 
          href="#fitness-contact" 
           className={linkClasses("contact")}
          onClick={() => handleClick("contact")}
          >
            Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;