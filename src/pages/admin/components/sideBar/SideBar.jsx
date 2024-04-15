import React from 'react';
import { Home, Assessment, Person, Event, ExitToApp , Store , History } from '@material-ui/icons';

import './sideBar.css';

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tableau de bord</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Home className="sidebarIcon" />
              <a href="/dashboard">Accueil</a>
            </li>
            <li className="sidebarListItem">
              <Assessment className="sidebarIcon" />
              <a href="/analystic">Analytique</a>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menu Rapide</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              <a href="/users">Les utilisateurs</a>
            </li>
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              <a href="/programs">Les réservations</a>
            </li>
            <li className="sidebarListItem">
              <History className="sidebarIcon" />
              <a href="/products">Les historiques</a>
            </li>
            <li className="sidebarListItem">
              <Event className="sidebarIcon" />
              <a href="/products">Les événements</a>
            </li>
          </ul>
          <ul className="sidebarList">
            <a href="/logout">
              <li className="sidebarListItem">
                <ExitToApp className="sidebarIcon" />
                Déconnexion
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBar;