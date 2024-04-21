import React from 'react';
import Slide from '../components/Slide';
import { Link } from 'react-router-dom';

function Home() {

  
  return (
    <div className="min-h-screen flex flex-col">
      <Slide />
      
      <div className="container mx-auto mt-8">
        <p className="text-center text-lg text-gray-700">
          Découvrez nos prochains événements et réservez en ligne dès aujourd'hui !
        </p>
        <p className="text-center text-gray-700 mt-2">
          Avec notre site web, vous pouvez parcourir notre sélection d'événements passionnants et réserver votre place en ligne en quelques clics. Ne manquez pas l'opportunité de participer à nos activités et de créer des souvenirs inoubliables !
        </p>
        <div className="flex justify-center mt-4">
          <Link to="/events" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-3">
            Voir les événements
          </Link>
        </div>
      </div>

      <footer className="bg-gray-800 text-gray-300 py-4 text-center mt-auto">
        <div className="container mx-auto">
          <p className="text-sm">
            © 2024 Votre entreprise. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
