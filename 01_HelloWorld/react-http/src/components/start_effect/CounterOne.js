import React, { useEffect, useState } from "react";

function CounterOne() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase {count}</button>
    </div>
  );
}

export default CounterOne;
