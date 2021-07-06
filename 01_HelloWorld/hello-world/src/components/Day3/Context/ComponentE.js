import React, { Component } from "react";
import ComponentF from "./ComponentF";
import UserContext from "./useContext";
class ComponentE extends Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        Component Econtext {this.context}
        <ComponentF />
      </div>
    );
  }
}
//ComponentE.contextType = UserContext;

export default ComponentE;
