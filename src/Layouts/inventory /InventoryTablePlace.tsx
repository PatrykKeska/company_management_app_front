import React, { EventHandler } from 'react'
import { StyledTable } from '../../Components/Table/Table'
import { StyledTbody } from '../../Components/Tbody/Tbody'
import { StyledTd } from '../../Components/Td/Td'
import { InventoryButton } from '../../Components/InventoryButton/InventoryButton'
import { TbodyLayoutPlace } from './TbodyLayoutPlace'
import { SinglePlaceTypes } from '../../types/Places.types'

interface Props {
  place: SinglePlaceTypes[]
  onClick: EventHandler<any>
}

export const InventoryTablePlace = (props: Props) => {
  const { place, onClick } = props

  return (
    <StyledTable>
      <TbodyLayoutPlace />

      {place.map((place: SinglePlaceTypes) => (
        <StyledTbody key={place.id}>
          <tr>
            <StyledTd>{place.name}</StyledTd>
            <StyledTd>{place.city}</StyledTd>
            <StyledTd>{place.street}</StyledTd>
            <StyledTd>
              <InventoryButton value={place.id} onClick={() => onClick(place)}>
                Pick
              </InventoryButton>
            </StyledTd>
          </tr>
        </StyledTbody>
      ))}
    </StyledTable>
  )
}
