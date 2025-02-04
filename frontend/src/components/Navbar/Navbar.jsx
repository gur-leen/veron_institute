import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import mylogo from '../../assets/my_logo.jpg';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold flex items-center">
        <img src={mylogo} alt="Happy Trails" className="h-8 mr-2" />
        Happy Trails
      </div>
      
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li className="hover:text-blue-500 cursor-pointer">Travel Styles</li>
        <li className="hover:text-blue-500 cursor-pointer">Destinations</li>
        <li className="hover:text-blue-500 cursor-pointer">Travel Deals</li>
        <li className="hover:text-blue-500 cursor-pointer">Help</li>
      </ul>
      
      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaSearch className="text-gray-700 cursor-pointer" />
        <FaHearticon className="text-gray-700 cursor-pointer" />
        <FaUser className="text-gray-700 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
