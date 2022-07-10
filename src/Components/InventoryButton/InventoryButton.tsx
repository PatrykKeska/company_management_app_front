import styled from "styled-components";

interface Props {
    big?: boolean
}
export const InventoryButton = styled.button<Props>`
  width: ${({big}) => big ? "150px" : "60px"};
  height: ${({big}) => big ? "40px" : "30px"};
  margin-top: ${({big}) => big ? "30px" : '0px'};
  font-weight: bold;
  color: white;
  background-color: rgba(0, 0, 0, 0.48);
  border: none;
  border-radius: 10px;
  transition: .2s linear all;

  &:hover {
    transform: scale(.9);
    color: black;
    background-color: white;
  }

`