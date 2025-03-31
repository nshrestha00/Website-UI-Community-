import { useState } from 'react';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  
    const handleClick = (link) => {
      setActiveLink(link);
      setMenuOpen(false); 
    };
  
    const linkClasses = (link) =>
      `cursor-pointer ${
        activeLink === link ? "font-bold underline" : ""
      }`;

  return (
    <nav className="text-black p-4 flex justify-between items-center sticky top-0 z-40">
      <img src={assets.plant_logo} alt="Paw Logo" className="h-15" />

      {/* Hamburger Menu Button */}
      <div 
        className="md:hidden cursor-pointer" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img 
          src={menuOpen ? assets.close_menu : assets.open_menu} 
          alt="Menu Icon" 
          className="h-6 w-6"
        />
      </div>

           <div className={`md:flex space-x-4 absolute md:static top-16 left-0 w-full md:w-auto md:bg-transparent p-4 md:p-0 transition-transform ${menuOpen ? "block" : "hidden"}`}>
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