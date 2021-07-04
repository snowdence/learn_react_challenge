import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";
import MemoCmp from "./MemoCmp";
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
        <MemoCmp name={this.state.name} />
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
      </div>
    );
  }
}
