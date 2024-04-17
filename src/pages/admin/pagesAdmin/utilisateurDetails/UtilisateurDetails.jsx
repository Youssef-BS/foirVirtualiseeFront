import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./utilisateurDetails.css";


function UtilisateurDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(response.data);
        setUpdatedUser({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedUser({ ...updatedUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/users/${user._id}`, updatedUser);
      alert('User details updated successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="utilisateur-details">
      <h2>Utilisateur Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={updatedUser.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={updatedUser.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input type="text" id="role" name="role" value={updatedUser.role} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={updatedUser.username} onChange={handleChange} />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default UtilisateurDetails;
