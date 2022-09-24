import styled from 'styled-components'

interface Props {
  big?: boolean
}
export const InventoryButtonSubbmit = styled.button<Props>`
  width: ${({ big }) => (big ? '150px' : '60px')};
  height: ${({ big }) => (big ? '40px' : '30px')};
  margin-top: ${({ big }) => (big ? '30px' : '0px')};
  font-weight: bold;
  color: white;
  background-color: rgba(238, 81, 22, 0.85);
  border: none;
  border-radius: 10px;
  transition: 0.2s linear all;
  &:hover {
    transform: scale(0.9);
    color: black;
    background-color: white;
  }
`
