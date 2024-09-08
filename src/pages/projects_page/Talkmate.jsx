import React from 'react'
import { Helmet } from 'react-helmet'
import '../../index.css'

import Navbar from '../../components/navbar/Navbar.jsx'
import Footer from '../../components/footer/Footer.jsx'
import TalkMateNavbar from '../../components/navbar/TalkMateNavbar.jsx'
import micro_config from '../../0-ressources/talkmate_doc/micro_config.png'
import voice_config from '../../0-ressources/talkmate_doc/voice_config.png'
import btn_dev_only from '../../0-ressources/talkmate_doc/btn_dev_only.png'
import models_config from '../../0-ressources/talkmate_doc/models_config.png'
import history from '../../0-ressources/talkmate_doc/history.png'
import discussion_mode from '../../0-ressources/talkmate_doc/discussion_mode.png'
import summarize_upload from '../../0-ressources/talkmate_doc/summarize_upload.png'
import summarize_extract_txt from '../../0-ressources/talkmate_doc/summarize_extract_txt.png'
import btn_summarize from '../../0-ressources/talkmate_doc/btn_summarize.png'
import audio_mode from '../../0-ressources/talkmate_doc/audio_mode.png'
import qa_document_upload from '../../0-ressources/talkmate_doc/qa_document_upload.png'
import qa_document_models from '../../0-ressources/talkmate_doc/qa_document_models.png'
import qa_history_discu_mode from '../../0-ressources/talkmate_doc/qa_history_discu_mode.png'
import question_models_config from '../../0-ressources/talkmate_doc/question_models_config.png'
import question_profils from '../../0-ressources/talkmate_doc/question_profils.png'
import question_history from '../../0-ressources/talkmate_doc/question_history.png'
import btn_history from '../../0-ressources/talkmate_doc/btn_history.png'


