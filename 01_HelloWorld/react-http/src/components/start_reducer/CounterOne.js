import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 0,
};

const reducerCount = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterOne() {
  const [counter, dispatchCount] = useReducer(reducerCount, initialState);
  return (
    <div>
      <div>Count : {counter.firstCounter}</div>
      <div>Count2 : {counter.secondCounter}</div>
      <div>
        <button onClick={() => dispatchCount({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatchCount({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatchCount({ type: "increment", value: 5 })}>
          Increment 5
        </button>
        <button onClick={() => dispatchCount({ type: "decrement", value: 5 })}>
          Decrement 5
        </button>
      </div>

      <div>
        <button onClick={() => dispatchCount({ type: "increment2", value: 1 })}>
          Increment2
        </button>
        <button onClick={() => dispatchCount({ type: "decrement2", value: 1 })}>
          Decrement2
        </button>
        <button onClick={() => dispatchCount({ type: "increment2", value: 5 })}>
          Increment2 5
        </button>
        <button onClick={() => dispatchCount({ type: "decrement2", value: 5 })}>
          Decrement2 5
        </button>
      </div>
      <button onClick={() => dispatchCount({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default CounterOne;
