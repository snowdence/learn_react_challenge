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
function App() {
  return (
    <div className="App">
      <StyledComponent />

      <StyleSheet primary={false} />
      <Inline primary={false} />
      <h1 className={styles.success}> Success</h1>
      <h1 className="error"> Error</h1>
    </div>
  );
}

export default App;
