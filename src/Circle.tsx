import styled from "styled-components";
import {useState} from "react";

interface ContainerProps {
  bgColor:string;
  borderColor:string;
}
const Container = styled.div<ContainerProps>`
  background-color: ${(props)=>props.bgColor};
  border: 1px solid ${(props)=>props.borderColor} ;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface CircleProps {
  bgColor:string;
  borderColor?:string;
  text?:string;
}

export default function Circle({bgColor, borderColor,text= "default text"}: CircleProps){
  const [value,setValue] = useState<number|string>(1);
  setValue("2");
  setValue(2);
  return <Container bgColor={bgColor} borderColor = {borderColor??bgColor}>
    {text}
  </Container>
}

interface PlayerShape {
  name:string;
  age:number;
}

const sayHello = (playerObj:PlayerShape) => `Hello ${playerObj.name} you ar ${playerObj.age} years old.`;

sayHello({name:"kim sungkuk",age:12});