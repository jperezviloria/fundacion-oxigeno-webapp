import React from 'react';
import {Link} from "react-router-dom"
import DrawerToggleButton from '../SideDrawer/DrawerToggleBotton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><a href="/"><img src="https://res.cloudinary.com/protobot/image/upload/v1622662918/qjlfhjzrinyyb6nlx74p.png" alt="" /></a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/donar">DONA</Link></li>
          <li><Link to="/equipo">EQUIPO</Link></li>
          <li><Link to="/eventos">EVENTOS</Link></li>
          <li><Link to="/admin/secure/dashboard">ADMINISTRADOR</Link></li>
          <li><Link to="/logout">LOGOUT</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;