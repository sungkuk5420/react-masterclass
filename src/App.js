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
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: tomato;
  animation:${rotateAnimation} 1s linear infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  span{
    font-size: 25px;
    &:hover{
      font-size: 35px;
    }
  }
  `;
const SpanTag = styled.span`
  font-size:18px;
`;



function App() {
  return <Wrapper as="header">
    <Box>
      <span>😁</span>
      <SpanTag>abc</SpanTag>
    </Box>
  </Wrapper>
}

export default App;
