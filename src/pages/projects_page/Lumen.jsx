import React from 'react'
import { Helmet } from 'react-helmet'
import '../../index.css'

import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx'
import LumenNavbar from '../../components/navbar/LumenNavbar.jsx'


function Lumen() {
  return (
    <>
      <Helmet>
        <title>Projet Lumen</title>
      </Helmet>
      <Navbar />

      <div className="flex">
        <LumenNavbar />
        <div className="lg:mt-55 mt-32 p-4 mx-auto text-center text-white text-shadow-lg">
          <section className="mb-5 max-w-4xl" id="configuration">
            <h2 className="text-2xl font-medium">Configuration</h2>
            <p className="text-lg">
              Dans la page menu vous pouvez choisir le langage qui changera automatiquement pour toute l'application
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/lumen_doc/lang_config.png" class="w-56 rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Dans la page configuration d'abord configurez votre microphone en cliquant sur la checkbox puis en sélectionnant 
              le nom du micro que vous souhaitez utiliser (chaque fois que vous branchez ou débranchez un périphérique 
              sur votre ordinateur je vous conseille de configurer votre micro car l'index peut varier). 
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/lumen_doc/micro_config.png" class="w-full rounded-lg" alt="micro config"/>
            </div>  
            <br />
            <p className="text-lg">
              Ensuite, configurez la voix du narrateur Windows (voix synthétique) que vous souhaitez utilisez en cliquant sur 
              la checkbox puis en sélectionnant la voix que vous voulez utiliser pour l'application 
              (pour obtenir plus de voix regardez dans le ReadMe dans la section Synthetic Voice du projet pour savoir comment faire)
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/lumen_doc/voice_config.png" class="w-full rounded-lg" alt="voice config"/>
            </div>  
            <br />
            <p className="text-lg">
              Le checkbox texte déclencheur et réponse permet de définir un texte trigger donc de détection, d'allumage qui va entraîner 
              la réponse que vous choisissez, 
              <br />
              Par exemple : Texte déclencheur : bonjour ça va Texte réponse déclencheur : Oui je 
              vais bien merci monsieur et vous ?
              <br />
              Précision, veuillez noter qu'ici il ne faut pas mettre de majuscule, 
              ni ponctuation et bien veiller à orthographier pour le texte déclencheur, 
              sinon il ne sera jamais déclencher car le speech to text n'écrira pas de la même façon qu'attendu.
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/lumen_doc/txt_trigger.png" class="w-full rounded-lg" alt="text trigger"/>
            </div>  
            <br />
            <p className="text-lg">
              Le checkbox texte déclencheur d'application va sur le même principe que précédemment, sauf qu'il vous permet de 
              mettre un chemin d'application, de vidéos ou ce que vous voulez ouvrir et un texte déclencheur qui va ouvrir 
              cette application s'il détecte le texte que vous avez choisi Précision, veuillez bien faire attention de 
              NE PAS mettre les raccourcis par exemple pour vos .exe, il faut le .exe à la racine de 
              l'application pour que cela fonctionne, si par exemple vous mettez le raccourci d'OBS.exe en path cela 
              ne fonctionnera pas, il faut aller dans le dossier racine (souvent dans le système) et mettre le .exe.
              <br /><br />
              Pour trouver l'emplacement exact d'un .exe vous cliquez droit sur le logiciel et vous faites “Ouvrir l'emplacement 
              de ce fichier”, dans le dossier vous cherchez le .exe puis vous cliquez sur “Copier en tant que chemin d'accès” et 
              vous collez cela dans votre chemin du fichier dans l'app.
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/lumen_doc/txt_trigger_app.png" class="w-full rounded-lg" alt="text trigger app"/>
            </div>  
            <br />
            <p className="text-lg">
              Configurez ensuite la sensibilité de détection du micro en cliquant sur la checkbox, cela est à régler selon votre microphone, 
              par défaut il est à 500, plus vous augmentez la valeur par exemple 1000 ou + plus le micro sera moins sensible aux sons 
              faibles, permet d'éviter les bruits de fond mais il faudra parler plus fort, et plus il sera bas par exemple et 
              plus le micro sera sensible aux sons faibles et donc vous pourrez parler plus doucement.
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/lumen_doc/micro_sensitivity.png" class="w-full rounded-lg" alt="micro sensitivity"/>
            </div> 
            <br />
            <p className="text-lg">
              Si vous avez une caméra cochez la caméra pour configurer pour utiliser le mode Vision, ici vous allez avoir dans la 
              liste toutes vos caméras qui ont été détectées sur votre ordinateur vous avez plus qu'à choisir celle que vous 
              souhaitez utiliser pour le mode vision.
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/lumen_doc/cam_config.png" class="w-full rounded-lg" alt="cam config"/>
            </div> 
            <br />
            <p className="text-lg">
              Le bouton Paramètres Modèles permet en suivant les instructions qui seront dans le terminal, de personnaliser, créer, 
              modifier, faire du prompt engineering etc de vos modèles d'Ollama en local.
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/lumen_doc/models_params.png" class="w-full rounded-lg" alt="models params"/>
            </div> 
            <br />
            <p className="text-lg">
              Allez ensuite dans la page Discussion pour mettre un modèle que vous voulez utiliser, dans la liste choisissez un modèle que 
              vous utiliserez pour vos discussions (aller sur Ollama pour en télécharger d'autres en local et utilisez le 
              bouton Paramètres Modèles dans la page Configuration si vous souhaitez faire du prompt engineering 
              pour adapter spécifiquement le modèle à vous).
            </p>
            <br />
            <p className="text-lg">
              Faites de même pour les pages Precision, Code & Vision 
              <br />
              J'ai construit ces pages dans cette logique (que vous pouvez changer/adapter à vous) : 
              <br />
              Discussion = utiliser un modèle assez généraliste pour avoir des discussions sur tous les sujets (Llama3.1…)
              <br />
              Precision = utiliser un modèle fine tune (jimscard/whiterabbit-neo par exemple si vous êtes dans la cybersécurité..) dans 
              votre domaine et ou avec du prompt engineering dans un domaine spécifique pour avoir un modèle précis 
              dans un sujet/un domaine (le votre)
              <br />
              Code = utiliser un modèle de code (CodeGemma…)
              <br />
              Vision = utiliser un modèle de vision (Llava..) pour voir et discuter de choses qui 
              vous entoure en prenant des screenshots de votre ordinateur et ou du monde réel via votre caméra.
            </p>
            <div class="flex pt-3 justify-center">
              <img src="./src/0-ressources/lumen_doc/models_page_config.png" class="w-52 rounded-lg" alt="models page config"/>
            </div>
            <br />
          </section>
          <section className="mb-5 max-w-4xl" id="commandes-classiques">
            <h2 className="text-2xl font-medium">Commandes Classiques</h2>
            <section className="mb-2" id="txt-trigger">
              <h3 className="text-lg text-yellow-500 underline">Texte déclencheur</h3>
              <p className="text-lg">
                Vos textes déclencheurs et réponses que vous avez créez et que vous pouvez 
                créez dans la page Configuration (comme vu plus haut)
              </p>
              <p className="text-lg">
                Vos ouverture d'applications/fichiers via vos textes déclencheurs que vous pouvez 
                créez dans la page Configuration (comme vu plus haut)
              </p>
              <br />
            </section>
            <section className="mb-2" id="find-web">
              <h3 className="text-lg text-blue-500 underline">Recherche Web</h3>
              <p className="text-lg">
                [Pour toutes les recherches vous devez dire le texte clé + mettre ce que vous souhaitez rechercher derrière]
              </p>
              <p className="text-lg">
                Faire une recherche sur YouTube en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen cherche sur youtube', 'lumen recherche sur youtube', 'lumen rechercher sur youtube', 
                  'lumen find on youtube', 'lumen find in youtube']
                </span>
                <br />
                (par exemple : lumen cherche sur youtube hey initium)
              </p>
              <br />
              <p className="text-lg">
                Faire une recherche sur Google en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen cherche sur google', 'lumen recherche sur google', 'lumen find on google', 'lumen find in google']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Faire une recherche sur Wikipédia en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen cherche sur wikipédia', 'lumen recherche sur wikipédia', 'lumen recherche wikipédia', 
                  'lumen cherche wikipédia', 'lumen find on wikipedia', 'lumen find in wikipedia']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Faire une recherche sur Bing en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen cherche sur bing', 'lumen recherche sur bing', 'lumen find on bing', 'lumen find in bing']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Ouvrir Chat-GPT en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen ouvre chat ia', 'lumen ouvre chat gpt', 'lumen ouvre le chat gpt', 'lumen recherche sur chat ia', 
                  'lumen search on ai chat', 'lumen cherche sur chat ia', 'lumen search in ai chat', 'lumen start ai chat']
                </span>
              </p>
              <br />
            </section>
            <section className="mb-2" id="add-trigger-txt">
              <h3 className="text-lg text-green-500 underline">Ajout phrase déclencheur</h3>
              <p className="text-lg">
                Vous pouvez aussi ajouter un texte déclencheur et la réponse souhaitez vocalement au lieu 
                de le taper à la main dans la page configuration en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen ajout de texte', 'lumen ajout de text', 'lumen ajoute texte', 'lumen ajoute texte', 
                  'lumen ajoute du texte', 'lumen text add', 'lumen add text', 'lumen add of text', 'lumen add some text']
                </span>
                <br />
                (vous avez juste à suivre les indications de la voix)
              </p>
              <br />
            </section>
            <section className="mb-2" id="traduction-mode">
              <h3 className="text-lg text-orange-500 underline">Mode traduction</h3>
              <p className="text-lg">
                Le mode traduction (permet de traduire n'importe quels langues en entrée et de la traduire en anglais) en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen mode traduction', 'lumen passe en mode traduction', 'lumen translation mode', 'lumen switch to translation mode']
                </span>
                <br /><br />
                Dire : <span className="text-cyan-500">['activate the voice', 'activate voice', 'voice activate'] </span>
                pour que la voix du narrateur lise en anglais à haute voix la traduction
                <br /><br />
                Dire : <span className="text-cyan-500">['desactivate the voice', 'desactivate voice', 'voice desactivate'] </span>
                pour désactiver la voix
                <br /><br />
                Dire : <span className="text-cyan-500">['stop', 'stopp'] </span>
                pour arrêter le mode traduction
              </p>
              <br />
            </section>
            <section className="mb-2" id="volume-control">
              <h3 className="text-lg text-red-500 underline">Contrôle Volume</h3>
              <p className="text-lg">
                Contrôler le volume de l'ordinateur en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen mute', 'lumen silence', 'lumen mode silence', 'lumen silence mode']
                </span>
                pour couper le son de l'ordinateur
                <br /><br />
                Dire : <span className="text-cyan-500">['lumen des mutes', 'lumen remets le volume', 'lumen demute', 'lumen de mute'] </span>
                pour remettre le son de l'ordinateur
                <br /><br />
                Dire : <span className="text-cyan-500">['lumen augmente le volume', 'lumen monte le volume', 'lumen increase the volume'] </span>
                pour augmenter le volume de l'ordinateur
                <br /><br />
                Dire : <span className="text-cyan-500">['lumen diminue le volume', 'lumen descend le volume', 'lumen decreases the volume'] </span>
                pour diminuer le volume de l'ordinateur
              </p>
              <br />
            </section>
            <section className="mb-2" id="start-chrono">
              <h3 className="text-lg text-purple-500 underline">Démarrer Chronomètre</h3>
              <p className="text-lg">
                Lancer l'application chronomètre de l'ordinateur en disant 
                <br /><br />
                <span className="text-cyan-500">
                  ['lumen démarre le chronomètre', 'lumen démarre le chrono', 
                  'lumen start the chronometer', 'lumen start the chrono']
                </span>
              </p>
              <br />
            </section>
            <section className="mb-2" id="take-note">
              <h3 className="text-lg text-pink-500 underline">Prends note</h3>
              <p className="text-lg">
                Prendre des notes dans un fichier texte qui sera créé et stocké dans le dossier “téléchargement” de votre ordinateur dire 
                <br />
                <span className="text-cyan-500">
                  ['lumen prends note', 'lumen prend note', 'lumen take note']
                </span>
                <br />
                suivi de ce que vous voulez que l'assistant prend note, par exemple : lumen prends note qu'il faut 
                que j'aille acheter une carte graphique.
              </p>
              <br />
            </section>
            <section className="mb-2" id="computer-commands">
              <h3 className="text-lg text-brown-500 underline">Commande Ordinateur</h3>
              <p className="text-lg">
                Commandes ce cybersécurité et contrôle de l'ordinateur 
                <br />
                <span className="text-cyan-500">['lumen quel est mon ip', 'lumen quelle est mon ip', 'lumen mon ip', 'lumen my ip', 'lumen what is my ip', 'lumen what\'s my ip'] </span>
                pour que l'assistant vous ouvre un nouveau terminal avec les informations de votre IP
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen informations sur mon système', 'lumen information sur mon système', 
                  'lumen informations système', 'lumen information système', 
                  'lumen informations of my system', 'lumen information of my system', 'lumen informations system', 'lumen information system']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen informations sur le netstat', 'lumen informations netstat', 
                  'lumen informations of my netstat', 'lumen informations netstat', 
                  'lumen information sur le netstat', 'lumen information netstat', 'lumen information of my netstat', 'lumen information netstat']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen informations sur l\'arp', 'lumen informations arp', 
                  'lumen informations of my arp', 'lumen informations arp', 
                  'lumen information sur l\'arp', 'lumen information arp', 'lumen information of my arp', 'lumen information arp']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen informations route', 'lumen informations routes', 'lumen information route', 
                  'lumen information routes']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen informations task', 'lumen informations tasks', 'lumen information task', 
                  'lumen information tasks']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen informations driver', 'lumen informations drivers', 
                  'lumen driver informations', 'lumen drivers informations', 
                  'lumen information driver', 'lumen information drivers', 'lumen driver information', 'lumen drivers information']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen informations ms', 'lumen informations machine système', 
                  'lumen informations système machine', 
                  'lumen informations machine system', 'lumen information ms', 'lumen information machine système', 
                  'lumen information système machine', 'lumen information machine system']
                </span>
              </p>
              <br />
            </section>
            <section className="mb-2" id="datetime">
              <h3 className="text-lg text-teal-400 underline">Date & Heure</h3>
              <p className="text-lg">
                Contrôle de l'heure et la date en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen il est quelle heure', 'lumen quelle heure est-il', 'lumen l\'heure actuelle', 'lumen what time is it', 'lumen actual time']
                  Et ['lumen date actuelle', 'lumen date d\'aujourd\'hui', 'lumen current date', 'lumen today\'s date', 'lumen date of today']
                </span>
              </p>
              <br />
            </section>
            <section className="mb-2" id="math-calcul">
              <h3 className="text-lg text-cyan-300 underline">Calcul Mathématique</h3>
              <p className="text-lg">
                Faire quelques calculs mathématiques en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen calcule', 'lumen calcul', 'lumen compute', 'lumen calculate']
                </span>
                <br /><br />
                les calculs possibles actuellement sont des calculs utilisant : 
                <br />
                <span className="text-cyan-500">
                  ['moins', 'plus', 'divisé', 'multiplié', 'au carré', 
                  'sinusoide', 'cosinus', 'tangente', 'racine', 'intégrale', 'dérivée']
                </span>
              </p>
              <br />
            </section>
            <section className="mb-2" id="take-screenshot">
              <h3 className="text-lg text-magenta-500 underline">Prendre Screenshot</h3>
              <p className="text-lg">
                Prendre un screenshot de son ordinateur en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen prends un screen', 'lumen prends une capture d\'écran', 'lumen capture d\'écran', 
                  'lumen prend un screen', 'lumen prend une capture d\'écran', 'lumen take a screen', 
                  'lumen take a screenshot', 'lumen screenshot']
                </span>
                <br />
                Le screenshot sera stocké dans le dossier de l'application Lumen dans le dossier Photos.
              </p>
              <br />
            </section>
            <section className="mb-2" id="screen-cam">
              <h3 className="text-lg text-lime-500 underline">Screen Caméra</h3>
              <p className="text-lg">
                Pour prendre un screen avec votre caméra du monde réel dire 
                <br />
                <span className="text-cyan-500">
                  ['lumen screen avec la caméra', 'lumen screen avec la cam', 'lumen screen cam', 'lumen screencam', 
                  'lumen screen with camera', 'lumen cam screen']
                </span>
                <br />
                La photo sera stockée dans le dossier de l'application Lumen dans le dossier Photos.
              </p>
              <br />
            </section>
            <section className="mb-2" id="start-video">
              <h3 className="text-lg text-green-500 underline">Démarrer Vidéo</h3>
              <p className="text-lg">
                Pour démarrer une vidéo via votre caméra, dire 
                <br />
                <span className="text-cyan-500">
                  ['lumen commence à filmer', 'lumen lance la vidéo', 'lumen film', 'lumen filme', 
                  'lumen start filming', 'lumen start video capture', 'lumen start a video']
                </span>
                <br />
                la vidéo sera stockée dans le dossier “téléchargement” de votre ordinateur.
              </p>
              <br />
            </section>
            <section className="mb-2" id="pause-mode">
              <h3 className="text-lg text-orange-500 underline">Mode Pause</h3>
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen mode pause', 'lumen mets-toi en pause', 'lumen mets toi en pause', 'lumen pause mode']
                </span>
                <br />
                pour mettre en pause l'écoute et donc l'assistant
              </p>
              <br />
            </section>
            <section className="mb-2" id="stop">
              <h3 className="text-lg text-red-500 underline">Stop</h3>
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen éteins-toi', 'lumen arrête-toi', 'lumen stop tout', 
                  'lumen mode arrêt' 'lumen shutdown mode', 
                  'lumen shoot down mode', 'lumen shootdown mode']
                </span>
                <br />
                pour arrêter l'assistant
              </p>
              <br />
            </section>
          </section>
          <section className="mb-5 max-w-4xl" id="commandes-avancees">
            <h2 className="text-2xl font-medium">Commandes Avancées</h2>
            <section className="mb-2" id="discussion-mode">
              <h3 className="text-lg text-gray-400 underline">Mode Discussion</h3>
              <p className="text-lg">
                Utiliser le mode Discussion en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen passe en mode discussion', 'lumen passe en discussion', 'lumen passage en mode discussion', 
                  'lumen mode discussion', 'lumen switch to discussion mode', 'lumen switch to discussion', 'lumen discussion mode']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['sauvegarde notre discussion', 'sauvegarde notre conversation', 
                  'sauvegarde la discussion', 'sauvegarde la conversation', 
                  'save our discussion', 'save our conversation', 'save the discussion', 'save the conversation']
                </span>
                pour sauvegarder votre/vos discussions qui seront stockés automatiquement dans votre page ici Discussion, qui permettra 
                d'y accéder via l'interface et de pouvoir reconsulter vos discussions, de les télécharger, renommer ou supprimer.
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['c\'est bon tu peux arrêter', 'tu peux arrêter', 
                  'désactive llm', 'passe en mode classique', 'passage en mode classique', 
                  'passe classique','disable llm', 'switch to classic mode', 'switch classic mode', 'it\'s okay you can stop', 
                  'it is okay you can stop', 'you can stop']
                </span>
                pour arrêter le mode discussion et revenir en exécution de commandes classiques
              </p>
              <br />
            </section>
            <section className="mb-2" id="code-mode">
              <h3 className="text-lg text-green-400 underline">Mode Code</h3>
              <p className="text-lg">
                Utiliser le mode Code en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen passe en mode code', 'lumen passe en code', 'lumen passage en mode code', 'lumen mode code', 
                  'lumen switch to code mode', 'lumen switch to code', 'lumen code mode']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['je veux rentrer du code', 'modification de code', 'I want to enter code']
                </span> 
                <br />
                pour pouvoir entrer du code dans une fenetre txt qui va s'ouvrir pour parler avec votre LLM sur ce code
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500">  ["c'est bon", "j'ai déposé mon code", 'code déposé', "it's okay", 
                  "I submitted my code", 'code submitted', 
                  "it is okay", "okai", "ok", "okay"]
                </span>
                <br />
                après avoir fermé et sauvegardé la fenêtre txt avec votre code dedans
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['sauvegarde notre discussion', 'sauvegarde notre conversation', 
                  'sauvegarde la discussion', 'sauvegarde la conversation', 
                  'save our discussion', 'save our conversation', 'save the discussion', 'save the conversation'] 
                </span>
                <br />
                pour sauvegarder la discussion dans la page Code.
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['c\'est bon tu peux arrêter', 'tu peux arrêter', 'désactive llm', 
                  'passe en mode classique', 'passage en mode classique', 
                  'désactive code llm', 'passe classique','disable llm', 'switch to classic mode','switch classic mode', 
                  'disable code llm', 'it\'s okay you can stop', 'it is okay you can stop', 'you can stop']
                </span>
                <br />
                pour revenir en exécution de commandes classiques.
              </p>
              <br />
            </section>
            <section className="mb-2" id="precision-mode">
              <h3 className="text-lg text-cyan-400 underline">Mode Precision</h3>
              <p className="text-lg">
                Utiliser le mode Precision en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen passe en mode précision', 'lumen passe en précision', 'lumen passage en mode précision', 'lumen mode précision', 
                  'lumen switch to precision mode', 'lumen switch to precision', 'lumen precision mode']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['je veux rentrer des données', 'aide moi sur ça', 
                  'je veux rentrer du code', 'insérer des éléments' 
                  'insérer un élément', 'I want to enter code', 'help me on this', 'insert elements']
                </span>
                <br />
                pour entrer les mots/données que vous voulez dans la fenêtre en txt
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ["c'est bon", "j'ai déposé mon élément", "j'ai déposé mes éléments", 
                  "code déposé", "éléments déposé", 
                  "élément déposé", "it's okay", "I submitted my code", 'code submitted', "it is okay", "okai", "ok", "okay", 
                  "I submitted my element", "I submitted my elements"]
                </span>
                <br />
                après avoir sauvegardé puis fermé la fenêtre txt.
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['sauvegarde notre discussion', 'sauvegarde notre conversation', 
                  'sauvegarde la discussion', 'sauvegarde la conversation', 'save our discussion', 
                  'save our conversation', 'save the discussion', 'save the conversation']
                </span>
                <br />
                pour sauvegarder la conversation dans la page Precision.
              </p>
              <p className="text-lg">
                Dire :
                <br />
                <span className="text-cyan-500"> ['c\'est bon tu peux arrêter', 'tu peux arrêter', 
                  'désactive llm', 'passe en mode classique', 
                  'passage en mode classique', 'désactive précision llm', 'passe classique','disable llm', 
                  'switch to classic mode','switch classic mode', 'disable precision llm', 'it\'s okay you can stop', 
                  'it is okay you can stop', 'you can stop']
                </span>
                <br />
                pour revenir en exécution de commandes classiques.
              </p>
              <br />
            </section>
            <section className="mb-2" id="vision-mode">
              <h3 className="text-lg text-orange-400 underline">Mode Vision</h3>
              <p className="text-lg">
                Utiliser le mode Vision en disant 
                <br />
                <span className="text-cyan-500">
                  ['lumen passe en mode analyse', 'lumen passe en analyse', 'lumen passage en mode analyse', 'lumen passage en mode vision', 
                  'lumen mode vision', 'lumen passage en vision', 'lumen passe en vision', 'lumen passe en mode vision', 
                  'lumen switch to analysis mode', 'lumen switch to analyse', 'lumen switch to vision', 'lumen switch to vision mode', 
                  'lumen switch to analysis', 'lumen switch to analyse mode', 'lumen vision mode']
                </span>
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen prends un screen', 'lumen prends une capture d\'écran', 
                  'lumen capture d\'écran', 'lumen prend un screen', 
                  'lumen prend une capture d\'écran', 'lumen take a screen', 'lumen take a screenshot', 'lumen screenshot']
                </span>
                <br />
                pour prendre un screenshot de votre ordinateur et ensuite pour parler avec le modèle de ce que 
                vous voulez qu'il fasse en voyant ce screenshot.
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['lumen screen avec la caméra', 'lumen screen avec la cam', 
                  'lumen screen cam', 'lumen screencam', 
                  'lumen screen with camera', 'lumen cam screen']
                </span>
                <br />
                pour qu'il prenne une photo via votre caméra et ensuite pour parler avec le modèle de ce que vous voulez qu'il 
                fasse en voyant cette photo.
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['sauvegarde notre discussion', 'sauvegarde notre conversation', 
                  'sauvegarde la discussion', 'sauvegarde la conversation', 'save our discussion', 
                  'save our conversation', 'save the discussion', 'save the conversation']
                </span>
                <br />
                pour sauvegarder la discussion dans la page Vision.
              </p>
              <br />
              <p className="text-lg">
                Dire :
                <span className="text-cyan-500"> ['désactive llm', 'désactive vision', 'passe en mode classique', 
                  'passage en mode classique', 'disable llm', 'switch to classic mode', 'switch classic mode']
                </span>
                <br />
                pour repasser en exécution de commandes classiques.
              </p>
              <br />
            </section>
          </section>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Lumen;