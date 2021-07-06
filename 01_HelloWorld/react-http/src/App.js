import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import Parent from "components/start_callback/Parent";
import Counter from "components/start_memo/Counter";

function App() {
  return (
    <div className="App">
      <h1> App </h1>
      <Counter />
    </div>
  );
}

export default App;
