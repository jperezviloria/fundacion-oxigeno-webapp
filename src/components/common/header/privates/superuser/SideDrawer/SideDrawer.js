
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
        <li><Link to="/" onClick={props.click}>INICIO</Link></li>
        <li><Link to="/donar" onClick={props.click}>DONA</Link></li>
        <li><Link to="/equipo" onClick={props.click}>EQUIPO</Link></li>
        <li><Link to="/admin/secure/dashboard" onClick={props.click}>DASHBOARD</Link></li>
        <li><Link to="/admin/secure/factory" onClick={props.click}>USUARIOS</Link></li>
        <li><Link to="/logout" onClick={props.click}>LOGOUT</Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;