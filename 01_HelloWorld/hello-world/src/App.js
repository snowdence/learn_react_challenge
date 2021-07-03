import logo from "./logo.svg";
import "./App.css";
import { Greet, GreetFunction } from "./components/Greet";
import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greet />
        <GreetFunction />
        <Welcome />
        <p>
          Edit <b>snowdence</b> <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
