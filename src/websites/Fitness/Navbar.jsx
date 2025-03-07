import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <img src={assets.fitness_logo} alt="Fitness Logo" className="h-10" />
      <div className="space-x-4">
        <Link to="/fitness">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/fitness/services">Services</Link>
        <Link to="/fitness/review">Review</Link>
        <Link to="/fitness/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
