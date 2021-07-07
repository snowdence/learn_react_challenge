import { useState } from "react";

function useCounter(initialCount = 0) {
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return [count, increment, decrement, reset];
}

export default useCounter;
