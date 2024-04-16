import React from 'react';
import "./utilisateur.css";

function Utilisateur() {
  const data = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      username: 'john_doe',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user',
      username: 'jane_smith',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'user',
      username: 'jane_smith',
    },
  ];

  const handleConsulter = (username) => {
    console.log(`Consulting user: ${username}`);
    // Add logic to handle consultation
  };

  const handleSupprimer = (username) => {
    console.log(`Deleting user: ${username}`);
    // Add logic to handle deletion
  };

  return (
    <>
    <h1>Les utilisateurs</h1>
    <div className="utilisateur-container">
      {data.map((user, index) => (
        <div key={index} className="utilisateur-card">
          <div className="utilisateur-field">
            <span className="field-name">Name: </span>
            <span className="field-value">{user.name}</span>
          </div>
          <div className="utilisateur-field">
            <span className="field-name">Email: </span>
            <span className="field-value">{user.email}</span>
          </div>
          <div className="utilisateur-field">
            <span className="field-name">Role: </span>
            <span className="field-value">{user.role}</span>
          </div>
          <div className="utilisateur-field">
            <span className="field-name">Username: </span>
            <span className="field-value">{user.username}</span>
          </div>
          <div className="button-container">
            <button onClick={() => handleConsulter(user.username)}>Consulter</button>
            <button onClick={() => handleSupprimer(user.username)}>Supprimer</button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Utilisateur;
