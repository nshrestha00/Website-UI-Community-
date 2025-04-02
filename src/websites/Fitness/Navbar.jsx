import { useState } from "react";
import { assets } from "../../assets/assets";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center sticky top-0 z-40">
      <img src={assets.fitness_logo} alt="Fitness Logo" className="h-10" />
      
      {/* Hamburger Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuOpen ? assets.closeMenu : assets.openMenu} alt="Menu Icon" className="h-6 w-6" />
      </div>
      
      <DesktopNavbar activeLink={activeLink} handleClick={handleClick} />
      <MobileNavbar activeLink={activeLink} handleClick={handleClick} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default Navbar;
