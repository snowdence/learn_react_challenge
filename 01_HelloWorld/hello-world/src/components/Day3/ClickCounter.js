import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounter extends Component {
  render() {
    const { count, increaseCount } = this.props;
    console.log(this.props.name);
    return (
      <div>
        <button onClick={increaseCount}>
          {this.props.name} Click {count} timed
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
