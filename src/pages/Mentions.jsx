import React from 'react'
import { Helmet } from 'react-helmet'
import '../index.css'

import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/footer/Footer.jsx'


function Mentions() {
  return (
    <>
      <Helmet>
        <title>Mentions</title>
      </Helmet>
      <Navbar />

      <div className="flex flex-col items-center justify-center text-center min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full mt-20">
          <div className="text-white space-y-6">
            <section className="mb-10"> 
              <h3 className="text-xl font-semibold">Auteur</h3>
              <p>
                <strong>Nom :</strong> Hey Initium alias @nixiz0 
                <br />
                (pseudonymes faisant office de nom et prénom pour toutes les démarches, 
                représentant la validité légales sous anonymisation de l'auteur)
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-semibold">Hébergement</h3>
              <p><strong>Nom de l'Hébergeur :</strong> Netlify</p>
              <p><strong>Téléphone :</strong> [+1 844-899-7312]</p>
              <p><strong>Adresse :</strong> [610 22nd Street, Suite 315 CA 94107 San Francisco]</p>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-semibold">Propriété intellectuelle</h3>
              <p>
                L'ensemble des contenus présents sur ce site, y compris, mais sans s'y limiter, les textes, images, logos, et codes sources (ci-après les "Projets"),
                sont protégés par les lois en vigueur sur la propriété intellectuelle. Ces Projets sont la propriété exclusive de Hey Initium alias @nixiz0.
              </p>
              <p>
                Les Projets sont distribués sous une licence open source. Toutefois, l'utilisation de ces Projets n'accorde aux utilisateurs aucun droit de propriété
                intellectuelle sur ceux-ci. Vous reconnaissez que Hey Initium alias @nixiz0 reste le détenteur exclusif de tous les droits de propriété
                intellectuelle relatifs aux Projets, y compris les droits d'auteur et les droits voisins.
              </p>
              <br />
              <p>
                <strong>Licence et utilisation :</strong> Toute utilisation des Projets, sous quelque forme que ce soit, est soumise aux termes de la licence open source applicable.
                Vous êtes libre d'utiliser, modifier et distribuer les Projets conformément aux termes de cette licence. Cependant, toute tentative de revendiquer la propriété ou d'exercer un 
                droit sur les Projets, autre que ceux expressément concédés par la licence open source, est strictement interdite.
              </p>
              <p>
                Vous reconnaissez que Hey Initium alias @nixiz0 conserve tous les droits sur les Projets, y compris le droit d'apporter 
                des modifications, de retirer la distribution des Projets, et de faire respecter ses droits en cas de violation.
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-semibold">Responsabilité</h3>
              <p>
                Hey Initium alias @nixiz0 ne saurait être tenu responsable de l'utilisation des Projets faite par les utilisateurs, ni des éventuels dommages,
                directs ou indirects, pouvant résulter de l'utilisation ou de l'incapacité à utiliser les Projets.
              </p>
            </section>

            <section className="mb-10">
              <h3 className="text-xl font-semibold">Droit applicable</h3>
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, et après tentative de résolution amiable, les tribunaux français seront seuls compétents pour connaître du différend.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Mentions;