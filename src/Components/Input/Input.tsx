import React, { ChangeEventHandler } from 'react'
import styled from 'styled-components'

interface Props {
  type: string
  value?: string | number | any
  name: string
  onChange: ChangeEventHandler
  disabled?: boolean
}

export const StyledInput = styled.input<Props>`
  padding: 15px;
  min-width: 200px;
  width: 80vw;
  max-width: 500px;
  border: 0;
  color: ${({ disabled }) => disabled && 'white'};
  background-color: ${({ disabled }) => (disabled ? '#000000' : 'white')};
  filter: ${({ disabled }) => (disabled ? 'opacity(0.6)' : 'opacity(1)')};
  border-radius: 25px;
  text-align: center;
  margin: 20px 0;
  transition: 0.3s linear all;

  &:hover {
    box-shadow: 0 0 5px 1px black;
  }
`

export const Input = (props: Props) => {
  return (
    <StyledInput
      onChange={props.onChange}
      value={props.value}
      name={props.name}
      required
      type={props.type}
      disabled={props.disabled}
    />
  )
}
