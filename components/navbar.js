'use client'

import { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [mbIsOpen, setMbIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const mbToggleMenu = () => {
      setMbIsOpen(!mbIsOpen);
  };

  return (
    <nav className="bg-primary p-4 italic font-bold w-full">
        <div className="flex items-center justify-between w-full">
          <div className="text-white hover:text-secondary text-2xl font-bold"><a href="/">SuperKick</a></div>

          <div className="md:hidden">
            <button id="menu-toggle" className="text-white hover:text-secondary" onClick={toggleMenu}>
              <svg fill='none' stroke='currentColor' strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
                <path d="M4 6h16M4 12h16M4 18h16"></path>

              </svg>
            </button>

          </div>

          <ul className="hidden md:flex space-x-4">
            <li><a href="/product/all-gender" className="text-white hover:text-secondary">New Arrival</a></li>
            <li className="relative">
              <a href="" className="text-white hover:text-secondary" onClick={(e) => { e.preventDefault(); toggleMenu(); }}>▼ Brand</a>
              {/* Dropdown menu */}
              {isOpen && (
                <ul className="w-[250px] absolute top-full left-0 bg-secondary p-4 shadow-lg z-20">
                  <li><a href="/product/all-gender/adidas" className="text-white font-medium hover:text-primary">Adidas</a></li>
                  <li><a href="/product/all-gender/nike" className="text-white font-medium hover:text-primary">Nike</a></li>
                  <li><a href="/product/all-gender/vans" className="text-white font-medium hover:text-primary">Vans</a></li>
                  <li><a href="/product/all-gender/newBalance" className="text-white font-medium hover:text-primary">New Balance</a></li>
                </ul>
                        )}
            </li>
            <li><a href="/product/men" className="text-white hover:text-secondary">Men</a></li>
            <li><a href="/product/women" className="text-white hover:text-secondary">Women</a></li>
            <li><a href="/userCart" className="text-white hover:text-secondary">Cart</a></li>
            <li><a href="/userlogin" className="text-white hover:text-secondary">Login</a></li>
          </ul>
        </div>

        {/* --------------------Mobile menu--------------------------- */}
        {isOpen && (
            <ul className="flex-col md:hidden ">
                <li className="py-1"><a href="/product/all-gender" className="text-white hover:text-secondary">New Arrival</a></li>
                <li className="py-1">
                  <div className="flex items-center w-full" onClick={(e) => { e.preventDefault(); mbToggleMenu(); }}>
                      <h3 className="text-white hover:text-secondary" >Brand</h3>
                  </div>
                  <div style={{ height: mbIsOpen ? '100px' : '0px' }} className={`overflow-hidden cursor-pointer ml-5 ${mbIsOpen && `py-[5px]`} animate`}>
                      <div className="w-[90%]">
                      <ul >
                        <li><a href="/product/all-gender/adidas" className="text-white font-medium hover:text-secondary">Adidas</a></li>
                        <li><a href="/product/all-gender/nike" className="text-white font-medium hover:text-secondary">Nike</a></li>
                        <li><a href="/product/all-gender/vans" className="text-white font-medium hover:text-secondary">Vans</a></li>
                        <li><a href="/product/all-gender/newBalance" className="text-white font-medium hover:text-secondary">New Balance</a></li>
                      </ul>
                      </div>
                  </div>
                </li>
                <li className="py-1"><a href="/product/men" className="text-white hover:text-secondary">Men</a></li>
                <li className="py-1"><a href="/product/women" className="text-white hover:text-secondary ">Women</a></li>
                <li className="py-1"><a href="/userCart" className="text-white hover:text-secondary">Cart</a></li>
                <li><a href="/userlogin" className="text-white hover:text-secondary">Login</a></li>
            </ul>
        )}
        
        
      </nav>
  );
};

export default Navbar;