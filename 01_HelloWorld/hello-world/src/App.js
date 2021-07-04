import logo from "./logo.svg";
import { Greet } from "./components/Greet";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ClassClick from "./components/FunctionClick";
import "./App.css";
function App() {
  return (
    <div className="App">
      <ClassClick />
    </div>
  );
}

export default App;
