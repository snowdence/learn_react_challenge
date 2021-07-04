import React, { Component } from "react";
import ChildComponent from "./ChildComponent";
export default class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
  }
  greetParent = (childName) => {
    console.log(`Hello ${this.state.parentName}, from child ${childName} `);
  };
  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}
