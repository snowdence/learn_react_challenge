import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
export default class ParentComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "snwodence",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "snowdence",
      });
    }, 2000);
  }
  render() {
    console.log("Parent");
    return (
      <div>
        Parent
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}