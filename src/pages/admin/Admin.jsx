import React from 'react';
import SideBar from './components/sideBar/SideBar';
import Home from './pagesAdmin/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Utilisateur from './pagesAdmin/Utilisateurs/Utilisateur';
import Bands from './pagesAdmin/stand/Stands';
import StandDetails from './pagesAdmin/standDetails/StandDetails';


const Layout = ({ children }) => {
  return (
      <>
          <SideBar /> 
          {children}
         
      </>
  );
};

function Admin() {
  return (
    
      <Router>
        <Routes>
        <Route
                  path="/"
                  element={<Layout><Home /></Layout>}
                />
        <Route
                  path="/utilisateur"
                  element={<Layout><Utilisateur /></Layout>}
                />
        <Route
                  path="/bands"
                  element={<Layout><Bands /></Layout>}
                />
        <Route
                  path="/bandsDetail/:id"
                  element={<Layout><StandDetails /></Layout>}
                />
        </Routes>
      </Router>
     
    
  );
}

export default Admin;
