import React from 'react';
import { Visibility } from '@material-ui/icons'; 
import "./witSm.css";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Nouvelles demandes de réservations</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Eya</span>
            <span className="widgetSmUserTitle">test</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            consulter
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
