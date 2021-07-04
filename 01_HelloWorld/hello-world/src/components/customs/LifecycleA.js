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

  shouldComponentUpdate() {
    console.log("LifecycleA shouldComponentUpdate()");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate()");
    return true;
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate()");
  }

  changeState = () => {
    this.setState({
      name: "Duc",
    });
  };
  render() {
    console.log("Lifecycle A render()");
    return (
      <div>
        LifecybleA
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB />
      </div>
    );
  }
}
