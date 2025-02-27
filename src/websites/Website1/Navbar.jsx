import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Website 1</h1>
      <div className="space-x-4">
        <Link to="/website1">Home</Link>
        <Link to="/website1/services">Services</Link>
        <Link to="/website1/review">Review</Link>
        <Link to="/website1/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
