import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import "./creationStand.css";

function StandDetails() {
    const history = useNavigate(); 
    const [error, setError] = useState(null);
    const [Numero, setNumero] = useState('');
    const [prix, setPrix] = useState('');
    const [superficie, setSuperficie] = useState('');
    const [disponibilite, setDisponibilite] = useState(false);

    const handleAddStand = async () => {
        try {
            await axios.post(`http://localhost:3000/stand/create`, {
                Numero,
                prix,
                superficie,
                disponibilite
            });
            console.log("Stand added successfully");
            history('/bands'); 
        } catch (error) {
            setError(error.message);
            console.error("Error adding stand:", error);
        }
    };

    return (
        <div className="stand-details-container">
            <h2>Ajouter un Nouveau Stand</h2>
            {error && (
                <div className="error-message">Erreur : {error}</div>
            )}
            <form>
                <div className="stand-details">
                    <div className="stand-info">
                        <label>Numero:</label>
                        <input
                            type="text"
                            value={Numero}
                            onChange={(e) => setNumero(e.target.value)}
                        />
                    </div>
                    <div className="stand-info">
                        <label>Prix:</label>
                        <input
                            type="text"
                            value={prix}
                            onChange={(e) => setPrix(e.target.value)}
                        />
                    </div>
                    <div className="stand-info">
                        <label>Superficie:</label>
                        <input
                            type="text"
                            value={superficie}
                            onChange={(e) => setSuperficie(e.target.value)}
                        />
                    </div>
                    <div className="stand-info">
                        <label>Disponibilité:</label>
                        <input
                            type="checkbox"
                            checked={disponibilite}
                            onChange={(e) => setDisponibilite(e.target.checked)}
                        />
                    </div>
                    <button type="button" onClick={handleAddStand}>Ajouter Stand</button>
                </div>
            </form>
        </div>
    );
}

export default StandDetails;
