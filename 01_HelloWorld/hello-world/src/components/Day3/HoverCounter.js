import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, increaseCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={increaseCount}>Hover {count} timed</h2>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
