import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.JPG";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md w-full">
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="YoJa Logo" className="h-10 w-auto rounded-md" />
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link to="/about" className="text-gray-700 hover:text-[#0ea5e9]">
            About
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-[#0ea5e9]">
            Blog
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-[#0ea5e9]">
            Contact
          </Link>
          <Link to="/demo" className="text-gray-700 hover:text-[#0ea5e9]">
            Watch Demo
          </Link>
          <Link to="/asanas" className="text-gray-700 hover:text-[#0ea5e9]">
            Asanas
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700 hover:text-[#0ea5e9] focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        <div className="hidden md:block ml-4">
          <Link
            to="/login"
            className="bg-[#0ea5e9] text-white px-5 py-2 rounded-full hover:bg-[#0284c7] transition"
          >
            Sign In
          </Link>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4">
          <div className="flex flex-col gap-4">
            <Link to="/about" className="text-gray-700 hover:text-[#0ea5e9]">
              About
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#0ea5e9]">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#0ea5e9]">
              Contact
            </Link>
            <Link to="/demo" className="text-gray-700 hover:text-[#0ea5e9]">
              Watch Demo
            </Link>
            <Link to="/asanas" className="text-gray-700 hover:text-[#0ea5e9]">
              Asanas
            </Link>
            <Link
              to="/login"
              className="bg-[#0ea5e9] text-white text-center px-4 py-2 rounded-full hover:bg-[#0284c7] transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
