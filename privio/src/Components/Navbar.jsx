import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-10 bg-white/55 bg-opacity-100 backdrop-filter backdrop-blur-md backdrop-saturate-150 shadow-xl overflow-x-hidden">
      <div className=" mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">Privio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="text-white hover:text-gray-300">
            About
          </a>
          <a href="/services" className="text-white hover:text-gray-300">
            Services
          </a>
          <a href="/services" className="text-white hover:text-gray-300">
            Mask
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-4 space-y-4">
          <a href="/" className="block text-white hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="block text-white hover:text-gray-300">
            About
          </a>
          <a href="/services" className="block text-white hover:text-gray-300">
            Services
          </a>
          <a href="/contact" className="block text-white hover:text-gray-300">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
