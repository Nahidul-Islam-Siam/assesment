import React, { useState } from 'react';
import logo from "../assets/logo.png";
import bg from "../assets/bg.png"
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-cover bg-center bg-opacity-70 text-yellow-500 z-50" style={{
        backgroundImage: `url(${bg})`, // Ensure this path is correct
        backgroundColor: 'rgba(153,27,27,1)',  // Overlay color
        // backgroundBlendMode: 'overlay'
      }}
    >
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo and Restaurant Name */}
        <div className="flex items-center gap-14">
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} className="h-8" alt="Restaurant Logo" />
            <span className="self-center text-3xl font-semibold text-white">Restaurant</span>
          </a>

          {/* Desktop Navbar */}
          <div className="hidden md:flex md:space-x-8 text-white font-medium">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Menu</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
        
        {/* Book a Table Button */}
        <div className="md:flex md:order-2 space-x-3">
          <button
            type="button"
            className="bg-[#FEBF00] hover:bg-yellow-600 font-bold text-[#0A1425] text-base px-4 py-2"
          >
            Book a Table
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 text-yellow-500 md:hidden hover:bg-red-700 rounded-lg focus:outline-none"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all bg-red-600`}>
        <ul className="flex flex-col p-4 space-y-2 text-yellow-500">
          <li><a href="#" className="hover:bg-red-700 rounded-md p-2">Home</a></li>
          <li><a href="#" className="hover:bg-red-700 rounded-md p-2">About</a></li>
          <li><a href="#" className="hover:bg-red-700 rounded-md p-2">Menu</a></li>
          <li><a href="#" className="hover:bg-red-700 rounded-md p-2">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
