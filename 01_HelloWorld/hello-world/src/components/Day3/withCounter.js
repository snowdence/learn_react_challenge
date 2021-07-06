import React from "react";

const withCounter = (WarapComponent) => {
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
          count: prevState.count + 1,
        };
      });
    };
    render() {
      return (
        <WarapComponent
          count={this.state.count}
          increaseCount={this.increaseCount}
        />
      );
    }
  }
  return NewComponent;
};

export default withCounter;
