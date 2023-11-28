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
`;



function App() {
  return <Wrapper as="header">
    <Box/>
  </Wrapper>
}

export default App;
