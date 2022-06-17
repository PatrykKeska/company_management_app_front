import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavLink} from "../../Components/NavLink/NavLink";
import {faDatabase, faHome, faPlusCircle,} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark, faBars} from '@fortawesome/free-solid-svg-icons'


interface Props {
    open: boolean
}

const StyledNav = styled.nav<Props>`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  background-color: #FFF96B;
  overflow: hidden;
  transition: .3s linear all;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};


  @media (min-width: 800px ) {
    flex-direction: row;
    height: 10vh;
    width: 100vw;
    position: relative;
    animation: none;
    transform: translateX(0);
  }

`

const Burger = styled(FontAwesomeIcon)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 101;
  font-size: 2em;
  @media (min-width: 800px) {
    display: none;
  }

`

export const Nav = () => {
    const [isOpen, setOpen] = useState(true);

    return (
        <>
            {isOpen ? <Burger onClick={() => setOpen(!isOpen)} icon={faXmark}/> :
                <Burger onClick={() => setOpen(!isOpen)} icon={faBars}/>}
            <StyledNav open={isOpen}>
                <NavLink click={()=>{setOpen(!isOpen)}} icon={faDatabase} path={'/storage'}> Magazyn</NavLink>
                <NavLink click={()=>{setOpen(!isOpen)}} icon={faHome} path={'/places'}>Placówki</NavLink>
                <NavLink click={()=>{setOpen(!isOpen)}} icon={faPlusCircle} path={'/add-items'}>Dodaj Przedmioty</NavLink>
                <NavLink click={()=>{setOpen(!isOpen)}} icon={faPlusCircle} path={'/add-places'}>Dodaj Placówki</NavLink>
            </StyledNav>
        </>

    )
}