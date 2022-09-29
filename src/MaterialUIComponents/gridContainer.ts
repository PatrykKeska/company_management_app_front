import styled from 'styled-components'

export const GridContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(2,1fr)',
  gap: 5,
  paddingTop: '30px',
})
