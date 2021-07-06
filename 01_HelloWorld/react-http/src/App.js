import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HookCounter from "components/HookCounter";
import HookCounterTwo from "components/HookCounterTwo";
import HookCounterThree from "components/HookCounterThree";

function App() {
  return (
    <div className="App">
      <HookCounterThree />
    </div>
  );
}

export default App;
