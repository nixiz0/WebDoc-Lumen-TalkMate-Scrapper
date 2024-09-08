import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../index.css';

import logo_projects from '../../0-ressources/logo-projects.png'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/lumen", label: "Lumen" },
    { to: "/talkmate", label: "TalkMate" },
    { to: "/scrapper", label: "Scrapper-Tool" }
  ];

  return (
    <nav className="fixed w-full p-4 bg-blue-800 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo_projects} alt="Logo" className="h-8 w-8 mr-2" />
          <div className="text-white text-2xl font-bold">
            <Link smooth to="/" className="text-white p-2 rounded text-shadow-lg">Projets</Link>
          </div>
        </div>
        <div className="hidden md:flex space-x-4">
          {links.map((link, index) => (
            <Link key={index} smooth to={link.to} className="text-white hover:bg-blue-500 active:bg-blue-900 p-2 rounded font-medium text-shadow-lg">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            {links.map((link, index) => (
              <Link key={index} smooth to={link.to} className="text-white hover:bg-blue-500 active:bg-blue-900 p-2 rounded font-medium text-shadow-lg">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;