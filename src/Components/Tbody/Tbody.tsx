import styled from "styled-components";


export const StyledTbody = styled.tbody`
  transition: .2s linear all;
  position: relative;
  z-index: 1;
  font-weight: bold;
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(250,249,105,0.9976365546218487) 0%, rgba(211,241,0,1) 24%, rgba(254,177,88,1) 66%, rgba(252,250,40,1) 89%);
  
  &:nth-of-type(even) {
    background-color: rgb(246, 230, 96);
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.37);
    top: 0;
    left: 0;
    position: absolute;
    transform: translateX(-101%);
    transition: .2s linear all;
    z-index: -1;
    opacity: 0;
  }


  &:hover:after {
    transform: translateX(0);
    opacity: 1;
  }

  &:hover {
    color: white;
  }

`
