import { useState } from 'react';
import { FaBars } from 'react-icons/fa';


function ScrapperNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
    <div className="flex mt-20 overflow-y-auto">
        <div className={`fixed top-0 left-0 h-full bg-blue-700 text-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-60 z-10`}>
          <div className="p-4 h-full overflow-y-auto">
            <ul className="mt-36 text-gray-200 text-shadow-lg">
              <li className="mt-2 p-1">
                <a href="#menu" className="text-xl font-semibold hover:text-cyan-500">Menu</a>
              </li>
              <li className="mt-2 p-1">
                <a href="#clean_data" className="text-xl font-semibold hover:text-cyan-500">Clean Data</a>
              </li>
              <li className="mt-2 p-1">
                <a href="#scrap_tool" className="text-xl font-semibold hover:text-cyan-500">Scrap Tool</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-6 mt-5 z-10 fixed">
            <button onClick={toggleNavbar} className="text-white text-lg font-semibold hover:text-cyan-500">
                <FaBars className="text-3xl" />
            </button>
        </div>
    </div>
    );
  };

export default ScrapperNavbar;