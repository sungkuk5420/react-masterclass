import styled from "styled-components";
import {useState } from "react"
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${props=>props.theme.bgColor};
  `;
const H1 = styled.h1`
  color: ${props=>props.theme.textColor};
`;

function App() {

  return <div>
    <Container>
      <H1>Hello</H1>
    </Container>
  </div>
}

export default App;
