import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./event.css"; 
import { useNavigate , Link} from 'react-router-dom';

function EventList() {
    const [events, setEvents] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/event/all"); 
                setEvents(response.data);
            } catch (error) {
                setError(error.message);
                console.error(error);
            }
        };
        fetchData();
    }, []);

    console.log(events);

    const handleConsulter = (id) => {
        navigate(`/eventDetails/${id}`);
    };

    const handleSupprimer = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/event/deletebyid/${id}`);
            setEvents(events.filter(event => event._id !== id));
        } catch (error) {
            console.error(error);
        }
    };
    

    return (
        
        <div className="event-list-container"> 
  <h2>Liste des evenements </h2>
  <button className='button-add'><Link to="/ajouterEvent" style={{ textDecoration: 'none', color: 'white' }}>Ajouter Evenement</Link></button>

  {error ? (
    <div className="error-message">Error: {error}</div>
  ) : events.length > 0 ? (
    <ul className="event-list">
      {events.map(event => (
        <li key={event._id}>
          <div>
            <h3>{event.EventName}</h3>
            <p>{event.description}</p>
            <p>Start Date: {new Date(event.DateDebut).toLocaleDateString()}</p>
            <p>End Date: {new Date(event.DateFin).toLocaleDateString()}</p>
          </div>
          <div className="button-container">
            <button onClick={() => handleConsulter(event._id)}>Consulter</button>
            <button onClick={() => handleSupprimer(event._id)}>Supprimer</button>
          </div>
        </li>
      ))}
    </ul>
  ) : (
    <div className="loading-message">Chargement...</div>
  )}
</div>
    );
}

export default EventList;
