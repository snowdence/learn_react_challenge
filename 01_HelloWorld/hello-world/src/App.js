import logo from "./logo.svg";
import { Greet } from "./components/Greet";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Greet name="snowdence" age="11">
        {" Chao"}
      </Greet>
      <Welcome name="snowdence" age="11">
        {" Chao"}
      </Welcome>
    </div>
  );
}

export default App;
