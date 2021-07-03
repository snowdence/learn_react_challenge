import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thank for subscribing",
    });
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}
export default Message;
