import React from 'react'
import { Link } from 'react-router-dom';
import { browserHistory as history } from 'react-router';

import './menu.css';


const Menu = () => {

  const onClickHandler = () => {
    localStorage.clear();
    history.push( '/' );
    window.location.reload();
  };

  return (
    <div className="menu-container">
      <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"></div>
        <div className="spinner horizontal"></div>
        <div className="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul className="sidebarMenuInner">
          <li className="menu-title">Plants <span>Menu Options</span></li>
          <Link to="/home">
            <li className="menu-home">Home</li>
          </Link>
          <Link to="/plants">
            <li className="menu-plants">Plants</li>
          </Link>
          <Link to="/create-plant">
            <li className="menu-create">Create Plant</li>
          </Link>
          <Link to="/settings">
            <li className="menu-settings">Settings</li>
          </Link>
          <li onClick={() => onClickHandler()} className="menu-logout" >Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;