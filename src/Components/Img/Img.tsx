import React from "react";
import styled from "styled-components";

interface Props {
src?: HTMLImageElement | any
}


const StyledImg = styled.img<Props>`
  min-width: 100px;
  min-height: 100px;
  width: 100px;
  height: 100px;
  max-width: 200px;
  max-height: 200px;
  border-radius: 80px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
`


export const Img = (props:Props) => {
    return (
        <>
        <StyledImg  src={props.src}/>
        </>
    )
}
