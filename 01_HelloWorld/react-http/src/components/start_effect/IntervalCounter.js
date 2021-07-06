import React, { useEffect, useState } from "react";

function IntervalCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount((prevCount) => setCount(prevCount + 1));
  };

  useEffect(() => {
    const inteval = setInterval(tick, 1000);

    return () => {
      clearInterval(inteval);
    };
  }, []);
  return <div>Count : {count}</div>;
}

export default IntervalCounter;
