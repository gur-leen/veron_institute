import React from "react";
import { FaHeart, FaUser } from "react-icons/fa";
import mylogo from "../../assets/my_logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className={`flex justify-between items-center p-4 shadow-md bg-gradient-to-r from-pink-400 to-orange-300 animate-slidedown animate-gradient`}>
      {/* Logo Section */}
      <div className={`flex items-center text-2xl font-bold text-white logo-animate`}>
        <img
          src={mylogo}
          alt="Happy Trails"
          className={`h-10 w-10 rounded-full mr-2 object-fill logo-rotate`}
        />
        Happy Trails
      </div>
      
      {/* Menu Items */}
      <ul className="hidden md:flex space-x-6 relative">
        {["Home", "Recommendations", "Travel Styles", "Destinations", "Travel Deals", "Contact Us"].map((item, index) => (
          <li
            key={index}
            className="menu-item relative text-white text-lg"
          >
            {item}
          </li>
        ))}
      </ul>
      
      {/* Icons */}
      <div className="flex items-center space-x-4">
        <FaHeart className="text-white cursor-pointer transition-transform duration-300 icon-custom-class" />
        <FaUser className="text-white cursor-pointer transition-transform duration-300 icon-custom-class" />
      </div>
    </nav>
  );
};

export default Navbar;
