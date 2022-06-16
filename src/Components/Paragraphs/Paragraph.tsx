import React from "react";
import styled from "styled-components";

interface Props{
    positionStart:number
    positionEnd:number
}

export const Paragraph = styled.p<Props>`
  color: black;
  grid-column-start: 1;
  grid-column-end: 5;
  align-self: center;
  justify-self: center;
  grid-row-start: ${(props)=> props.positionStart};
  grid-row-end: ${(props)=> props.positionEnd};
`

