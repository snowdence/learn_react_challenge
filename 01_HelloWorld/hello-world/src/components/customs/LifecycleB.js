import React, { Component } from "react";
import PropTypes from "prop-types";

export default class LifecycleB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "snowdence",
    };
    console.log("LifecycleB constructor()");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecyleB getDerivedStateFromProps()");
    return null;
  }
  componentDidMount() {
    console.log("LifecyleB componentDidMount()");
  }
  render() {
    console.log("LifecycleB render()");
    return <div>LifeCycleB</div>;
  }
}
