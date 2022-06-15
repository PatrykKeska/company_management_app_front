import React from "react";
import styled from "styled-components";
import pencil from '../../assets /img/pencil.webp';

interface Props {
    src:string
}

const StyledImg = styled.img`
    min-width: 100px;
  min-height: 100px;
  width: 25vw;
  height: 25vw;
  max-width: 200px;
  max-height: 200px;
  border-radius: 80px;
`




export const Img = (props:Props)=>{
    return(
        <StyledImg src={props.src}/>
    )
}
