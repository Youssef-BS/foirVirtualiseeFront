import React from 'react';

import SideBar from './components/sideBar/SideBar';
import Home from './pagesAdmin/home/Home';

function Admin() {
  return (
    <div className="admin">
      <SideBar /> 
      <Home />
    </div>
  );
}

export default Admin;
