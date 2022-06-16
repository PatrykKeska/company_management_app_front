import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {NavLink} from "../../Components/NavLink/NavLink";
import {faDatabase, faHome, faPlusCircle,} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faXmark, faBars} from '@fortawesome/free-solid-svg-icons'
import useWindowDimensions from "../../utils/get_window-dimensions";

const StyledNav = styled.nav`
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
  background-color:#FFF96B;
  

  @media (min-width: 800px ) {
    flex-direction: row;
    height: 10vh;
    width: 100vw;
    position: relative;
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
    const [isMobile, setMobile] = useState([]);
    const {width} = useWindowDimensions();
    useEffect(() => {
        if (width >= 800) {

            setOpen(true)
        }
   
    })



    return (
        <>
            {isOpen?  <Burger onClick={() => setOpen(!isOpen)} icon={faXmark}/> :<Burger onClick={() => setOpen(!isOpen)} icon={faBars}/> }
            {isOpen ? <StyledNav>
                <NavLink icon={faDatabase} path={'/storage'}> Magazyn</NavLink>
                <NavLink icon={faHome} path={'/places'}>Placówki</NavLink>
                <NavLink icon={faPlusCircle} path={'/add-items'}>Dodaj Przedmioty</NavLink>
                <NavLink icon={faPlusCircle} path={'/add-places'}>Dodaj Placówki</NavLink>
            </StyledNav> : null}
        </>

    )
}