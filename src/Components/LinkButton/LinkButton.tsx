import React, {MouseEventHandler} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

interface Props {
    small?: string;
    positionStart? : number;
    positionEnd? : number;
    onClick? : MouseEventHandler;
}

export const LinkButton = styled(Link)<Props>`
background-color: black;
  color: white;
  text-decoration: 0;
  text-align: center;
  font-weight: bold;
  font-size: .8em;
  padding:${props => props.small === 'true' ? '10px 10px' : '20px 5px'};
  width: ${props => props.small === 'true'  ? '150px' : '250px'};
  border-radius: 30px;
  
  border:none;
  margin: 10px;
  transition: .2s ease-in all;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 6;
  align-self: center;
  justify-self: center;
  &:hover{
    transform: scale(1.1);
    color: black;
    background-color: white;
  }
  
  @media(min-width: 500px){
    grid-column-start: ${({positionStart})=> positionStart};
    grid-column-end: ${({positionEnd})=> positionEnd};
    justify-self: center;
  }
  
  @media(min-width: 800px){
    width: ${props => props.small === 'true'  ? '200px' : '250px'};
  }
`

