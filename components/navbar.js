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
          <div className="text-white text-2xl font-bold">SuperKick</div>

          <div className="md:hidden">
            <button id="menu-toggle" className="text-white" onClick={toggleMenu}>
              <svg fill='none' stroke='currentColor' stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M4 6h16M4 12h16M4 18h16"></path>

              </svg>
            </button>

          </div>

          <ul className="hidden md:flex space-x-4">
            <li><a href="" className="text-white">New Arrival</a></li>
            <li><a href="" className="text-white">Brand</a></li>
            <li><a href="" className="text-white">Men</a></li>
            <li><a href="" className="text-white">Women</a></li>
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
            <ul className="flex-col md:hidden ">
                <li className="py-1"><a href="" className="text-white ">New Arrival</a></li>
                <li className="py-1"><a href="" className="text-white ">Brand</a></li>
                <li className="py-1"><a href="" className="text-white ">Men</a></li>
                <li className="py-1"><a href="" className="text-white ">Women</a></li>
            </ul>
        )}
        
        
      </nav>
  );
};

export default Navbar;