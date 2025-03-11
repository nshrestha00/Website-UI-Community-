import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav className="text-black p-4 flex justify-between items-center sticky top-0 z-40">
      <img src={assets.coffee_logo} alt="coffee Logo" className="h-10" />
      <div className="space-x-4">
        <a href="#coffee-home" className="cursor-pointer">Home</a>
        <a href="#coffee-services" className="cursor-pointer">Services</a>
        <a href="#coffee-findus" className="cursor-pointer">FindUs</a>
        <a href="#coffee-menu" className="cursor-pointer">Menu</a>
      </div>
    </nav>
  );
};

export default Navbar;