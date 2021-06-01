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
      <div className="toolbar__logo"><a href="/"><img src="https://fotos.subefotos.com/a04e21cd0e1096bd1b6a63d970d097abo.png" alt="" /></a></div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          {/* <li><a href="/">INICIO</a></li>
          <li><a href="/equipo">DONA</a></li>
          <li><a href="/nosotros">NUESTRO EQUIPO</a></li>
          <li><a href="http://www.lineaesperanza.wordpress.com" target="_blank" rel="noopener noreferrer">BLOG</a></li>
          <li><a href="/contacto">EVENTOS</a></li> */}
          <li><Link to="/">INICIO</Link></li>
          <li><Link to="/donar">DONA</Link></li>
          <li><Link to="/equipo">EQUIPO</Link></li>
          <li><a href="http://www.fundacionoxigeno.blogspot.com" target="_blank" rel="noopener noreferrer">BLOG</a></li>
          <li><Link to="/eventos">EVENTOS</Link></li>
          <li><Link to="/login">LOGIN</Link></li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;