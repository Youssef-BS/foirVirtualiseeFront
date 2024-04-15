import React from 'react';
import "./widGet.css"; 

const WidgetLg = () => {
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Événements à venir</h3>
      <table className="widgetLgTable">
        <thead>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Événement</th> 
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Prix</th>
            <th className="widgetLgTh">Statut</th> 
          </tr>
        </thead>
        <tbody>
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Susan Carol</span>
            </td>
            <td className="widgetLgDate">2 Juin 2021</td> 
            <td className="widgetLgAmount">$122.00</td>
            <td className="widgetLgAmount">test</td>
            <td className="widgetLgStatus">
              
            </td>
          </tr>
       
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
