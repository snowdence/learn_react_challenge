import React from "react";

function Greet(props) {
  console.log(props);
  return (
    <div>
      <h1> Hello, {props.name}</h1>
      {props.children}
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
