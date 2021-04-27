
import './App.css';
import Signup from './components/signup/Signup'
import Login from './components/login/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Signup/>
        <Login/>
      </header>
    </div>
  );
}

export default App;
