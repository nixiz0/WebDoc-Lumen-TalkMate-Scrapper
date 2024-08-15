import { useState } from 'react';
import { FaBars, FaBolt, FaSearch, FaPlus, FaLanguage, FaVolumeUp, FaStopwatch, FaStickyNote, FaKeyboard, FaCalendarAlt, FaCalculator,
         FaCamera, FaVideo, FaPlay, FaPause, FaStop, FaComments, FaCode, FaBullseye, FaEye } from 'react-icons/fa';


function LumenNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
    <div className="flex mt-20 overflow-y-auto">
        <div className={`fixed top-0 left-0 h-full bg-blue-500 text-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 z-10`}>
          <div className="p-4 h-full overflow-y-auto">
            <ul className="mt-36 text-gray-100 text-shadow-lg">
              <li className="mt-2 p-1">
                <a href="#configuration" className="text-xl font-semibold hover:text-blue-400">Configuration</a>
              </li>
              <li className="mt-2 p-1">
                <a href="#commandes-classiques" className="text-xl font-semibold hover:text-blue-400">Commandes Classiques</a>
                <ul className="ml-4 mt-2">
                  <li className="flex p-1 items-center hover:text-blue-400"><FaBolt className="text-yellow-500 mr-2" /><a href="#txt-trigger">Texte déclencheur</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaSearch className="text-blue-700 mr-2" /><a href="#find-web">Recherche Web</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaPlus className="text-green-500 mr-2" /><a href="#add-trigger-txt">Ajout phrase déclencheur</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaLanguage className="text-orange-500 mr-2" /><a href="#traduction-mode">Mode traduction</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaVolumeUp className="text-red-500 mr-2" /><a href="#volume-control">Contrôle Volume</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaStopwatch className="text-purple-500 mr-2" /><a href="#start-chrono">Démarrer Chronomètre</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaStickyNote className="text-pink-500 mr-2" /><a href="#take-note">Prends note</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaKeyboard className="text-brown-500 mr-2" /><a href="#computer-commands">Commande Ordinateur</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaCalendarAlt className="text-teal-400 mr-2" /><a href="#datetime">Date & Heure</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaCalculator className="text-cyan-300 mr-2" /><a href="#math-calcul">Calcul Mathématique</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaCamera className="text-magenta-500 mr-2" /><a href="#take-screenshot">Prendre Screenshot</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaVideo className="text-lime-500 mr-2" /><a href="#screen-cam">Screen Caméra</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaPlay className="text-green-500 mr-2" /><a href="#start-video">Démarrer Vidéo</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaPause className="text-orange-500 mr-2" /><a href="#pause-mode">Mode Pause</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaStop className="text-red-500 mr-2" /><a href="#stop">Stop</a></li>
                </ul>
              </li>
              <li className="mt-2 p-1">
                <a href="#commandes-avancees" className="text-xl font-semibold hover:text-blue-400">Commandes Avancées</a>
                <ul className="ml-4 mt-2">
                  <li className="flex p-1 items-center hover:text-blue-400"><FaComments className="text-gray-400 mr-2" /><a href="#discussion-mode">Mode Discussion</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaCode className="text-green-400 mr-2" /><a href="#code-mode">Mode Code</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaBullseye className="text-cyan-400 mr-2" /><a href="#precision-mode">Mode Precision</a></li>
                  <li className="flex p-1 items-center hover:text-blue-400"><FaEye className="text-orange-400 mr-2" /><a href="#vision-mode">Mode Vision</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-6 mt-5 z-10 fixed">
            <button onClick={toggleNavbar} className="text-white text-lg font-semibold hover:text-blue-400">
                <FaBars className="text-3xl" />
            </button>
        </div>
    </div>
    );
  };

export default LumenNavbar;