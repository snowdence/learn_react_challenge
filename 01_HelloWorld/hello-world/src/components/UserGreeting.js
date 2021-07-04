import React, { Component } from "react";
import PropTypes from "prop-types";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogined: false,
    };
  }
  render() {
    //can be use if else here
    return (
      <div>
        {this.state.isLogined ? (
          <div>Welcome snowdence</div>
        ) : (
          <div>Welcome Guest</div>
        )}
      </div>
    );
  }
}

export default UserGreeting;
