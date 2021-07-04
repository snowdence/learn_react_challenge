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

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

export class Animation extends Component {
  render() {
    return (
      <div>
        <Rotate>&lt; 💅 &gt;</Rotate>
      </div>
    );
  }
}
export function StyledButton(props) {
  return <Button {...props}>Button</Button>;
}
