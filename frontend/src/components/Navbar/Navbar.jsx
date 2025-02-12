import React, { useState, useEffect } from 'react';
import './Navbar.css';
import mylogo from "../../assets/my_logo.jpg";
import { Link } from 'react-router-dom';
import { User, X, Menu } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      const userString = localStorage.getItem('user');
      const userObj = JSON.parse(userString);
      setUser(userObj);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    toast.success('Logged out successfully!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setTimeout(() => window.location.href = '/', 2000);
  };

  return (
    <header className="absolute w-full top-0 left-0 z-10 bg-transparent">
      <nav className="flex justify-between items-center w-[92%] mx-auto py-4">
        <div>
          <Link to="/">
            <img
              className="w-48 h-32 cursor-pointer logo"
              src={mylogo}
              alt="Logo"
            />
          </Link>
        </div>
        <div
          className={`nav-links duration-500 md:static absolute bg-transparent md:min-h-fit min-h-[60vh] left-0 top-${isMenuOpen ? '0' : '-100%'} md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link className="hover:text-blue-500 font-semibold" to="/">Home</Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-semibold" to="/">Recommendations</Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-semibold" to="/">Travel Styles</Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-semibold" to="/">Destinations</Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-semibold" to="/feedback">Feedback</Link>
            </li>
            <li>
              <Link className="hover:text-blue-500 font-semibold" to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="relative">
              <button
                className="dropdown-toggle flex items-center space-x-2 px-4 py-2 rounded-md bg-gray-100 text-gray-700"
                onClick={toggleMenu}
              >
                <span className="sr-only">Open dropdown menu</span>
                <User className="w-6 h-6 text-gray-700" />
                <span className="hidden sm:block">
                  Hi, {user?.first_name || 'Sample'} {user?.last_name || 'Customer'}
                </span>
              </button>
              <div
                className={`dropdown-menu absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ${
                  isMenuOpen ? '' : 'hidden'
                }`}
              >
                <Link
                  to="/dashboard"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                >
                  Dashboard
                </Link>
                <Link
                  to="/"
                  className="dropdown-item block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  onClick={logout}
                >
                  Logout
                </Link>
              </div>
            </div>
          ) : (
            <Link
              to="/login-register"
              className="button-hover px-4 py-2 rounded-md text-white hover:shadow-md"
            >
              Login/Signup
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

