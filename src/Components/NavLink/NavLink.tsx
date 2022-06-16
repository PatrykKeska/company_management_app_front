import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";


interface Props {
    path: string;
    children: string;
    icon: IconProp;


}

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  border-radius: 50px;
  transition: .2s ease-in all;
  margin: 5px;


  &:hover {
    color: white;
    background-color: black;
    
  }
  &:active{
    background-color: red;
    color: blue;
  }

`

export const NavLink = (props: Props) => {

    return (
        <>
        <StyledLink to={props.path}><FontAwesomeIcon icon={props.icon}/> {props.children}</StyledLink>
        </>
    )
}