import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import Parent from "components/start_callback/Parent";
import FocusInput from "components/start_ref/FocusInput";
import HookTimer from "components/start_ref/HookTimer";

function App() {
  return (
    <div className="App">
      <h1> App </h1>
      <HookTimer />
    </div>
  );
}

export default App;
