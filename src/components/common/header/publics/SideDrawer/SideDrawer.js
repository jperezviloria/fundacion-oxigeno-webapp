
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
          <li ><a href="http://www.fundacionoxigeno.blogspot.com" target="_blank" rel="noopener noreferrer">BLOG</a></li>
          <li><Link to="/eventos" onClick={props.click}>EVENTOS</Link></li>
          <li><Link to="/login" onClick={props.click}>LOGIN</Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;