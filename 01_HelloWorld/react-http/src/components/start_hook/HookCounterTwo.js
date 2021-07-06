import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const increaseFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => {
        return prevCount + 1;
      });
    }
  };
  return (
    <div>
      Count : {count}
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <div>
        <button onClick={() => increaseFive()}>Increment Five</button>
      </div>
      <div>
        <button onClick={() => setCount(initialCount)}>Reset</button>
      </div>
    </div>
  );
}

export default HookCounterTwo;
