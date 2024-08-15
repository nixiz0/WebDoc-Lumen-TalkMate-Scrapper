import React from 'react'
import { Helmet } from 'react-helmet'
import '../../index.css'

import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx'
import ScrapperNavbar from '../../components/navbar/ScrapperNavbar.jsx'


function Scrapper() {
  return (
    <>
      <Helmet>
        <title>Projet Scrapper</title>
      </Helmet>
      <Navbar />

      <div className="flex">
        <ScrapperNavbar />
        <div className="lg:mt-55 mt-32 p-4 mx-auto text-center text-white text-shadow-lg">
          <section className="mb-20 max-w-4xl" id="menu">
            <h2 className="text-2xl font-medium text-cyan-400">Menu</h2>
            <p className="text-lg">
              Bienvenue sur votre scrapper sur la page Menu
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/menu.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Une fois que vous avez téléchargé Chromium (comme expliqué dans le Readme du Projet sur Github) vous 
              devez mettre le .exe de Chromium en naviguant dans le dossier chrome-win où vous avez placé les fichiers 
              contenu dans le ZIP une fois Chromium téléchargé.
            </p>
            <p className="text-lg">
              Cette étape est importante car elle permet de scrapper des sites web dynamiques fait en React, ViteJS etc
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/menu_chrome_exe.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>  
          </section>
          <section className="mb-20 max-w-4xl" id="clean_data">
            <h2 className="text-2xl font-medium text-cyan-400">Clean data</h2>
            <p className="text-lg">
              Vous allez devoir insérer votre fichier csv (le plus souvent le fichier csv sauvegardé après que vous avez 
              réalisé votre scrapping)
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/clean_upload_csv.png" class="w-60 rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Une fois que vous avez importé votre fichier CSV vous allez avoir sous forme de tableau, un visuel qui vous 
              montrera ce que contient le fichier CSV
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/clean_illu_csv.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Une fois que vous avez importé votre CSV vous allez avoir dans votre barre latérale des paramètres qui vont apparaître. 
            </p>
            <p className="text-lg">
              Vous allez pouvoir cocher un checkbox à la fois selon ce que vous souhaitez faire.
            </p>
            <p className="text-lg">
              Vous allez pouvoir renommer des lignes/colonnes, supprimer-ajouter des lignes/colonnes :
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/clean_columns.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/clean_rows.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>
            <br />
            <p className="text-lg">
              Supprimer, remplacer les valeurs manquantes : 
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/clean_missing_val.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Effectuer des transformations dans vos colonnes/lignes :
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/clean_transfo.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              A chaque fois que vous cochez un checkbox des éléments sur l'interface vont apparaître vous avez juste à suivre ce qui 
              est écrit, sélectionner ce que vous souhaitez et appuyer sur le bouton pour sauvegarder les modifications
            </p>
          </section>
          <section className="mb-20 max-w-4xl" id="scrap_tool">
            <h2 className="text-2xl font-medium text-cyan-400">Scrap Tool</h2>
            <p className="text-lg">
              Dans la barre latérale vous allez devoir mettre l'url du site que vous souhaitez scrapper
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/scrap_url.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
                Vous allez devoir choisir si vous souhaitez scrapper une page ou tout le site
            </p>
            <p className="text-lg">
              Si vous souhaitez scrapper tout le site, veuillez mettre l'URL juste de la page principale, mais si vous souhaitez 
              scrapper une page précise alors dans l'url collez la page que vous voulez scrapper
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/scrap_choose.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
                Si vous souhaitez scrapper que la page vous allez pouvoir choisir les balises que vous souhaitez scrapper
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/scrap_page.png" class="w-96 rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Si vous souhaitez scrapper tout un site vous pouvez choisir dans la barre latérale le nombre de page que 
              vous souhaitez scrapper, ce qui permet de creuser dans le site un petit peu sans tout scrapper en entier
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/scrap_max_page.png" class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Comme pour le scrap d'une page pour tout un site vous allez pouvoir sélectionner les balises que vous souhaitez scrapper
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/scrapper_doc/scrap_all.png" class="w-96 rounded-lg" alt="lang config"/>
            </div>  
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Scrapper