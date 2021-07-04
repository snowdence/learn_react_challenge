import React, { Component } from "react";

export class Welcome extends Component {
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Class Component here, {name}</h1>
      </div>
    );
  }
}

export default Welcome;
