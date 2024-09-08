import React from 'react'
import { Helmet } from 'react-helmet'
import '../index.css'

import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/footer/Footer.jsx'
import lumen_minia from '../0-ressources/lumen-minia.png'
import talkmate_minia from '../0-ressources/talkmate-minia.png'
import scrapper_minia from '../0-ressources/scrapper-minia.png'


function Home() {
  return (
    <>
      <Helmet>
        <title>Accueil</title>
      </Helmet>
      <Navbar />
      <div className="flex flex-col items-center justify-center lg:mb-96 md:mb-60 sm:mb-5">
        <h1 className="mt-40 text-4xl font-bold text-center text-cyan-400 text-shadow-lg">
          Lumen / TalkMate / Scrapper
        </h1>
        <p className="mt-4 text-lg text-center text-white text-shadow-lg max-w-lg mx-auto">
          Retrouvez les différents projets qui peuvent être utilisés à part ou de façon complémentaire.
        </p>
        <div className="flex flex-wrap justify-center mt-8">
          <div className="m-4 text-center">
            <a href="https://www.youtube.com/watch?v=KB6hKrypfqk&list=PL0AcJq6MCzvPKqqVnr2Q7nHkqnuEtTH7Q" target="_blank" rel="noopener noreferrer">
              <img src={lumen_minia} alt="Lumen" className="shadow-lg w-[270px] hover:scale-95 transition-transform duration-300" style={{ boxShadow: '0 0px 5px 0 #22d3ee' }} />
              <h3 className="mt-2 text-lg text-cyan-400 font-medium text-shadow-lg">Lumen</h3>
            </a>
          </div>
          <div className="m-4 text-center">
            <a href="https://www.youtube.com/watch?v=5sxedN1hFOc&list=PL0AcJq6MCzvP5oQIfMy938zf82opTlsFz" target="_blank" rel="noopener noreferrer">
              <img src={talkmate_minia} alt="Talkmate" className="shadow-lg w-[270px] hover:scale-95 transition-transform duration-300" style={{ boxShadow: '0 0px 5px 0 #22d3ee' }} />
              <h3 className="mt-2 text-lg text-cyan-400 font-medium text-shadow-lg">TalkMate</h3>
            </a>
          </div>
          <div className="m-4 text-center">
            <a href="https://youtu.be/BeyrVX9fOQg?si=JWIKBENSvwM9XOnC" target="_blank" rel="noopener noreferrer">
              <img src={scrapper_minia} alt="Scrapper" className="shadow-lg w-[270px] hover:scale-95 transition-transform duration-300" style={{ boxShadow: '0 0px 5px 0 #22d3ee' }} />
              <h3 className="mt-2 text-lg text-cyan-400 font-medium text-shadow-lg">Scrapper</h3>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;