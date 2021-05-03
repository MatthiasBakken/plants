import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

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
          <Login pageTitle={pageTitleHandler} />
        </Route>
        <Route exact path="/signup">
          <Signup pageTitle={pageTitleHandler} />
        </Route>
        <Route exact path="/home">
          <User pageTitle={pageTitleHandler} />
        </Route>
        <Route exact path="/plants">
          <Plants pageTitle={pageTitleHandler} />
        </Route>
        <Route exact path="/plant-page/:id?">
          <PlantPage pageTitle={pageTitleHandler} />
        </Route>
        <Route exact path="/create-plant">
          <CreateNewPlant pageTitle={pageTitleHandler} />
        </Route>
        <Route exact path="/edit-plant/:id">
          <EditPlant pageTitle={pageTitleHandler} />
        </Route>
        <Route exact path="/settings">
          <Settings pageTitle={pageTitleHandler} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
