import React, { useEffect, useState } from "react";

function CounterOne() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  useEffect(() => {
    console.log("Update document title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <div>{title}</div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>Increase {count}</button>
    </div>
  );
}

export default CounterOne;
