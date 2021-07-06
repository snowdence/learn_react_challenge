import React, { Component } from "react";

export default class HoverCounterTwo extends Component {
  render() {
    const { count, increaseCount } = this.props;
    return (
      <div>
        <h2 onMouseOver={increaseCount}>Clicked {count} times</h2>
      </div>
    );
  }
}
