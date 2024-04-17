import React, { useContext } from 'react';
import './App.css';
import Admin from './pages/admin/Admin';
import Auth from './pages/auth/Auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './context/authContext';

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        {currentUser && currentUser.role === 'admin' ? (
          <Route path="/admin/*" element={<Admin />} />
        ) : (
          <Route path="/*" element={<Auth />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
