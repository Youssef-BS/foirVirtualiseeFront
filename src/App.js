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
        {currentUser ? (
          <>
            {currentUser.role === 'admin' && <Route path="/*" element={<Admin />} />}
            {currentUser.role === 'user' && <Route path="/*" element={<Client />} />}
          </>
        ) : (
          <Route path="/" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
