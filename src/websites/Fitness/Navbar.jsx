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
    `cursor-pointer ${activeLink === link ? "font-bold underline" : ""}`;

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-40 md:relative">
      <img src={assets.fitness_logo} alt="Fitness Logo" className="h-10" />
      
      {/* Hamburger Menu Button */}
      <div 
        className="md:hidden cursor-pointer" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <img 
          src={menuOpen ? assets.closeMenu : assets.openMenu} 
          alt="Menu Icon" 
          className="h-6 w-6"
        />
      </div>
      
      {/* Desktop and Mobile Navigation */}
      <div className={`md:flex space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 transition-transform ${menuOpen ? "block" : "hidden"}`}>
        <a href="#fitness-home" className={linkClasses("home")} onClick={() => handleClick("home")}>
          Home
        </a>
        <a href="#fitness-about" className={linkClasses("about")} onClick={() => handleClick("about")}>
          About
        </a>
        <a href="#fitness-review" className={linkClasses("review")} onClick={() => handleClick("review")}>
          Review
        </a>
        <a href="#fitness-services" className={linkClasses("services")} onClick={() => handleClick("services")}>
          Services
        </a>
        <a href="#fitness-contact" className={linkClasses("contact")} onClick={() => handleClick("contact")}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
