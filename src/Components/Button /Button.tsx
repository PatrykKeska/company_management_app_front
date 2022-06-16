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
  margin: 20px;
  transition: .2s ease-in all;
  &:hover{
    transform: scale(.9);
    color: black;
    background-color: white;
  }
`

