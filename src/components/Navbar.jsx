import React from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="py-4 px-6 md:px-20 flex justify-between items-center relative z-10">
      <div className="flex items-center">
        <a href="/" className="flex items-center">
          <span className="text-white font-bold text-xl flex items-center">
            <span className="text-primary mr-1">●</span> Impaxion
          </span>
        </a>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-white text-sm hover:text-primary">
          Produk
        </a>
        <a href="#" className="text-white text-sm hover:text-primary">
          Tentang
        </a>
        <a
          href="#"
          className="text-white text-sm hover:text-primary flex items-center"
        >
          Halaman <ChevronDown className="h-4 w-4 ml-1" />
        </a>
        <a href="#" className="text-white text-sm hover:text-primary">
          Kontak
        </a>
        <a href="#" className="text-white text-sm hover:text-primary">
          Harga
        </a>
      </nav>

      <div className="flex items-center">
        <a
          href="#"
          className="text-white text-sm hover:text-primary mr-6 hidden md:block"
        >
          Masuk
        </a>
        <button className="bg-primary hover:bg-green-light text-black font-medium py-2 px-4 rounded-full text-sm">
          Ayo Mulai
        </button>
      </div>
    </header>
  );
};

export default Navbar;
