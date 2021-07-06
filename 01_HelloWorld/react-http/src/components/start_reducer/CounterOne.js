import React, { useReducer } from "react";

const initialState = 0;

const reducerCount = (currentState, action) => {
  switch (action) {
    case "increment":
      return currentState + 1;
    case "decrement":
      return currentState - 1;
    case "reset":
      return initialState;
    default:
      return currentState;
  }
};

function CounterOne() {
  const [count, dispatchCount] = useReducer(reducerCount, initialState);
  return (
    <div>
      <div>Count : {count}</div>
      <button onClick={() => dispatchCount("increment")}>Increment</button>
      <button onClick={() => dispatchCount("decrement")}>Decrement</button>
      <button onClick={() => dispatchCount("reset")}>Reset</button>
    </div>
  );
}

export default CounterOne;
