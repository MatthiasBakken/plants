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
        <Route exact path="/" render={props =>
          {return !jwtToken ?
          <Login pageTitle={pageTitleHandler} {...props} /> : <Redirect to="/home" />
          }
        }
        />
        <Route exact path="/signup">
          <Signup pageTitle={pageTitleHandler} />
        </Route>
        <Route exact path="/home" render={props => {
          return jwtToken ?
            <User pageTitle={pageTitleHandler} {...props} /> : <Redirect to="/" />;
        }
        } />
        <Route exact path="/plants" render={props => {
          return jwtToken ?
            <Plants pageTitle={pageTitleHandler} {...props} /> : <Redirect to="/" />;
        }
        }/>
        <Route exact path="/plant-page/:id?" render={props => {
          return jwtToken ?
            <PlantPage pageTitle={pageTitleHandler} {...props} /> : <Redirect to="/" />;
        }
        }/>
        <Route exact path="/create-plant" render={ props => 
          {return jwtToken ?
          <CreateNewPlant pageTitle={pageTitleHandler} {...props} /> : <Redirect to="/" />
          }
        } />
        <Route exact path="/edit-plant/:id" render={ props =>
          { return jwtToken ?
            <EditPlant pageTitle={pageTitleHandler} {...props} /> : <Redirect to="/" />
          }
        } />
        <Route exact path="/settings" render={props => {
          return jwtToken ?
            <Settings pageTitle={pageTitleHandler} {...props} /> : <Redirect to="/" />;
        }
        } />
      </Switch>
    </div>
  );
};

export default App;
