import { Sun, Moon } from 'lucide-react';
import { useEffect } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  // Set dark mode by default when component mounts
  useEffect(() => {
    setDarkMode(true);
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-gradient-to-b from-gray-800 to-gray-900 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-blue-400 font-bold text-xl">DataInsight</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-gray-300 hover:text-blue-400">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-blue-400">How It Works</a>
          
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;