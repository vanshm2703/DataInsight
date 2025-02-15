import React from 'react';
import { Sun, Moon } from 'lucide-react';

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-b from-gray-100 to-blue-50 dark:from-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-blue-600 dark:text-blue-400 font-bold text-xl">DataInsight</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Features</a>
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">How It Works</a>
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
             
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
