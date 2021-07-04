import styled from "styled-components";

import React, { Component } from "react";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;
const Wrapper = styled.section`
  padding: 3em;
  background: papayawhip;
`;

export default class StyledComponent extends Component {
  render() {
    return (
      <div>
        <Title>Styled Component Lib</Title>
        <Wrapper>
          <p> Nothing change</p>
        </Wrapper>
      </div>
    );
  }
}
