import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import './menu.css';

const Menu = () => {

  const onClickHandler = () => {
    axios.post( `https://tt157-backend.herokuapp.com/api/auth/login`, {
      username: 'lksdfjsdlfkdfxa',
      password: 'sldfk24432Kaa'
    } ).then( res => {
      console.log( res );
      localStorage.setItem( "jwtToken", res.data.token );
      let jwtToken = localStorage.getItem( "jwtToken" );
      const parseJwt = (token) => {
        if (!token) {
          return;
        }
        const base64Url = token.split('.')[1];
        const base64 = base64Url
          .replace('-', '+')
          .replace('_', '/');
        return JSON.parse(window.atob(base64));
      };
      const userId = parseJwt(jwtToken).subject;
      localStorage.setItem('userId', userId);
    })
    // localStorage.clear();
    // window.location.replace( "/login" );
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
            <Link to="/create-plant" >
              <li>Create Plant</li>
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