import {useState} from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; 
const Header = () => {
    const [isOpen,setIsopen]=useState(false)
    const toggleMenu=()=>{
        setIsopen(!isOpen)
    }
  return (
    <>
<header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          ResumeGenAI
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/template" className="text-gray-700 hover:text-indigo-600">Template</Link>
          <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-indigo-600 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-4 py-2 gap-2">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/template" className="text-gray-700 hover:text-indigo-600">Template</Link>
            <Link to="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
          </nav>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
