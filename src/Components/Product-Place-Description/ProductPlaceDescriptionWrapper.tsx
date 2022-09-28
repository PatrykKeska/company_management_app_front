import styled from 'styled-components'
interface Props {
  isActive: number
}
export const ProductPlaceDescriptionWrapper = styled.div<Props>`
  width: 350px;
  filter: ${({ isActive }) =>
    isActive === 0 ? 'grayscale(1)opacity(0.7)' : null};
  position: relative;
  margin: 10px 5px;
  height: 330px;
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  transition: 0.2s linear all;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-collapse: collapse;

  @media (min-width: 500px) {
    width: 450px;
    height: 400px;
  }

  &:hover {
    box-shadow: 0 0 20px white;
    transform: scale(0.98);
  }
`
