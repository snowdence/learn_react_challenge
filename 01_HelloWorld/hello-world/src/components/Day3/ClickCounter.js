import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { count, increaseCount } = this.props;

    return (
      <div>
        <button onClick={increaseCount}>Click {count} timed</button>
      </div>
    );
  }
}

export default withCounter(ClickCounter);
