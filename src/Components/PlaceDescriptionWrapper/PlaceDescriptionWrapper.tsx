import styled from 'styled-components'
import { Wrapper } from '../Wrapper /Wrapper'

export const PlaceDescriptionWrapper = styled(Wrapper)`
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 100px;
  }
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
`
