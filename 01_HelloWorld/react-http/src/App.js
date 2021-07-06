import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HookCounter from "components/HookCounter";
import HookCounterTwo from "components/HookCounterTwo";

function App() {
  return (
    <div className="App">
      <HookCounterTwo />
    </div>
  );
}

export default App;
