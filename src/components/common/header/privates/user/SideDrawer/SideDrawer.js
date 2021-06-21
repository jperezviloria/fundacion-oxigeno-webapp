
import React from 'react';
import {Link} from "react-router-dom"

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/donar">DONA</Link></li>
          <li><Link to="/equipo">EQUIPO</Link></li>
          <li><Link to="/eventos">EVENTOS</Link></li>
          <li><Link to="/admin/secure/dashboard">ADMINISTRADOR</Link></li>
          <li><Link to="/logout">LOGOUT</Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;