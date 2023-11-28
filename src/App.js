import styled from "styled-components";


const Father = styled.div`
display:  flex;
`;

const Btn =styled.button`
  color:white;
  background-color: tomato;
  border-radius: 15px;
  border: 0;
`;



function App() {
  return <Father as="header">
    <Btn>Log in</Btn>
    <Btn as="a" href="/">Log in</Btn>
  </Father>
}

export default App;