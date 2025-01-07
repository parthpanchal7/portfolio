import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Parth Panchal, Front End Developer
        </p>
        <a
          className="App-link"
          href="http://parth.epizy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Me
        </a>
      </header>
    </div>
  );
}

export default App;