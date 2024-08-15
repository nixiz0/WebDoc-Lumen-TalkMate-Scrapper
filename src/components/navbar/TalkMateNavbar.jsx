import { useState } from 'react';
import { FaBars } from 'react-icons/fa';


function TalkMateNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
    <div className="flex mt-20 overflow-y-auto">
        <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-60 z-10`}>
          <div className="p-4 h-full overflow-y-auto">
            <ul className="mt-36 text-cyan-400 text-shadow-lg">
              <li className="mt-2 p-1">
                <a href="#menu" className="text-xl font-semibold hover:text-white">Menu</a>
              </li>
              <li className="mt-2 p-1">
                <a href="#assistant" className="text-xl font-semibold hover:text-white">Assistant</a>
              </li>
              <li className="mt-2 p-1">
                <a href="#summarize" className="text-xl font-semibold hover:text-white">Summarize</a>
              </li>
              <li className="mt-2 p-1">
                <a href="#qa_document" className="text-xl font-semibold hover:text-white">QA Document</a>
              </li>
              <li className="mt-2 p-1">
                <a href="#question" className="text-xl font-semibold hover:text-white">Question</a>
              </li>
              <li className="mt-2 p-1">
                <a href="#others" className="text-xl font-semibold hover:text-white">Autres..</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-6 mt-5 z-10 fixed">
            <button onClick={toggleNavbar} className="text-white text-lg font-semibold hover:text-cyan-400">
                <FaBars className="text-3xl" />
            </button>
        </div>
    </div>
    );
  };

export default TalkMateNavbar;