import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ajouterEvent.css';

function AjouterEvent() {
  const [eventName, setEventName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/event/create', {
        EventName: eventName,
        DateDebut: startDate,
        DateFin: endDate,
        description: description
      });
      console.log('Event added successfully:', response.data);
      // Redirect to event page after successful submission
      history('/event');
    } catch (error) {
      setError(error.message);
      console.error('Error adding event:', error);
    }
  };

  return (
    <div className="ajouter-event-container">
      <h2>Ajouter un nouvel événement</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nom de l'événement:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date de début:</label>
          <input
            type="datetime-local"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date de fin:</label>
          <input
            type="datetime-local"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Ajouter l'événement</button>
      </form>
    </div>
  );
}

export default AjouterEvent;
