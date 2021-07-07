import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import Parent from "components/start_callback/Parent";
import FocusInput from "components/start_ref/FocusInput";
import HookTimer from "components/start_ref/HookTimer";
import DocTitleOne from "./components/custom-hook/DocTitleOne";
import DocTitleTwo from "./components/custom-hook/DocTitleTwo";
import CountOne from "components/custom-hook/CountOne";
import CountTwo from "components/custom-hook/CountTwo";
function App() {
  return (
    <div className="App">
      <h1> App </h1>
      <CountOne />
      <CountTwo />
    </div>
  );
}

export default App;
