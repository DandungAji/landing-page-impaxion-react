
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="py-4 px-6 md:px-20 flex justify-between items-center relative z-10">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <span className="text-white font-bold text-xl flex items-center">
            <span className="text-primary mr-1">●</span> FinBiz
          </span>
        </a>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white text-sm hover:text-primary">Product</a>
        <a href="#" className="text-white text-sm hover:text-primary">Pages</a>
        <a href="#" className="text-white text-sm hover:text-primary flex items-center">
          Resources <ChevronDown className="h-4 w-4 ml-1" />
        </a>
        <a href="#" className="text-white text-sm hover:text-primary">Blog</a>
        <a href="#" className="text-white text-sm hover:text-primary">Pricing</a>
      </nav>

      <div className="flex items-center">
        <a href="#" className="text-white text-sm hover:text-primary mr-6 hidden md:block">Log in</a>
        <button className="bg-primary hover:bg-green-light text-black font-medium py-2 px-4 rounded-full text-sm">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Navbar;
