import React, { Component } from "react";

export default class ClickCounterTwo extends Component {
  render() {
    const { count, increaseCount } = this.props;
    return (
      <div>
        <button onClick={increaseCount}>Clicked {count} times</button>
      </div>
    );
  }
}
