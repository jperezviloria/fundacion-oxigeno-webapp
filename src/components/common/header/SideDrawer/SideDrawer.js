
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
          <li><a href="http://www.lineaesperanza.wordpress.com" target="_blank" rel="noopener noreferrer">BLOG</a></li>
          <li><Link to="/eventos">EVENTOS</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;