import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import DataFetchingOne from "components/start_reducer/DataFetchingOne";

function App() {
  return (
    <div className="App">
      <h1> App </h1>
      <DataFetchingOne />
    </div>
  );
}

export default App;
