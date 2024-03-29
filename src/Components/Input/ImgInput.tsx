import React, { ChangeEventHandler } from 'react'
import styled from 'styled-components'

interface Props {
  type: string
  value?: string | number | any
  name: string
  placeholder: string
  onChange: ChangeEventHandler
}

export const StyledInput = styled.input`
  padding: 15px;
  min-width: 200px;
  width: 80vw;
  max-width: 500px;
  border: 0;
  background-color: white;
  border-radius: 25px;
  text-align: center;
  margin: 20px 0;
  transition: 0.3s linear all;
  &:hover {
    box-shadow: 0 0 5px 1px black;
  }
`

export const ImgInput = (props: Props) => {
  return (
    <StyledInput
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
    ></StyledInput>
  )
}
