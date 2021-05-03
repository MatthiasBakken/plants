import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Settings from "./components/settings/Settings";
import Header from "./components/header/Header"
import Menu from "./components/menu/Menu";
import Plants from "./components/plants/Plants";
import PlantPage from "./components/plant-page/PlantPage";
import CreateNewPlant from "./components/create-new-plants/CreateNewPlant";
import EditPlant from "./components/edit-plant/EditPlant";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import User from "./components/user/User";

import "./main.scss";
import "./components/header/header.css";


function App () {

  const [ title, setTitle ] = useState( "Water My Plants" );
  const jwtToken = localStorage.getItem( "jwtToken" );
  const pageTitleHandler = ( title ) => {
    setTitle( title );
    return title;
  }

  return (
    <div className="App">
      <Header pageTitle={pageTitleHandler} propsTitle={ title } />
      <Menu pageTitle={pageTitleHandler} />
      <Switch>
        <Route exact path="/">
          {!jwtToken ?
            <Login pageTitle={pageTitleHandler} /> : <Redirect to="/home" />
          }
        </Route>
        <Route exact path="/signup">
          <Signup pageTitle={pageTitleHandler} />
        </Route>
        <Route exact path="/home">
          {jwtToken ?
            <User pageTitle={pageTitleHandler} /> : <Redirect to="/" />
          }
        </Route>
        <Route exact path="/plants">
          {jwtToken ?
            <Plants pageTitle={pageTitleHandler} /> : <Redirect to="/" />
          }
        </Route>
        <Route exact path="/plant-page/:id?">
          {jwtToken ?
            <PlantPage pageTitle={pageTitleHandler} /> : <Redirect to="/" />
          }
        </Route>
        <Route exact path="/create-plant">
          {jwtToken ?
            <CreateNewPlant pageTitle={pageTitleHandler} /> : <Redirect to="/" />
          }
        </Route>
        <Route exact path="/edit-plant/:id">
          {jwtToken ?
            <EditPlant pageTitle={pageTitleHandler} /> : <Redirect to="/" />
          }
        </Route>
        <Route exact path="/settings">
          {jwtToken ?
            <Settings pageTitle={pageTitleHandler} /> : <Redirect to="/" />
          }
        </Route>
      </Switch>
    </div>
  );
};

export default App;
