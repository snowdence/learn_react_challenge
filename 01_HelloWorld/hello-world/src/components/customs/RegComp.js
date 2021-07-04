import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RegComp extends Component {
  render() {
    console.log("regular component ");
    return <div>Regular Component {this.props.name}</div>;
  }
}
