import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import Client from './pages/client/Client';
import Auth from './pages/auth/Auth';
import { AuthContext } from './context/authContext';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {/* Render different components based on the user's role */}
        {currentUser ? (
          <>
            {/* Render the Admin component if the user is an admin */}
            {currentUser.role === 'admin' && <Route path="/*" element={<Admin />} />}
            {/* Render the Client component if the user is a client */}
            {currentUser.role === 'user' && <Route path="/*" element={<Client />} />}
          </>
        ) : (
          // Render the Auth component if no user is logged in
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
