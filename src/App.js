import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Settings from './components/settings/Settings';
import Menu from './components/menu/Menu';
import Plants from './components/plants/Plants';
import Plant from './components/plant/Plant';
import CreateNewPlant from './components/create-new-plants/CreateNewPlant';
// import User from './components/user/User';
// import Login from './components/user/Login';

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Switch>
        {/* <Route exact path="/">
          <User />
        </Route> */}
        <Route exact path="/plants">
          <Plants />
        </Route>
        <Route exact path="/plant:id">
          <Plant />
        </Route>
        <Route exact path="/create-plant">
          <CreateNewPlant />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        {/* <Route exact path="/login">
          <Login />
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;