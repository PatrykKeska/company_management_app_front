import React, { MouseEventHandler } from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props {
  path: string
  children: JSX.Element | JSX.Element[] | string
  icon: IconProp
  click: MouseEventHandler
  home?: string
}

interface PropsLink {
  to: string
}
const StyledLink = styled(Link)<PropsLink>`
  text-transform: uppercase;
  text-decoration: none;
  color: black;
  padding: 5px 10px;
  border-radius: 50px;
  margin: 5px;
  position: relative;
  z-index: 2;
  overflow: hidden;
  transition: 0.2s linear all;
  &.active {
    background-color: ${({ to }) =>
      to === '/places' ||
      to === '/storage' ||
      to === '/add-items' ||
      to === '/add-places' ||
      to === '/inventory' ||
      to === '/finalized'
        ? 'black'
        : 'none'};
    color: ${({ to }) =>
      to === '/places' ||
      to === '/storage' ||
      to === '/add-items' ||
      to === '/add-places' ||
      to === '/inventory' ||
      to === '/finalized'
        ? 'white'
        : 'none'};
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: black;
    top: 0;
    left: 0;
    position: absolute;
    transform: translateX(-110%);
    transition: 0.2s linear all;
    z-index: -1;
  }

  &:hover:after {
    transform: translateX(0);
  }
  &:hover {
    color: white;
  }
`

export const NavLink = (props: Props) => {
  return (
    <>
      <StyledLink onClick={props.click} to={props.path}>
        <FontAwesomeIcon icon={props.icon} /> {props.children}
      </StyledLink>
    </>
  )
}
