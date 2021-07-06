import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CounterOne from "components/start_effect/CounterOne";
import HookMouse from "components/start_effect/HookMouse";
import MouseContainter from "components/start_effect/MouseContainter";
function App() {
  return (
    <div className="App">
      <MouseContainter />
    </div>
  );
}

export default App;
