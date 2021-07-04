import React, { Component } from "react";
import PropTypes from "prop-types";
import LifecycleB from "./LifecycleB";
export default class LifecycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "snowdence",
    };
    console.log("Lifecycle A constructor()");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecyleA getDerivedStateFromProps()");
    return null;
  }
  componentDidMount() {
    console.log("LifecyleA componentDidMount()");
  }
  render() {
    console.log("Lifecycle A render()");
    return (
      <div>
        LifecybleA
        <LifecycleB />
      </div>
    );
  }
}
