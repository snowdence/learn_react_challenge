import React from "react";
import PropTypes from "prop-types";

const heading = {
  fontSize: "72px",
  color: "blue",
};
function Inline(props) {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
    </div>
  );
}

Inline.propTypes = {};

export default Inline;
