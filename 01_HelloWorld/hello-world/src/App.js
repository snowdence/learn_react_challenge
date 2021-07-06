import logo from "./logo.svg";
import { Greet } from "./components/Greet";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
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
import Fragment from "./components/customs/Fragment";
import LifecycleA from "./components/customs/LifecycleA";
import ParentComp from "./components/customs/ParentComp";
import RefsDemo from "./components/customs/RefsDemo";
import FocusInput from "./components/customs/FocusInput";
import FRParentInput from "./components/customs/FRParentInput";
import PortalDemo from "./components/customs/PortalDemo";

import React from "react";

import ClickCounter from "components/Day3/ClickCounter";
import HoverCounter from "components/Day3/HoverCounter";
import ClickCounterTwo from "components/Day3/ClickCounterTwo";
import User from "components/Day3/User";
import Counter from "./components/Day3/Counter";
import HoverCounterTwo from "components/Day3/HoverCounterTwo";
import ComponentC from "components/Day3/Context/ComponentC";
import { UserProvider } from "components/Day3/Context/useContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="snowdence">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
