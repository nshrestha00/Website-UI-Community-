import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <img src={assets.fitness_logo} alt="Fitness Logo" className="h-10" />
      <div className="space-x-4">
        <a href="#fitness-home" className="cursor-pointer">Home</a>
        <a href="#fitness-about" className="cursor-pointer">About</a>
        <a href="#fitness-review" className="cursor-pointer">Review</a>
        <a href="#fitness-services" className="cursor-pointer">Services</a>
        <a href="#fitness-contact" className="cursor-pointer">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;