import styled, { keyframes } from "styled-components";

import React, { Component } from "react";

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}

	to {
		transform: rotate(360deg);
	}
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

export default class Animation extends Component {
  render() {
    return (
      <div>
        <Rotate>&lt; 💅 &gt;</Rotate>
      </div>
    );
  }
}
