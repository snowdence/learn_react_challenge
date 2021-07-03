import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increaseCount() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("Callback");
      }
    );
  }
  increaseCountUsePrev() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  increaseFiveCount() {
    this.increaseCountUsePrev();
    this.increaseCountUsePrev();
    this.increaseCountUsePrev();
    this.increaseCountUsePrev();
    this.increaseCountUsePrev();
  }

  render() {
    return (
      <div>
        <div>Count : {this.state.count}</div>
        <div>
          <button onClick={() => this.increaseFiveCount()}>Increase</button>
        </div>
      </div>
    );
  }
}
