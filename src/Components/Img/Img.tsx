import React from 'react'
import styled from 'styled-components'

interface Props {
  src?: string
  width: string
  height: string
}

const StyledImg = styled.img<Props>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 40px;
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
  align-self: center;
  justify-self: center;
  margin: 10px 0;

  @media (min-width: 800px) {
    width: 250px;
    height: 160px;
  }
`

export const Img = (props: Props) => {
  const { src, width, height } = props
  return (
    <>
      <StyledImg height={height} width={width} src={src} />
    </>
  )
}
