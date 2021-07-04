import logo from "./logo.svg";
import { Greet } from "./components/Greet";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ClassClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import "./App.css";
import StyledComponent from "./components/customs/StyledComponent";
import { Animation, StyledButton } from "./components/customs/Animation";
import Form from "./components/customs/Form";
function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
