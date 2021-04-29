import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiSettings3Line, RiShutDownLine } from 'react-icons/ri'

import './header.scss';


const Header = ( props ) => {
  
  let propsTitle = props.propsTitle;
  const [ title, setTitle ] = useState( "Water My Plants" );

  useEffect( () => {
    setTitle( propsTitle );
    return title;
  }, [props.propsTitle] );

  const onClickHandler = () => {
    localStorage.clear();
    window.location.replace( "/login" );
  };

  if ( title === "LOGIN" || title === "CREATE ACCOUNT" || window.screen.availWidth < 670) {
    return (
      <div className="header">
        <h1 className="headerLogo">{`${title}`}</h1>
      </div>
    )
  } else {
    return (
      <div className="header">
        <h1 className="headerLogo">{`${title}`}</h1>
        <Link to="/settings">
          <RiSettings3Line className="set-icon" />
        </Link>
        <span className="set">Settings</span>
        <RiShutDownLine className="log-icon" onClick={() => onClickHandler()} />
        <span className="log" >Logout</span>
      </div>
    )
  }
}

export default Header;