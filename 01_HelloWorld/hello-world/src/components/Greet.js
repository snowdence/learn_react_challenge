import React from "react";

function Greet() {
  return (
    <div>
      <h1> Hello, Snowdence</h1>
    </div>
  );
}

const GreetFunction = () => {
  return (
    <div>
      <h1> Hello 2, Snowdence</h1>
    </div>
  );
};

const Hello = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello")
  );
};
export { Greet, GreetFunction, Hello };
