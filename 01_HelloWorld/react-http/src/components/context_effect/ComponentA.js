import React, { useContext, useReducer } from "react";
import { CountContext } from "../../App";
function ComponentA() {
  const { countState, countDispatch } = useContext(CountContext);
  return (
    <div>
      {countState}
      <button onClick={() => countDispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => countDispatch({ type: "decrement", value: -1 })}>
        Decrement
      </button>
    </div>
  );
}

export default ComponentA;
