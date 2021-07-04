import React, { Component } from "react";

export default class ClassClick extends Component {
  clickHandler() {
    console.log("Clicked the button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click </button>
      </div>
    );
  }
}
