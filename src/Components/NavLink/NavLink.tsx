import React, {MouseEventHandler, useContext, useState} from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconProp} from "@fortawesome/fontawesome-svg-core";


interface Props {
    path: string;
    children: string;
    icon: IconProp;
    click: MouseEventHandler;


}

const StyledLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 5px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  transition: .2s linear all;

  
  &:after{
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    left: 0;
    position: absolute;
    transform: translateX(-110%);
    transition: .2s linear all;
    z-index: -1;
  }

  
  &:hover:after{
    transform: translateX(0);
  }
  &:hover{
    color: white;
  }
  

`

export const NavLink = (props: Props) => {

    return (
        <>
        <StyledLink onClick={props.click} to={props.path}><FontAwesomeIcon icon={props.icon}/> {props.children}</StyledLink>
        </>
    )
}