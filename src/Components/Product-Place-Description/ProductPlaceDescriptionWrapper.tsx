import styled from "styled-components";

export const ProductPlaceDescriptionWrapper = styled.div`
  width: 350px;
  margin: 10px auto;
  height: 330px;
  display: grid;
  padding: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  transition: .2s linear all;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  border-collapse: collapse;

  @media (min-width: 500px) {
    width: 600px;
    height: 400px;
  }

  &:hover {
    box-shadow: 0 0 20px white;
    transform: scale(.98);
    
  }
`