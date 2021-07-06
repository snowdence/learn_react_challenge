import React from "react";

const withCounter = (WarapComponent, incNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }
    increaseCount = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + incNumber,
        };
      });
    };
    render() {
      return (
        <WarapComponent
          count={this.state.count}
          increaseCount={this.increaseCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
