import styled from "styled-components";

interface Props {
    small?: boolean
    positionStart? : number
    positionEnd? : number
}

export const Button = styled.button<Props>`
background-color: black;
  color: white;
  font-weight: bold;
  padding:${props => props.small  ? '10px 10px' : '20px 5px'};
  width: ${props => props.small ? '150px' : '250px'};
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
    transform: scale(.9);
    color: black;
    background-color: white;
  }
  
  @media(min-width: 500px){
    grid-column-start: ${({positionStart})=> positionStart};
    grid-column-end: ${({positionEnd})=> positionEnd};
    justify-self: center;
  }
`

