import styled from 'styled-components'

export const StyledTbody = styled.tbody`
  transition: 0.2s linear all;
  position: relative;
  z-index: 1;
  font-weight: bold;
  background-color: #fff96b;

  &:nth-of-type(even) {
    background-color: rgb(243, 233, 105);
  }

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.37);
    top: 0;
    left: 0;
    position: absolute;
    transform: translateX(-101%);
    transition: 0.2s linear all;
    z-index: -1;
    opacity: 0;
  }

  &:hover:after {
    transform: translateX(0);
    opacity: 1;
  }

  &:hover {
    color: white;
  }
`
