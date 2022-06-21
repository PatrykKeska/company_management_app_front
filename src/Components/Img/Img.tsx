import React from "react";
import styled from "styled-components";

interface Props {
src?: string
}


const StyledImg = styled.img<Props>`
  min-width: 100px;
  min-height: 100px;
  width: 150px;
  height: 120px;
  max-width: 200px;
  max-height: 200px;
  border-radius: 80px;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
  align-self: center;
  justify-self: center;
  
  @media(min-width: 800px){
    width:200px;
    height: 150px;
  }
`


export const Img = (props:Props) => {
    return (
        <>
        <StyledImg  src={props.src}/>
        </>
    )
}
