import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import Parent from "components/start_callback/Parent";
import FocusInput from "components/start_ref/FocusInput";

function App() {
  return (
    <div className="App">
      <h1> App </h1>
      <FocusInput />
    </div>
  );
}

export default App;
