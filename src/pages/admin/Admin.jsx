import React , {useContext} from 'react';
import { Route, Routes , Navigate } from 'react-router-dom';
import Home from './pagesAdmin/home/Home';
import Utilisateur from './pagesAdmin/Utilisateurs/Utilisateur';
import Bands from './pagesAdmin/stand/Stands';
import StandDetails from './pagesAdmin/standDetails/StandDetails';
import CreationBrand from './pagesAdmin/creationStand/CreationStand';
import Event from './pagesAdmin/evenement/Event';
import EventDetails from './pagesAdmin/evenementDetails/EventDetails';
import AjouterEvent from './pagesAdmin/ajouterEvent/AjouterEvent';
import Layout from './components/layout/Layout';


function Admin() {

  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/utilisateur" element={<Layout><Utilisateur /></Layout>} />
      <Route path="/bands" element={<Layout><Bands /></Layout>} />
      <Route path="/bandsDetail/:id" element={<Layout><StandDetails /></Layout>} />
      <Route path="/creation-brand" element={<Layout><CreationBrand /></Layout>} />
      <Route path="/event" element={<Layout><Event /></Layout>} />
      <Route path="/eventDetails/:id" element={<Layout><EventDetails /></Layout>} />
      <Route path="/ajouterEvent" element={<Layout><AjouterEvent /></Layout>} />
    </Routes>
  );
}

export default Admin;
