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
      <img src={assets.paw_logo} alt="Paw Logo" className="h-15" />
      <div className="space-x-4">
        <a 
          href="#paw-home" 
          className={linkClasses('home')}
          onClick={() => handleClick("home")}
        >
            Home
        </a>
        <a 
          href="#paw-breed" 
          className={linkClasses('breed')}
          onClick={() => handleClick("breed")}
          >
            Breed
        </a>
        <a 
          href="#paw-accessories" 
          className={linkClasses('accessories')}
          onClick={() => handleClick("accessories")}>
            Accessories</a>
        <a 
          href="#paw-blog" 
          className={linkClasses('blog')}
          onClick={() => handleClick("blog")}>
            Blog</a>
        <a 
          href="#paw-contact" 
          className={linkClasses('contact')}
          onClick={() => handleClick("contact")}>
            Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;