import React, { useEffect, useState } from 'react';
import Slide from '../components/Slide';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAllEvents, setShowAllEvents] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/event/all');
        const eventsToShow = showAllEvents ? response.data : response.data.slice(0, 5);
        setEvents(eventsToShow);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
        console.error(error);
      }
    };
    fetchData();
  }, [showAllEvents]);

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

      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-96 cursor-pointer">
        {loading ? (
          <div className="text-center">Chargement...</div>
        ) : error ? (
          <div className="text-red-500">Erreur: {error}</div>
        ) : (
          <>
            {events.map(event => (
            <>
              <Link to={'/event-selectione/'+event?._id}>
              <div key={event._id} className="bg-white shadow-md rounded p-4 flex flex-col">
                <img src={`http://localhost:3000/${event?.photo}`} alt={event?.EventName} className="w-full h-40 object-cover rounded mb-2" />
                <h3 className="text-xl font-bold mb-2">{event?.EventName}</h3>
                <p className="text-gray-700 mb-2">{event?.description}</p>
                <p className="text-gray-700">Date de début: {new Date(event.DateDebut).toLocaleDateString()}</p>
                <p className="text-gray-700">Date de fin: {new Date(event.DateFin).toLocaleDateString()}</p>
              </div>
              </Link>
              </>
            ))}
            
          </>
        )}
      </div>

      <footer className="bg-gray-800 text-gray-300 py-4 text-center mt-12">
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
