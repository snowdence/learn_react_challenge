import logo from "./logo.svg";
import "./App.css";
import React, { useReducer } from "react";
import ComponentA from "components/context_effect/ComponentA";
import ComponentB from "components/context_effect/ComponentB";
import ComponentC from "components/context_effect/ComponentC";
import ComponentD from "components/context_effect/ComponentD";

const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
export const CountContext = React.createContext("count_context");
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h1> global {count} </h1>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  );
}

export default App;
