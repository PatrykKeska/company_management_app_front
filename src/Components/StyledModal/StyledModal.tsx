import styled from "styled-components";


export const StyledModal = styled.div`
  width: 95vw;
  min-height: 100vh;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  border-collapse: collapse;
  animation: render .3s linear;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 50px 10px;


  @keyframes render {
    0% {
      opacity: 0;

      100% {
        opacity: 1;
      }
    }
`