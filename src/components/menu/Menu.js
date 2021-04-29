import React from 'react'
import { Link } from 'react-router-dom';

import './menu.css';

const Menu = ( props ) => {
  
  const { setTitle } = props;

  const onClickHandler = () => {
    localStorage.clear();
    setTitle( "LOGIN" );
    window.location.replace( "/login" );
  };

  const setHeaderTitle = ( title ) => {
    localStorage.setItem( "headerLogo", title );
    return title;
  }

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
          <li>Plants <span>Menu Options</span></li>
          <Link to="/" onClick={() => setHeaderTitle( "Home" )}>
            <li>Home</li>
          </Link>
          <Link to="/plants" onClick={() => setHeaderTitle( "Plants" )}>
            <li>Plants</li>
          </Link>
          <Link to="/create-plant" onClick={() => setHeaderTitle( "Create Plant" )}>
            <li>Create Plant</li>
          </Link>
          <Link to="/settings" onClick={() => setHeaderTitle( "Settings" )}>
            <li>Settings</li>
          </Link>
          <li onClick={() => onClickHandler()} >Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;