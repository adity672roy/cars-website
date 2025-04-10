import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaHeart, FaHome } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const navLinkClass = (path) =>
    `flex items-center gap-1 px-3 py-2 rounded-md transition ${
      location.pathname === path
        ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-300'
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`;

  return (
    <header className="backdrop-blur bg-white/70 dark:bg-gray-900/80 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
         
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 tracking-wide flex items-center gap-1"
        >
           CarFinder
        </Link>

      
        <nav className="flex items-center md:gap-4 gap-2 text-sm font-medium">
          <Link to="/" className={navLinkClass('/')}>
            <FaHome className='sm:text-2xl text-lg'/> <span className='hidden md:inline-block text-sm'>Home</span>
          </Link>

          <Link to="/wishlist" className={navLinkClass('/wishlist')}>
            <FaHeart className='sm:text-2xl text-lg'/> <span className='hidden md:inline-block text-sm'>WishList</span>
          </Link>

          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" ml-2 "
          
          >
            {darkMode ? <FaSun className="text-yellow-400 sm:text-xl text-lg" /> : <FaMoon className="text-gray-800 sm:text-xl text-lg" />} 
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
