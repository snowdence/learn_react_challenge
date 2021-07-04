import React from "react";

function Greet({ name, age, children }) {
  console.log(name);
  console.log(age);
  return (
    <div>
      <h1> Hello, {name}</h1>
      <h1> Hello, {age}</h1>
      {children}
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
