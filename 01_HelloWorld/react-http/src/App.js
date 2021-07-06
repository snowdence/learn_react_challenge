import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import Parent from "components/start_callback/Parent";

function App() {
  return (
    <div className="App">
      <h1> App </h1>
      <Parent />
    </div>
  );
}

export default App;
