import React, { useState, useEffect } from "react";
import useCounter from "./hooks/useCounter";

function CountOne() {
  const [count, increment, decrement, reset] = useCounter();

  return (
    <div>
      {count}
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}

export default CountOne;
