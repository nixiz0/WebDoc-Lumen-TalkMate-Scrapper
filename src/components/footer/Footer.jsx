import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../../index.css';
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <footer className="p-4 bg-blue-800 text-white z-20 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <Link smooth to="/mentions-legales" className="hover:text-gray-400 text-shadow-lg">Mentions Légales</Link>
            </li>
          </ul>
        </div>
        <div className="flex space-x-4">
          <a href="https://www.youtube.com/@Initium0_0" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.instagram.com/real_initium/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://github.com/nixiz0" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;