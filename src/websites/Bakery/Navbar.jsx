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
    <nav className="bg-white text-black p-4 flex justify-between items-center sticky top-0 z-40">
      <img src={assets.bakery_logo} alt="Bakery Logo" className="h-10" />
      
      {/* Hamburger Menu Button */}
      <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuOpen ? assets.close_menu : assets.open_menu} alt="Menu Icon" className="h-6 w-6" />
      </div>
      
      <DesktopNavbar activeLink={activeLink} handleClick={handleClick} />
      <MobileNavbar activeLink={activeLink} handleClick={handleClick} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </nav>
  );
};

export default Navbar;
