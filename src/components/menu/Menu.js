import React from 'react'
import { Link } from 'react-router-dom';

import './menu.css';


const Menu = () => {

  const onClickHandler = () => {
    console.log( 'clicked' );
    localStorage.clear();
    window.location.replace( "/login" );
  };

  return (
      <div className="menu-container">
      <div className="header"></div>
        <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
        <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
          <div className="spinner diagonal part-1"></div>
          <div className="spinner horizontal"></div>
          <div className="spinner diagonal part-2"></div>
        </label>
        <div id="sidebarMenu">
          <ul className="sidebarMenuInner">
            <li>Plants <span>Menu Options</span></li>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/plants" >
              <li>Plants</li>
            </Link>
            <Link to="/settings">
              <li>Settings</li>
            </Link>
            <li onClick={() => onClickHandler()} >Logout</li>
          </ul>
        </div>
      </div>
    )
}

export default Menu;