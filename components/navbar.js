'use client'


import { useState } from 'react';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  return (
    <nav className="bg-blue p-4 italic font-bold w-full">
        <div className="flex items-center justify-between w-full">
          <div className="text-white hover:text-orange text-2xl font-bold"><a href="/">SuperKick</a></div>

          <div className="md:hidden">
            <button id="menu-toggle" className="text-white hover:text-orange" onClick={toggleMenu}>
              <svg fill='none' stroke='currentColor' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M4 6h16M4 12h16M4 18h16"></path>

              </svg>
            </button>

          </div>

          <ul className="hidden md:flex space-x-4">
            <li><a href="newProduct" className="text-white hover:text-orange">New Arrival</a></li>
            <li className="relative">
              <a href="#" className="text-white hover:text-orange" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>▼ Brand</a>
              {/* Dropdown menu */}
              {isOpen && (
                <ul className="w-[250px] absolute top-full left-0 bg-orange p-4 shadow-lg z-20">
                  <li><a href="menProduct" className="text-white font-medium hover:text-blue">Adidas</a></li>
                  <li><a href="#" className="text-white font-medium hover:text-blue">Nike</a></li>
                  <li><a href="#" className="text-white font-medium hover:text-blue">Vans</a></li>
                  <li><a href="#" className="text-white font-medium hover:text-blue">New Balance</a></li>
                </ul>
                        )}
            </li>
            <li><a href="menProduct" className="text-white hover:text-orange">Men</a></li>
            <li><a href="womenProduct" className="text-white hover:text-orange">Women</a></li>
            <li><a href="userCart" className="text-white hover:text-orange">Cart</a></li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
            <ul className="flex-col md:hidden ">
                <li className="py-1"><a href="newProduct" className="text-white hover:text-orange">New Arrival</a></li>
                <li className="py-1"><a href="" className="text-white hover:text-orange">Brand</a></li>
                <li className="py-1"><a href="menProduct" className="text-white hover:text-orange">Men</a></li>
                <li className="py-1"><a href="womenProduct" className="text-white hover:text-orange ">Women</a></li>
                <li className="py-1"><a href="userCart" className="text-white hover:text-orange">Cart</a></li>
            </ul>
        )}
        
        
      </nav>
  );
};

export default Navbar;