function Talkmate() {
  return (
    <>
      <Helmet>
        <title>Projet Talkmate</title>
      </Helmet>
      <Navbar />

      <div className="flex">
        <TalkMateNavbar />
        <div className="lg:mt-55 mt-32 p-4 mx-auto text-center text-white text-shadow-lg">
          <section className="mb-20 max-w-4xl" id="menu">
              <h2 className="text-2xl font-medium text-cyan-400">Menu</h2>
              <p className="text-lg">
                Configuration du Microphone à utiliser dans l'application durant la session (permet de parler à votre assistant par la suite)
              </p>
              <div class="flex pt-3 justify-center">
                <img src={micro_config} class="w-auto rounded-lg" alt="lang config"/>
              </div>  
              <br />
              <p className="text-lg">
                Configuration de la voix synthétique souhaité, si vous n'avez pas toutes les voix du narrateur disponibles,
                veuillez regarder le ReadMe dans la partie “Configuration Synthetic Voices”, et suivez les étapes à faire pour ajouter 
                d'autres voix du narrateur windows dans votre application
              </p>
              <div class="flex pt-3 justify-center">
                <img src={voice_config} class="w-44 rounded-lg" alt="lang config"/>
              </div>  
              <br />
              <p className="text-lg">
                Dans l'onglet “Pour développeur uniquement”, le bouton Paramètres Modèles permet de modifier l'instruction système 
                de vos modèles Ollama en local, le bouton Quantize Modèles permet de quantizer (donc de réduire, compressé) 
                en utilisant Docker un modèle et enfin le bouton Publier Modèles permet via l'API d'Ollama de publier votre 
                modèle sur Ollama, pour chaque bouton, vous devez suivre les étapes dans le terminal
              </p>
              <div class="flex pt-3 justify-center">
                <img src={btn_dev_only} class="w-auto rounded-lg" alt="lang config"/>
              </div>  
          </section>
          <section className="mb-20 max-w-4xl" id="assistant">
            <h2 className="text-2xl font-medium text-cyan-400">Assistant</h2>
            <p className="text-lg">
              Vous pouvez choisir un de vos modèles que vous avez au préalable téléchargé sur Ollama et ou modifié en local 
            </p>
            <div class="flex pt-3 justify-center">
                <img src={models_config} class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Ensuite vous avez votre historique de conversation qui permet de choisir une conversation et ou d'en créer une nouvelle 
              en cliquant sur le bouton Nouveau 
            </p>
            <div class="flex pt-3 justify-center">
                <img src={history} class="w-44 rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Il y a 2 modes de discussions possibles ici, soit le mode Discussion continue qui permet de discuter continuellement 
              avec votre modèle sans avoir à réappuyer sur un bouton et le Mode Discussion qui permet de parler une seule fois et d'avoir 
              la réponse de la voix synthétique une fois et à chaque fois il faut réappuyer pour reparler avec le modèle
            </p>
            <div class="flex pt-3 justify-center">
                <img src={discussion_mode} class="w-auto rounded-lg" alt="lang config"/>
            </div>  
          </section>
          <section className="mb-20 max-w-4xl" id="summarize">
            <h2 className="text-2xl font-medium text-cyan-400">Summarize</h2>
            <p className="text-lg">
              Vous pouvez Upload un fichier pour le résumer
            </p>
            <div class="flex pt-3 justify-center">
                <img src={summarize_upload} class="w-72 rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Ca va extraire le texte et ensuite utiliser un modèle de résumé universel qui va être utilisé pour 
              résumer le mieux possible votre document 
            </p>
            <div class="flex pt-3 justify-center">
                <img src={summarize_extract_txt} class="w-64 rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Vous pouvez personnaliser votre résumé via les Propriétés Avancées où vous retrouverez une liste de 
              propriété à modifier selon vos besoins : 
              <ul>
                <li>- Choisir la longueur maximale du résumé </li>
                <li>- Choisir la longueur minimale du résumé </li>
                <li>- La taille du lot </li>
                <li>- Le top_k et le top_p qui sont expliqués via le bouton Info juste en dessous</li>
              </ul>
            </p>
            <div class="flex pt-3 justify-center">
                <img src={btn_summarize} class="w-54 rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Vous avez votre Mode Audio qui permet de parler via la voix synthétique pour vous lire le texte qui vous a été résumé 
            </p>
            <div class="flex pt-3 justify-center">
                <img src={audio_mode} class="w-auto rounded-lg" alt="lang config"/>
            </div>  
          </section>
          <section className="mb-20 max-w-4xl" id="qa_document">
            <h2 className="text-2xl font-medium text-cyan-400">QA Document</h2>
            <p className="text-lg">
              Vous pouvez Upload un fichier qui permet de parler par la suite via un LLM sur votre document upload
            </p>
            <div class="flex pt-3 justify-center">
                <img src={qa_document_upload} class="w-72 rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Vous pouvez choisir le modèle en local que vous souhaitez utiliser et le modèle d'embedding (pour la vectorisation) 
              que vous souhaitez
            </p>
            <div class="flex pt-3 justify-center">
                <img src={qa_document_models} class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Vous avez ensuite votre historique de conversation comme pour la page Assistant mais ici vous allez 
              retrouver vos discussions seulement de votre page QA Document & Vous avez votre mode discussion qui 
              vous permet après avoir mis un document de parler une fois en cliquant sur le bouton pour poser votre 
              question sur le document fourni
            </p>
            <div class="flex pt-3 justify-center">
                <img src={qa_history_discu_mode} class="w-auto rounded-lg" alt="lang config"/>
            </div>  
          </section>
          <section className="mb-20 max-w-4xl" id="question">
            <h2 className="text-2xl font-medium text-cyan-400">Question</h2>
            <p className="text-lg">
              Vous devez choisir votre modèle LLM et votre modèle d'embedding en local comme pour la page QA Document
            </p>
            <div class="flex pt-3 justify-center">
                <img src={question_models_config} class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Si vous n'avez pas créé de profil vous devez en créer un en entrant le nom du 
              nouveau profil et en appuyant sur le bouton créer 
            </p>
            <div class="flex pt-3 justify-center">
                <img src={question_profils} class="w-auto rounded-lg" alt="lang config"/>
            </div>  
            <br />
            <p className="text-lg">
              Vous allez avoir votre historique des conversations qui va afficher seulement vos conversations dans cette page 
              et qui va mettre le nom de votre profil entre [] pour vous indiquer le profil que vous avez utilisé durant la conversation
            </p>
            <div class="flex pt-3 justify-center">
                <img src={question_history} class="w-auto rounded-lg" alt="lang config"/>
            </div>  
          </section>
          <section className="mb-20 max-w-4xl" id="others">
            <h2 className="text-2xl font-medium text-cyan-400">Autres...</h2>
            <p className="text-lg">
              Chaque historique de conversation, si vous sélectionnez un fichier cela va automatiquement vous proposer d'autres
              paramètres comme le fait de renommer le nom de la conversation sauvegardée, télécharger en 
              CSV et enfin supprimer la conversation
            </p>
            <div class="flex pt-3 justify-center">
                <img src={btn_history} class="w-auto rounded-lg" alt="lang config"/>
            </div>  
          </section>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Talkmate