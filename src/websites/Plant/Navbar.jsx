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
      <img src={assets.plant_logo} alt="Paw Logo" className="h-15" />
      <div className="space-x-4">
        <a 
          href="#plant-about" 
          className={linkClasses('about')}
          onClick={() => handleClick("about")}
        >
            About
        </a>
        <a 
          href="#plant-services" 
          className={linkClasses('services')}
          onClick={() => handleClick("services")}
          >
            Services
        </a>
        <a 
          href="#plant-categories" 
          className={linkClasses('categories')}
          onClick={() => handleClick("categories")}>
            Categories</a>
        <a 
          href="#plant-contact" 
          className={linkClasses('contact')}
          onClick={() => handleClick("contact")}>
            Contact
        </a>
        <a 
          href="#plant-upcoming" 
          className={linkClasses('upcoming')}
          onClick={() => handleClick("upcoming")}>
            Upcoming
        </a>
      </div>
    </nav>
  );
};

export default Navbar;