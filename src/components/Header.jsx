import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold dark:text-white">
        CarFinder
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/wishlist" className="text-blue-600 dark:text-blue-300">
          Wishlist
        </Link>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
