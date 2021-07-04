import React, { Component } from "react";

export default class PureComp extends React.PureComponent {
  render() {
    console.log("pure");
    return <div>Pure Component {this.props.name}</div>;
  }
}
