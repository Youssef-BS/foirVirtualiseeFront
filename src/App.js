import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import Client from './pages/client/Client';
import Auth from './pages/auth/Auth';
import { AuthContext } from './context/authContext';

const App = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path="/* " element={currentUser ? <AuthenticatedRoutes currentUser={currentUser} /> : <Auth />} />
      </Routes>
    </Router>
  );
};

const AuthenticatedRoutes = ({ currentUser }) => {
  return (
    <Route path="/*" element={currentUser.role === 'admin' ? <Admin /> : <Client />} />
  );
};

export default App;
