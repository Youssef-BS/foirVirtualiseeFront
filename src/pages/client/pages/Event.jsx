import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Event() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/event/all');
        setEvents(response.data);
        setLoading(false); // Update loading state after data is fetched
      } catch (error) {
        setError(error.message);
        setLoading(false); // Update loading state in case of error
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleConsulter = (id) => {
    navigate(`/event-selectione/${id}`);
  };

  const isEventAvailable = (event) => {
    const currentDate = new Date();
    const endDate = new Date(event.DateFin);
    return currentDate > endDate; // Check if current date is greater than end date
  };

  return (
    <div className="event-list-container">
      <h2>Liste des evenements</h2>
      {loading ? ( // Show loading message while data is being fetched
        <div className="loading-message">Chargement...</div>
      ) : error ? (
        <div className="error-message">Error: {error}</div>
      ) : events.length > 0 ? (
        <ul className="event-list">
          {events.map(event => (
            <li key={event._id} className="event-item">
              <div>
                <h3>{event.EventName}</h3>
                <p>{event.description}</p>
                <p>Start Date: {new Date(event.DateDebut).toLocaleDateString()}</p>
                <p>End Date: {new Date(event.DateFin).toLocaleDateString()}</p>
                <p className={isEventAvailable(event) ? 'availability-green' : 'availability-red'}>
                  {isEventAvailable(event) ? 'Disponible' : 'Non disponible'}
                </p>
              </div>
              <div className="button-container">
                <button onClick={() => handleConsulter(event._id)}>Consulter</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-message">Aucun événement trouvé</div>
      )}
    </div>
  );
}

export default Event;
