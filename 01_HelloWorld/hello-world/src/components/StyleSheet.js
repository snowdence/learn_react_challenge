import React from "react";
import PropTypes from "prop-types";
import "./myStyles.css";
function StyleSheet(props) {
  let classNameStyleSheet = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className="error">Error StyleSheet</h1>
      <h1 className={`${classNameStyleSheet} font-xl`}> StyleSheet</h1>
    </div>
  );
}

StyleSheet.propTypes = {};

export default StyleSheet;
