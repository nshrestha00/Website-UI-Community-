import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav className="text-black p-4 flex justify-between items-center sticky top-0 z-40">
      <img src={assets.bakery_logo} alt="Bakery Logo" className="h-10" />
      <div className="space-x-4">
        <a href="#bakery-home" className="cursor-pointer">Home</a>
        <a href="#bakery-menu" className="cursor-pointer">Menu</a>
        <a href="#bakery-about" className="cursor-pointer">About</a>
      </div>
    </nav>
  );
};

export default Navbar;