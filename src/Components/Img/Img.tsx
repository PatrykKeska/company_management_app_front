import React from "react";
import styled from "styled-components";

interface Props {
src?: HTMLImageElement | any
}


const StyledImg = styled.img<Props>`
  min-width: 100px;
  min-height: 100px;
  width: 25vw;
  height: 25vw;
  max-width: 200px;
  max-height: 200px;
  border-radius: 80px;
`


export const Img = (props:Props) => {
    return (
        <>
        <StyledImg  src={props.src}/>
        </>
    )
}
