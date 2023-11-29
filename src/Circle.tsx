import styled from "styled-components";

interface ContainerProps {
  bgColor:string;
}
const Container = styled.div<ContainerProps>`
  background-color: ${(props)=>props.bgColor};
  width: 200px;
  height: 200px;
`;

interface CircleProps {
  bgColor:string;
}

export default function Circle({bgColor}: CircleProps){
  return <Container bgColor={bgColor}></Container>
}

interface PlayerShape {
  name:string;
  age:number;
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you ar ${playerObj.age} years old.`;

sayHello({name:"kim sungkuk",age:12});