import React, { Component } from "react";

export default class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    this.setState({
      message: "Good Bye",
    });
  }
  clickHandlerFuncArrow = () => {
    this.setState({
      message: "Good Bye",
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.message}</p>

        {/* <button onClick={this.clickHandler.bind(this)}>Event Bind</button> */}
        {/* <button onClick={() => this.clickHandler()}>Event Bind</button> */}
        <button onClick={this.clickHandlerFuncArrow}>Event Bind</button>
      </div>
    );
  }
}
