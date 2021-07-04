import React from "react";
import PropTypes from "prop-types";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("child")}> Greet Parent</button>
    </div>
  );
}

ChildComponent.propTypes = {
  greetHandler: PropTypes.func,
};

export default ChildComponent;
