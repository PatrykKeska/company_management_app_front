import React, { useContext } from 'react'
import styled from 'styled-components'
import { NavLink } from '../../../Components/NavLink/NavLink'
import {
  faDatabase,
  faHome,
  faPlusCircle,
  faBoxesStacked,
  faCheckCircle,
  faRightFromBracket,
  faXmark,
  faBars,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavContext } from '../../../context/nav/nav.context'

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
  background-color: #fff96b;
  overflow: hidden;
  transition: 0.3s linear all;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (min-width: 1000px) {
    flex-direction: row;
    height: 10vh;
    width: 100vw;
    position: relative;
    animation: none;
    transform: translateX(0);
    font-size: 0.8em;
  }
`

const Burger = styled(FontAwesomeIcon)`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 101;
  font-size: 2em;
  @media (min-width: 1000px) {
    display: none;
  }
`

export const Nav = () => {
  const { isNavOpen, setIsNavOpen } = useContext(NavContext)
  return (
    <>
      {isNavOpen ? (
        <Burger onClick={() => setIsNavOpen(!isNavOpen)} icon={faXmark} />
      ) : (
        <Burger onClick={() => setIsNavOpen(!isNavOpen)} icon={faBars} />
      )}

      <StyledNav open={isNavOpen}>
        <NavLink
          click={() => {
            setIsNavOpen(false)
          }}
          icon={faRightFromBracket}
          path={'/'}
        >
          Log out
        </NavLink>

        <NavLink
          click={() => {
            setIsNavOpen(false)
          }}
          icon={faDatabase}
          path={'/storage'}
        >
          Storage
        </NavLink>

        <NavLink
          click={() => {
            setIsNavOpen(false)
          }}
          icon={faHome}
          path={'/places'}
        >
          Offices
        </NavLink>

        <NavLink
          click={() => {
            setIsNavOpen(false)
          }}
          icon={faPlusCircle}
          path={'/add-items'}
        >
          New Item
        </NavLink>

        <NavLink
          click={() => {
            setIsNavOpen(false)
          }}
          icon={faPlusCircle}
          path={'/add-places'}
        >
          New office
        </NavLink>

        <NavLink
          click={() => {
            setIsNavOpen(false)
          }}
          icon={faBoxesStacked}
          path={'/inventory'}
        >
          Inventory
        </NavLink>

        <NavLink
          click={() => {
            setIsNavOpen(false)
          }}
          icon={faCheckCircle}
          path={'/finalized'}
        >
          finalized
        </NavLink>
      </StyledNav>
    </>
  )
}
