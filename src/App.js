import React from 'react';

import Settings from './components/settings/Settings';
import Menu from './components/menu/Menu';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Settings />
    </div>
  );
}

export default App;
