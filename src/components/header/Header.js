import React from "react";
import { Link } from "react-router-dom";
import { RiSettings3Line, RiShutDownLine } from 'react-icons/ri'
import './header.scss';

function Header() {

  const onClickHandler = () => {
    localStorage.clear();
    window.location.replace( "/login" );
  };

  return (
    <div className="header">
      <h1 className="headerLogo">WATER MY PLANTS</h1>
      <Link to="/settings">
      <RiSettings3Line className="set-icon"/>
      </Link>      
      <span className="set">Settings</span>


      <RiShutDownLine className="log-icon" onClick={() => onClickHandler()}/>
      <span className="log" >Logout</span>
    </div>
  );
}

export default Header;
