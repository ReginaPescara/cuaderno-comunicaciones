import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import Avisos from './componentes/Avisos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          Prueba para cardena
        </a>
      </header>
      <Avisos></Avisos>
    </div>
=======
import Home from './pages/home.jsx'

function App() {
  return (
    <Home/>
>>>>>>> 16885f4a4f18c65527c7d203e59466d1905dd090
  );
}

export default App;
