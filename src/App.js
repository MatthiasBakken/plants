import React, { useEffect, useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { RiSettings3Line, RiShutDownLine } from 'react-icons/ri'

import Settings from "./components/settings/Settings";
// import Header from "./components/header/Header"
import Menu from "./components/menu/Menu";
import Plants from "./components/plants/Plants";
import Plant from "./components/plant/Plant";
import CreateNewPlant from "./components/create-new-plants/CreateNewPlant";
import EditPlant from "./components/edit-plant/EditPlant";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import User from "./components/user/User";

import "./main.scss";
import "./components/header/header.css";

function App () {

  const [ title, setTitle ] = useState( "Water My Plants" );
  
  const onClickHandler = () => {
    localStorage.clear();
    setTitle( "Login" );
    window.location.replace( "/login" );
  };

  const setTitleHandler = ( title ) => {
    setTitle( title );
    return title;
  }



  return (
    <div className="App">
      {
        title === "LOGIN" || title === "CREATE ACCOUNT" ?
          <div className="header">
            <h1 className="headerLogo">{`${title.toUpperCase()}`}</h1>
          </div>
          :
          <div className="header">
            <h1 className="headerLogo">{`${title.toUpperCase()}`}</h1>
            <Link to="/settings">
              <RiSettings3Line className="set-icon" />
            </Link>
            <span className="set">Settings</span>
            <RiShutDownLine className="log-icon" onClick={() => onClickHandler()} />
            <span className="log" >Logout</span>
          </div>
      }
      <Menu setTitle={setTitleHandler} />
      <Switch>
        <Route exact path="/">
          <User setTitle={setTitleHandler} />
        </Route>
        <Route exact path="/signup">
          <Signup setTitle={setTitleHandler} />
        </Route>
        <Route exact path="/plants">
          <Plants setTitle={setTitleHandler} />
        </Route>
        <Route exact path="/plant:id">
          <Plant setTitle={setTitleHandler} />
        </Route>
        <Route exact path="/create-plant">
          <CreateNewPlant setTitle={setTitleHandler} />
        </Route>
        <Route exact path="/edit-plant:obj">
          <EditPlant setTitle={setTitleHandler} />
        </Route>
        <Route exact path="/settings">
          <Settings setTitle={setTitleHandler} />
        </Route>
        <Route exact path="/login">
          <Login setTitle={setTitleHandler} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
