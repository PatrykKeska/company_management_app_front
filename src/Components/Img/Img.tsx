import React from "react";
import styled from "styled-components";

interface Props {
    src?: string
    width: string;
    height: string;
}


const StyledImg = styled.img<Props>`

  width: ${({width}) => width};
  height: ${({height}) => height};
  border-radius: 80px;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
  align-self: center;
  justify-self: center;
  margin: 10px 0;

  @media (min-width: 800px) {
    width: 200px;
    height: 150px;
  }
`


export const Img = (props: Props) => {
    return (
        <>
            <StyledImg height={props.height} width={props.width} src={props.src}/>
        </>
    )
}
