import React from "react";
import styled from "styled-components";

interface Props {
    small?: boolean
}

export const Button = styled.button<Props>`
background-color: black;
  color: white;
  font-weight: bold;
  padding:${props => props.small ? '10px 10px' : '20px 5px'};
  width: ${props => props.small ? '150px' : '250px'};
  border-radius: 30px;
  border:none;
  margin: 10px;
  transition: .2s ease-in all;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 5;
  align-self: center;
  justify-self: stretch;
  &:hover{
    transform: scale(.9);
    color: black;
    background-color: white;
  }
`

