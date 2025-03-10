import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <nav className=" text-black p-4 flex justify-between items-center">
      <img src={assets.bakery_logo} alt="Bakery Logo" className="h-20" />
      <div className="space-x-4">
        <Link to="/bakery">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/bakery/menu">Menu</Link>
        <Link to="/bakery/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
