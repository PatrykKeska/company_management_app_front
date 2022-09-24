import React from 'react'
import styled from 'styled-components'

interface Props {
  row?: boolean
}

export const StyledLabel = styled.label<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
`
