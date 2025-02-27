import { FaFigma } from "react-icons/fa";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-black text-white px-4 py-2">
      {/* Left Section - Figma Icon */}
      <div className="flex items-center space-x-2">
        <FaFigma className="text-2xl text-red-500" />
      </div>

      {/* Center Section - Title */}
      <div className="text-sm font-medium">5 Websites UI (Community)</div>

      {/* Right Section - Auth Buttons */}
      <div className="flex items-center space-x-3">
      <div className="relative group">
            {/* Profile Icon */}
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 text-white text-sm font-bold">
                A
            </div>

            {/* Tooltip */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">
                Anonymous (You)
            </div>
            </div>

        <button className="px-3 py-1 border border-gray-400 rounded-md text-sm">
          Log in or create account
        </button>
        <button className="flex items-center px-3 py-1 bg-white text-black border border-gray-400 rounded-md text-sm">
          <img
            src={assets.google}
            alt="Google"
            className="w-4 h-4 mr-2"
          />
          Continue with Google
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
