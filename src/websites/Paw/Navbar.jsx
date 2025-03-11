import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav className="text-black p-4 flex justify-between items-center sticky top-0 z-40">
      <img src={assets.paw_logo} alt="Paw Logo" className="h-15" />
      <div className="space-x-4">
        <a href="#paw-home" className="cursor-pointer">Home</a>
        <a href="#paw-breed" className="cursor-pointer">Breed</a>
        <a href="#paw-accessories" className="cursor-pointer">Accessories</a>
        <a href="#paw-blog" className="cursor-pointer">Blog</a>
        <a href="#paw-contact" className="cursor-pointer">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;