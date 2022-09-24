import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff96b;
  padding: 50px;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

export const SendingPopUp = () => {
  return (
    <Wrapper>
      <h3>Item was added successfully!</h3>
    </Wrapper>
  )
}
