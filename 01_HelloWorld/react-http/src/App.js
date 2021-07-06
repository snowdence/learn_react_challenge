import logo from "./logo.svg";
import "./App.css";
import React from "react";
import HookCounter from "components/HookCounter";
import HookCounterTwo from "components/HookCounterTwo";
import HookCounterThree from "components/HookCounterThree";
import HookCounterFour from "components/HookCounterFour";

function App() {
  return (
    <div className="App">
      <HookCounterFour />
    </div>
  );
}

export default App;
