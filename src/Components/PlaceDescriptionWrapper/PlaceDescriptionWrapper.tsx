import styled from 'styled-components'
import { Wrapper } from '../Wrapper /Wrapper'

export const PlaceDescriptionWrapper = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 100px;

  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
