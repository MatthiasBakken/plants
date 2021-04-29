import React from "react";
import { Switch, Route } from "react-router-dom";

import Settings from "./components/settings/Settings";
import Header from "./components/header/Header"
import Menu from "./components/menu/Menu";
import Plants from "./components/plants/Plants";
import Plant from "./components/plant/Plant";
import CreateNewPlant from "./components/create-new-plants/CreateNewPlant";
import EditPlant from "./components/edit-plant/EditPlant";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import User from "./components/user/User";

import "./main.scss";

function App() {
  return (
      <div className="App">
        <Header />
        <Menu />
        <Switch>
          <Route exact path="/">
            <User />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/plants">
            <Plants />
          </Route>
          <Route exact path="/plant:id">
            <Plant />
          </Route>
          <Route exact path="/create-plant">
            <CreateNewPlant />
          </Route>
          <Route exact path="/edit-plant:obj">
            <EditPlant />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
  );
}

export default App;
