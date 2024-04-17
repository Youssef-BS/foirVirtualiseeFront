import React, { useState, useEffect } from 'react';
import "./stands.css";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function Bands() {
  const navigate = useNavigate();
  const [bands, setBands] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/stand/all");
        setBands(response.data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  console.log(bands);

  const handleSupprimer = async (id) => {
    await axios.delete("http://localhost:3000/stand/deletebyid/" + id);
    window.location.reload();
  };

  const handleConsulter = (id) => {
    navigate(`/bandsDetail/${id}`);
  };

  return (
    <div className="bands-container">
      <h2>Les stands</h2>
      <button className='button-add' ><Link to="/creation-brand" style={{ textDecoration: 'none', color: 'white' }}>Ajouter Brand</Link></button>
      {error ? (
        <div className="error-message">Error: {error}</div>
      ) : (
        <div className="bands-list">
          {bands.map((band, index) => (
            <div key={index} className="band-card">
              <div className="band-info">
                <span className="band-numero">Numero: {band.Numero}</span>
                <span className="band-name">Prix: {band.prix}</span>
                <span className="band-genre">Superficie: {band.superficie}</span>
                <span className="band-disponibilite">Disponibilité: {band.disponibilite}</span>
                <div className="button-container">
                  <button onClick={() => handleSupprimer(band._id)}>Supprimer</button>
                  <button onClick={() => handleConsulter(band._id)}>Consulter</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bands;
