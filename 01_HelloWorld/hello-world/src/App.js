import logo from "./logo.svg";
import { Greet } from "./components/Greet";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ClassClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import "./App.css";
function App() {
  return (
    <div className="App">
      <UserGreeting />
    </div>
  );
}

export default App;
