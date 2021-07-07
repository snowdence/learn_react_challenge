import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import Parent from "components/start_callback/Parent";
import FocusInput from "components/start_ref/FocusInput";
import HookTimer from "components/start_ref/HookTimer";
import DocTitleOne from "./components/custom-hook/DocTitleOne";
import DocTitleTwo from "./components/custom-hook/DocTitleTwo";
function App() {
  return (
    <div className="App">
      <h1> App </h1>
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  );
}

export default App;
