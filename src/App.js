import styled,{keyframes} from "styled-components";


const Wrapper = styled.div`
display:  flex;
`;

const rotateAnimation = keyframes`
  0%{
    transform:  rotate(0deg);
    border-radius: 0px;
  }
  50%{
    transform:  rotate(360deg);
    border-radius: 100px;
  }
  100%{
    transform:  rotate(0deg);
    border-radius: 0px;
  }
`;

const Emoji = styled.span`
  font-size:36px;
  &:hover{
    font-size:48px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
  animation:${rotateAnimation} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  ${Emoji}{
    font-size: 25px;
    &:hover{
      font-size: 98px;
    }
  }
  `;
function App() {
  return <Wrapper as="header">
    <Box>
      <Emoji>😁</Emoji>
    </Box>
    <Emoji>😁</Emoji>
  </Wrapper>
}

export default App;
