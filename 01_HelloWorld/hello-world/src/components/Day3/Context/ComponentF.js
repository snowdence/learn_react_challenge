import React, { Component } from "react";
import PropTypes from "prop-types";
import { UserConsumer } from "./useContext";

export default class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(username) => {
          return <div>Hello {username}</div>;
        }}
      </UserConsumer>
    );
  }
}
